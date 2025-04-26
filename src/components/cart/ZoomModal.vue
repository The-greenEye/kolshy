<!-- components/ZoomModal.vue -->
<template>
  <div class="zoom-modal" v-if="show">
    <div class="modal-overlay" @click.self="close"></div>
    
    <div class="modal-content">
      <button class="close-button" @click="close">
        <i class="fas fa-times"></i>
      </button>
      <img :src="image" class="zoomed-image" alt="Zoomed product image">
    </div>
  </div>
</template>

<script>
export default {
    name: "ZoomModal",
  props: {
    image: String,
    show: Boolean
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.zoom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  z-index: 1001;
  max-width: 90%;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.zoomed-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.close-button i {
  font-size: 20px;
  color: #333;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 95%;
    padding: 10px;
  }
  
  .close-button {
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
  }
}
</style>