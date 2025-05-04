<template>
  <div class="password-change-container">
    <h2 class="section-title">Change Password</h2>
    
    <form @submit.prevent="handleSubmit" class="password-form">
      <!-- Current Password -->
      <div class="form-group">
        <label for="currentPassword">Current Password</label>
        <div class="input-wrapper">
          <input
            :type="showCurrentPassword ? 'text' : 'password'"
            id="currentPassword"
            v-model="currentPassword"
            required
            placeholder="Enter your current password"
          />
          <button type="button" class="toggle-visibility" @click="showCurrentPassword = !showCurrentPassword">
            <i :class="showCurrentPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
          </button>
        </div>
      </div>

      <!-- New Password -->
      <div class="form-group">
        <label for="newPassword">New Password</label>
        <div class="input-wrapper">
          <input
            :type="showNewPassword ? 'text' : 'password'"
            id="newPassword"
            v-model="newPassword"
            required
            placeholder="Create a new password"
            @input="validatePassword"
          />
          <button type="button" class="toggle-visibility" @click="showNewPassword = !showNewPassword">
            <i :class="showNewPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
          </button>
        </div>
        <password-strength-meter :password="newPassword" />
      </div>

      <!-- Confirm New Password -->
      <div class="form-group">
        <label for="confirmPassword">Confirm New Password</label>
        <div class="input-wrapper">
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Re-enter your new password"
          />
          <button type="button" class="toggle-visibility" @click="showConfirmPassword = !showConfirmPassword">
            <i :class="showConfirmPassword ? 'far fa-eye-slash' : 'far fa-eye'"></i>
          </button>
        </div>
        <div v-if="passwordMismatch" class="error-message">
          Passwords do not match
        </div>
      </div>

      <!-- Form Actions -->
      <div class="form-actions">
        <button 
          type="submit" 
          class="submit-btn"
          :disabled="isSubmitting || !formValid"
        >
          <span v-if="isSubmitting" class="spinner"></span>
          {{ isSubmitting ? 'Updating...' : 'Update Password' }}
        </button>
      </div>
    </form>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="modal-overlay">
      <div class="modal-content">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h3>Password Changed Successfully!</h3>
        <p>Your password has been updated successfully.</p>
        <button @click="handleSuccess" class="modal-btn">Continue</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PasswordStrengthMeter from './PasswordStrengthMeter.vue';

export default {
  name: 'PasswordChangeForm',
  components: {
    PasswordStrengthMeter
  },
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showCurrentPassword: false,
      showNewPassword: false,
      showConfirmPassword: false,
      isSubmitting: false,
      showSuccessModal: false,
      passwordRequirements: {
        minLength: 8,
        hasNumber: false,
        hasSpecialChar: false,
        hasUpperCase: false
      }
    };
  },
  computed: {
    passwordMismatch() {
      return this.newPassword && this.confirmPassword && this.newPassword !== this.confirmPassword;
    },
    formValid() {
      return (
        this.currentPassword &&
        this.newPassword &&
        this.confirmPassword &&
        !this.passwordMismatch &&
        this.passwordRequirements.minLength &&
        this.passwordRequirements.hasNumber &&
        this.passwordRequirements.hasSpecialChar &&
        this.passwordRequirements.hasUpperCase
      );
    }
  },
  methods: {
    validatePassword() {
      this.passwordRequirements = {
        minLength: this.newPassword.length >= 8,
        hasNumber: /\d/.test(this.newPassword),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(this.newPassword),
        hasUpperCase: /[A-Z]/.test(this.newPassword)
      };
    },
    async handleSubmit() {
      if (!this.formValid) return;

      this.isSubmitting = true;

      try {
        const response = await axios.put(
          'https://api.kolshy.ae/user/change-password',
          {
            current_password: this.currentPassword,
            new_password: this.newPassword,
            new_password_confirmation: this.confirmPassword
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
              'Content-Type': 'application/json'
            }
          }
        );

        if (response.status === 200) {
          this.showSuccessModal = true;
          this.resetForm();
        }
      } catch (error) {
        let errorMessage = 'Failed to change password';
        if (error.response) {
          if (error.response.status === 401) {
            errorMessage = 'Current password is incorrect';
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        }
        this.$toast.error(errorMessage);
      } finally {
        this.isSubmitting = false;
      }
    },
    resetForm() {
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
      this.showCurrentPassword = false;
      this.showNewPassword = false;
      this.showConfirmPassword = false;
    },
    handleSuccess() {
      this.showSuccessModal = false;
      this.$emit('password-changed');
    }
  }
};
</script>

<style scoped>
.password-change-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.5rem;
}

.password-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-weight: 500;
  color: #555;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #e51742;
  box-shadow: 0 0 0 2px rgba(229, 23, 66, 0.2);
}

.toggle-visibility {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 1rem;
}

.error-message {
  color: #e51742;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-actions {
  margin-top: 1rem;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #e51742;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #c01136;
}

.submit-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.success-icon {
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.modal-content h3 {
  margin-bottom: 0.5rem;
  color: #333;
}

.modal-content p {
  color: #666;
  margin-bottom: 1.5rem;
}

.modal-btn {
  padding: 0.5rem 1.5rem;
  background-color: #e51742;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.modal-btn:hover {
  background-color: #c01136;
}

@media (max-width: 600px) {
  .password-change-container {
    padding: 1.5rem;
  }
}
</style>
