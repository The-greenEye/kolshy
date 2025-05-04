<template>
  <div class="password-strength-meter">
    <!-- Strength Indicator Bar -->
    <div class="strength-bar">
      <div 
        class="strength-segment"
        v-for="i in 4"
        :key="i"
        :class="{
          'weak': strengthLevel === 1 && i === 1,
          'fair': strengthLevel === 2 && i <= 2,
          'good': strengthLevel === 3 && i <= 3,
          'strong': strengthLevel === 4 && i <= 4,
          'empty': i > strengthLevel
        }"
      ></div>
    </div>
    
    <!-- Strength Label -->
    <div class="strength-label" :class="strengthClass">
      {{ strengthText }}
    </div>
    
    <!-- Requirements Checklist -->
    <ul class="requirements-list">
      <li v-for="req in requirements" :key="req.text" :class="{ 'met': req.met }">
        <i :class="req.met ? 'fas fa-check-circle' : 'far fa-circle'"></i>
        {{ req.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PasswordStrengthMeter',
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  computed: {
    requirements() {
      return [
        { 
          text: 'At least 8 characters', 
          met: this.password.length >= 8 
        },
        { 
          text: 'Contains a number', 
          met: /\d/.test(this.password) 
        },
        { 
          text: 'Contains uppercase letter', 
          met: /[A-Z]/.test(this.password) 
        },
        { 
          text: 'Contains special character', 
          met: /[!@#$%^&*(),.?":{}|<>]/.test(this.password) 
        }
      ];
    },
    strengthLevel() {
      const metCount = this.requirements.filter(r => r.met).length;
      
      // No password
      if (this.password.length === 0) return 0;
      
      // Weak: Only length requirement met
      if (metCount === 1) return 1;
      
      // Fair: Length + 1 other requirement
      if (metCount === 2) return 2;
      
      // Good: Length + 2 other requirements
      if (metCount === 3) return 3;
      
      // Strong: All requirements met
      return 4;
    },
    strengthText() {
      switch (this.strengthLevel) {
        case 0: return '';
        case 1: return 'Weak';
        case 2: return 'Fair';
        case 3: return 'Good';
        case 4: return 'Strong';
        default: return '';
      }
    },
    strengthClass() {
      switch (this.strengthLevel) {
        case 1: return 'weak';
        case 2: return 'fair';
        case 3: return 'good';
        case 4: return 'strong';
        default: return '';
      }
    }
  }
};
</script>

<style scoped>
.password-strength-meter {
  margin-top: 0.5rem;
}

.strength-bar {
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
  height: 4px;
}

.strength-segment {
  flex: 1;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.empty {
  background-color: #e0e0e0;
}

.weak {
  background-color: #ff5252; /* Red */
}

.fair {
  background-color: #ffab40; /* Orange */
}

.good {
  background-color: #ffd600; /* Yellow */
}

.strong {
  background-color: #4caf50; /* Green */
}

.strength-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.strength-label.weak {
  color: #ff5252;
}

.strength-label.fair {
  color: #ffab40;
}

.strength-label.good {
  color: #ffd600;
}

.strength-label.strong {
  color: #4caf50;
}

.requirements-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.75rem;
}

.requirements-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  color: #666;
}

.requirements-list li.met {
  color: #4caf50;
}

.requirements-list i {
  font-size: 0.9rem;
}

.requirements-list .fa-check-circle {
  color: #4caf50;
}

.requirements-list .fa-circle {
  color: #ddd;
}
</style>
