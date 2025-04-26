<template>
  <div class="register-page">
    <!-- OTP Verification Section -->
    <div class="otp-container bg-light" :class="{ 'otp-active': showOtp }">
      <h2 class="otp-title">Verify Your Account</h2>
      <div class="otp-inputs">
        <input v-for="i in 6" :key="i" v-model="otp[i - 1]" type="text" maxlength="1" @input="focusNext(i)" @keydown.delete="focusPrev(i)" class="otp-input" />
      </div>
      <div class="otp-actions">
        <button @click="submitOtp" class="btn btn-verify">Verify</button>
        <button @click="resendOtp" class="btn btn-resend">Resend Code</button>
      </div>
      <div class="otp-feedback" :class="feedbackClass">{{ feedbackMessage }}</div>
    </div>

    <!-- Registration Form -->
    <section class="registration-form" :class="{ 'form-hidden': showOtp }">
      <div class="rounded p-2 bg-light form-sign">
        <div class="d-flex flex-column justify-content-center align-items-start">
          <center>
            <div class="mb-4"><img src="https://kolshy.ae/wp-content/uploads/2025/02/Untitled-3000-x-750-px.gif" class="img-fluid" alt="logo-form" /></div>
          </center>
          <h1 class="fs-1 fw-bold mt-4" style="color: #000336">Create Account</h1>
          <form method="post" class="w-100 p-0" @submit.prevent="sendForm()">
            <small style="font-size: 12px; font-weight: bold; color: red; display: none" id="name_confirm">Sorry, This name or email is not available or is existing</small>
            <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-0">
              <input type="text" name="name" id="name" v-model="Name" class="bg-transparent w-75 p-2" style="border: none; outline: none; font-weight: 500" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" required />
            </div>
            <small style="font-size: 12px; font-weight: bold; color: gray">Just use [A,Z,a,z,1,9,@]</small>
            <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4 mt-4">
              <input type="email" class="bg-transparent w-75 p-2" v-model="Email" style="border: none; outline: none; font-weight: 500" placeholder="Email " aria-label="Email" aria-describedby="basic-addon1" required />
            </div>
            <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-0">
              <input type="text" class="bg-transparent w-75 p-2" v-model="Password" style="border: none; outline: none; font-weight: 500" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" required />
            </div>
            <small style="font-size: 12px; font-weight: bold; color: gray">must use at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character</small>
            <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4 mt-4">
              <input type="password" class="bg-transparent w-75 p-2" v-model="Password_confirmation" style="border: none; outline: none; font-weight: 500" placeholder=" Confirmation Your Password" aria-label="Username" aria-describedby="basic-addon1" required />
            </div>

            <!-- <div :class="vendor_or_not === 'vendor' ? 'd-block' : 'd-none'" style="display: none">
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4">
                <input type="text" class="bg-transparent w-75 p-2" v-model="shopName" style="border: none; outline: none; font-weight: 500" placeholder="Shop Name" aria-label="Shop" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
              </div>
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-0">
                <input type="text" class="bg-transparent w-75 p-2" v-model="shopUrl" style="border: none; outline: none; font-weight: 500" placeholder="Shop URL" aria-label="Shop" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
              </div>
              <small>{{ "https://kolshy.com/" + shopName + shopUrl }}</small>
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4 mt-4">
                <input type="text" class="bg-transparent w-75 p-2" v-model="street" style="border: none; outline: none; font-weight: 500" placeholder="Street" aria-label="Street" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
              </div>
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4">
                <input type="text" class="bg-transparent w-50 p-2" v-model="City" style="border-right: 1px solide gary; border-top: none; border-left: none; border-bottom: none; outline: none; font-weight: 500" placeholder="City" aria-label="City" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
                <input type="text" class="bg-transparent w-50 p-2" v-model="ZIP" style="border: none; outline: none; font-weight: 500" placeholder="ZIP Code" aria-label="ZIP" aria-describedby="basic-addon1" />
              </div>
              <div style="border: none" class="input-group w-100 justify-content-between align-items-end mb-4">
                <select name="country" v-model="country" id="country" style="border: 0.5px solid #f0f0f0; outline: none; font-weight: 500" class="w-100 p-2">
                  <option value="none">Select Your Country</option>
                  <option value="eg">Egypt</option>
                </select>
              </div>
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4">
                <input type="text" class="bg-transparent w-75 p-2" v-model="status" style="border: none; outline: none; font-weight: 500" placeholder="Status" aria-label="Status" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
              </div>
              <div style="border: none; border-bottom: 1px solid #e51742" class="input-group w-100 justify-content-between align-items-end mb-4">
                <input type="tel" class="bg-transparent w-75 p-2" v-model="phone" style="border: none; outline: none; font-weight: 500" placeholder="Phone Number" aria-label="Phone" aria-describedby="basic-addon1" :required="vendor_or_not === 'vendor'" />
              </div>
              <div>
                <div class="d-flex align-items-start m-2">
                  <input type="checkbox" name="type-account" value="accept ruls" v-model="accept" style="outline: none; margin: 0 8px" :required="vendor_or_not === 'vendor'" />
                  <p class="fw-bold">I have read and agree to the Terms & Conditions</p>
                </div>
              </div>
            </div> -->

            <!-- <div class="input-group w-100 flex-column justify-content-start align-items-start mb-4">
              <div class="d-flex align-items-start m-2">
                <input type="radio" name="type-account" value="customer" checked v-model="vendor_or_not" style="outline: none; margin: 0 8px" />
                <p class="fw-bold">I am a customer</p>
              </div>
              <div class="d-flex align-items-start m-2">
                <input type="radio" name="type-account" value="vendor" v-model="vendor_or_not" style="outline: none; margin: 0 8px" />
                <p class="fw-bold">I am a vendor</p>
              </div>
            </div> -->
            <div class="d-flex flex-column justify-content-center align-items-center mb-4">
              <button type="submit" class="btn rounded-3 d-flex justify-content-center align-items-center w-100 mb-2" style="background-color: #e51742; color: var(--text-color-secondary); font-weight: 700; font-size: 20px">
                Create Account<span class="ml-2 mt-2"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd" /></svg
                ></span>
              </button>
              <button class="btn w-100 d-flex justify-content-center align-items-center w-100 mb-4 p-2" style="background-color: rgb(180, 180, 180); color: var(--text-color); font-weight: 700">
                <span class="mr-2"
                  ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
                    <path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38" />
                    <path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21" />
                    <path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9" />
                    <path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68" />
                    <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4" /></svg
                ></span>
                <b style="margin-bottom: 5px">Sign up with google</b>
              </button>
            </div>
          </form>
          <div class="mt-4 d-flex justify-content-center align-items-center w-100">
            <p class="text-center text-secondary mb-0" style="font-weight: 400">Already have account?</p>
            <a href="./login" style="color: #e51742; text-decoration: underline; font-weight: 600">Sign in</a>
          </div>
          <div class="mt-4 d-flex justify-content-center align-items-center w-100">
            <div class="btn rounded-3 d-flex justify-content-center align-items-center w-100 mb-2" style="background-color: #000336; color: var(--text-color-secondary); font-weight: 700; font-size: 20px">
              Want to sell via Kolshy ?
              <span class="ml-2 mt-2"
                ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd" /></svg
              ></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  data() {
    return {
      showOtp: false,
      Name: "",
      Email: "",
      Password: "",
      Password_confirmation: "",
      feedbackMessage: "", // Feedback to display to the user
      feedbackClass: "", // Feedback CSS class (success or error)
      otp: Array(6).fill(""),
    };
  },
  validations() {
    return {
      Name: { required },
      Email: { required, email },
      Password: { required, minLength: minLength(6) },
      Password_confirmation: {
        required,
      },
    };
  },

  setup() {
    const v$ = useVuelidate();
    const toast = useToast();
    return { v$, toast };
  },
  methods: {
    async sendForm() {
      this.v$.$touch();
      if (!this.v$.$error) {
        const userData = {
          name: this.Name,
          email_or_phone: this.Email,
          password: this.Password,
          password_confirmation: this.Password_confirmation,
        };

        try {
          const response = await axios.post("https://back.kolshy.ae/api/customer/register", userData);
          if (response.status === 201) {
            this.toast.success("Successfully! We'll send a code to your email");
            window.scrollTo({ top: 0, behavior: "smooth" });
            this.showOtp = true; 
            localStorage.setItem("token", response.data.data.token); 
          }
        } catch (error) {
          const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
          this.toast.error(errorMessage);
        }
      }
    },

    async submitOtp() {
      const otpCode = this.otp.join("");

      if (otpCode.length !== 6) {
        this.toast.warning("Please enter 6-digit code", "error");
        return;
      }

      try {
        const response = await axios.post("https://back.kolshy.ae/api/auth/verification/verify", {
          otp: otpCode,
          token: localStorage.getItem("token"),
        });

        if (response.data.success) {
          this.toast.success("Verification successful!", "success");
          this.$router.push("/");
        }
      } catch (error) {
        this.toast.error(error.response.data.message || "Verification failed", "error");
      }
    },

    focusNext(index) {
      if (index < 6 && this.otp[index - 1]) {
        this.$refs[`otp${index}`][0].focus();
      }
    },

    focusPrev(index) {
      if (index > 1 && !this.otp[index - 1]) {
        this.$refs[`otp${index - 1}`][0].focus();
      }
    },

  },
};
</script>

<style>
.otp-container {
  transition: all 0.3s ease;
  transform: scale(0);
  opacity: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.otp-active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.otp-inputs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
}

.otp-input {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.otp-input:focus {
  border-color: #e51742;
  box-shadow: 0 0 8px rgba(229, 23, 66, 0.2);
}

.otp-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-verify {
  background: #e51742;
  color: white;
  padding: 0.75rem 2rem;
}

.btn-resend {
  border: 2px solid #e51742;
  color: #e51742;
  background: transparent;
}

.feedback-error {
  color: #dc3545;
  margin-top: 1rem;
  text-align: center;
}

.feedback-success {
  color: #28a745;
  margin-top: 1rem;
  text-align: center;
}

.form-hidden {
  opacity: 0.3;
  pointer-events: none;
}
</style>
