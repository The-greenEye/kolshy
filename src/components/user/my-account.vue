<template>
  <div class="profile-container">
    <!-- Profile Header -->
    <div class="header-section d-flex justify-content-between align-items-center mb-5">
      <div class="d-flex  flex-wrap align-items-center gap-4">
        <div class="avatar-container">
          <img :src="user.photo || defaultAvatar" class="profile-avatar" alt="Profile" style="width: 120px; height: 120px; border-radius: 50%" />
        </div>
        <div>
          <h1 class="mb-1 name-title">{{ user.name }}</h1>
          <p class="email text-muted">{{ user.email }}</p>
        </div>
      </div>
      <button class="btn btn-link p-0 edit-profile-btn" @click="EditProfile = !EditProfile">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" d="M4.5 17.207V19a.5.5 0 0 0 .5.5h1.793a.5.5 0 0 0 .353-.146l8.5-8.5l-2.5-2.5l-8.5 8.5a.5.5 0 0 0-.146.353ZM15.09 6.41l2.5 2.5l1.203-1.203a1 1 0 0 0 0-1.414l-1.086-1.086a1 1 0 0 0-1.414 0z" stroke-width="0.4" />
        </svg>
        <span class="edit-text">Edit Profile</span>
      </button>
    </div>

    <!-- Edit Profile Form -->
    <div class="profile-content mb-4" v-if="EditProfile">
      <form @submit.prevent="updateProfile" enctype="multipart/form-data">
        <div class="form-group mb-4">
          <label class="form-label">Profile Photo</label>
          <input type="file" ref="photoInput" @change="handlePhotoChange" accept="image/*" class="form-control" />
        </div>

        <div class="row g-4 mb-4">
          <div class="col-md-6">
            <label class="form-label">Full Name</label>
            <input type="text" v-model="user.name" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Email</label>
            <input type="email" v-model="user.email" class="form-control" required />
          </div>
          <div class="col-md-6">
            <label class="form-label">Phone</label>
            <input type="tel" v-model="user.phone" class="form-control" />
          </div>
          <div class="col-md-6">
            <label class="form-label">Country</label>
            <input type="text" v-model="user.country_id" class="form-control" />
          </div>
        </div>

        <button type="submit" class="save-btn" :disabled="isSaving">
          {{ isSaving ? "Saving..." : "Save Changes" }}
        </button>
      </form>
    </div>

    <!-- Address & Payment Section -->
    <div class="row g-4 mb-5">
      <div class="col-lg-6">
        <div class="section-block">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="section-title">My Address</h3>
            <small class="text-primary cursor-pointer">Edit</small>
          </div>
          <div class="block-style address-block">
            <div class="d-flex justify-content-between mb-2">
              <b>{{ user.name }}</b>
              <b class="text-muted">{{ user.phone }}</b>
            </div>
            <p class="mb-1 text-secondary">2118 Thornridge</p>
            <p class="mb-1 text-secondary">Live Tower P.O. Box 901</p>
            <p class="mb-0 text-secondary">Abu Dhabi, DB1 123-4567</p>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="section-block">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="section-title">Payment Methods</h3>
            <small class="text-primary cursor-pointer">Edit</small>
          </div>
          <div class="block-style payment-block">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <b>MasterCard</b>
                <span class="text-muted ms-2">**** 9550</span>
              </div>
              <img src="https://static.vecteezy.com/system/resources/previews/019/167/108/original/mastercard-free-download-free-png.png" class="card-logo" alt="MasterCard" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Activities Section -->
    <div>
    <div class="activities-section">
      <h2 class="mb-4 section-title">My Activities</h2>
      <div class="block-style activity-block  overflow-x-auto">
        <div class="d-flex align-items-start gap-4">
          <img :src="user.photo || defaultAvatar" class="activity-avatar" alt="Profile" />
          <div class="flex-grow-1">
            <div class="d-flex align-items-center gap-2 mb-2">
              <h5 class="mb-0">{{ user.name }}</h5>
              <div class="d-flex align-items-center gap-1">
                ⭐⭐⭐⭐⭐
                <small class="text-muted" style="white-space: nowrap">8 March 2024</small>
              </div>
            </div>
            <p class="text-secondary mb-3">In Washington, it is already difficult to surprise with the opening of a new institution...</p>
            <div class="d-flex gap-3">
              <img src="https://m.media-amazon.com/images/I/61tWTfjqlOL.jpg" class="product-img" alt="Product" />
              <img src="https://m.media-amazon.com/images/I/61tWTfjqlOL.jpg" class="product-img" alt="Product" />
            </div>
          </div>
        </div>
      </div>
    </div>      
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "UserProfile",
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      user: {
        name: "Mohammed Ali",
        email: "mohammed.kolsiv@email.com",
        country_id: "UAE",
        phone: "20 1234 5678 90",
        photo: null,
      },
      defaultAvatar: "https://image.lexica.art/full_jpg/a6c473a6-51e3-4679-88bd-31efa77a3599",
      isSaving: false,
      EditProfile: false,
      selectedPhotoFile: null,
    };
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await axios.get("https://back.kolshy.ae/api/profile", {
          headers: { Authorization: `Bearer ${localStorage.tokenkolshy || localStorage.tokenkolshyvendor}` },
        });
        if (response.data?.data) {
          this.user = { ...response.data.data };
        }
      } catch (error) {
        this.toast.error(error.response?.data?.message || "Failed to load profile");
      }
    },
    handlePhotoChange(event) {
      const file = event.target.files[0];
      if (!file?.type.startsWith("image/")) {
        this.toast.error("Please upload an image file");
        return;
      }
      this.user.photo = URL.createObjectURL(file);
      this.selectedPhotoFile = file;
    },
    async updateProfile() {
      this.isSaving = true;
      const formData = new FormData();
      if (this.selectedPhotoFile) formData.append("photo", this.selectedPhotoFile);
      Object.entries(this.user).forEach(([key, value]) => formData.append(key, value));

      try {
        await axios.post("https://back.kolshy.ae/api/profile", formData, {
          headers: {
            Authorization: `Bearer ${localStorage.tokenkolshy || localStorage.tokenkolshyvendor}`,
            "Content-Type": "multipart/form-data",
          },
        });
        this.toast.success("Profile updated successfully");
        this.EditProfile = false;
      } catch (error) {
        this.toast.error("Update failed");
      } finally {
        this.isSaving = false;
      }
    },
  },
  mounted() {
    this.fetchUserProfile();
  },
};
</script>

<style scoped>
:root {
  --primary-color: #2a5c8d;
  --secondary-color: #6c757d;
  --background-light: #f8f9fa;
}

.profile-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Arial", sans-serif;
  color: #333;
}

.header-section {
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
}

.name-title {
  font-size: 28px;
  color: #1a1a1a;
  font-weight: 600;
}

.email {
  font-size: 16px;
  letter-spacing: 0.5px;
}

.edit-profile-btn {
  color: var(--primary-color) !important;
  text-decoration: none !important;
  font-weight: 500;
}

.block-style {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 1.25rem;
  color: #1a1a1a;
  font-weight: 600;
}

.address-block p,
.payment-block {
  font-size: 14px;
  margin-bottom: 0.5rem;
}

.card-logo {
  width: 50px;
  height: auto;
}

.activity-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.product-img {
  width: 140px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
}

.save-btn {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
}

.save-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.save-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.text-primary {
  color: var(--primary-color) !important;
}

.text-secondary {
  color: var(--secondary-color) !important;
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1.5rem !important;
  }

  .product-img {
    width: 100px;
    height: 100px;
  }

  .name-title {
    font-size: 24px;
  }
}
</style>
