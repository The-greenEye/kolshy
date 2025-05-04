<template>
  <div class="activity-feed">
    <!-- Feed Header -->
    <div class="feed-header">
      <h2>Recent Activities</h2>
      <div class="filter-controls">
        <select v-model="filterType" @change="fetchActivities">
          <option value="all">All Activities</option>
          <option value="login">Logins</option>
          <option value="post">Posts</option>
          <option value="transaction">Transactions</option>
          <option value="settings">Account Changes</option>
        </select>
        <select v-model="timeRange" @change="fetchActivities">
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading activities...</p>
    </div>

    <!-- Empty State -->
    <div v-else-if="activities.length === 0" class="empty-state">
      <i class="fas fa-stream"></i>
      <p>No activities found</p>
      <button @click="fetchActivities" class="refresh-btn"><i class="fas fa-sync-alt"></i> Refresh</button>
    </div>

    <!-- Activity List -->
    <ul v-else class="activity-list">
      <li v-for="activity in activities" :key="activity.id" class="activity-item">
        <div class="activity-icon" :class="activity.type">
          <i :class="getActivityIcon(activity.type)"></i>
        </div>
        <div class="activity-content">
          <div class="activity-header">
            <h3 class="activity-title">{{ activity.title }}</h3>
            <span class="activity-time">{{ formatTime(activity.timestamp) }}</span>
          </div>
          <p class="activity-description">{{ activity.description }}</p>
          <div v-if="activity.meta" class="activity-meta">
            <span v-for="(value, key) in activity.meta" :key="key" class="meta-item">
              <strong>{{ key }}:</strong> {{ value }}
            </span>
          </div>
        </div>
      </li>
    </ul>

    <!-- Pagination -->
    <div v-if="showPagination" class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1" class="page-btn">
        <i class="fas fa-chevron-left"></i>
      </button>
      <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="page-btn">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default {
  name: "ActivityFeed",
  props: {
    initialActivities: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activities: this.initialActivities,
      loading: false,
      filterType: "all",
      timeRange: "7",
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 0,
      error: null,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    showPagination() {
      return this.totalPages > 1;
    },
  },
  created() {
    if (this.initialActivities.length === 0) {
      this.fetchActivities();
    }
  },
  methods: {
    async fetchActivities() {
      this.loading = true;
      try {
        const response = await axios.get("https://api.kolshy.ae/api/profile", {
          params: {
            type: this.filterType,
            days: this.timeRange,
            page: this.currentPage,
            limit: this.itemsPerPage,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("auth_token")}`,
          },
        });

        this.activities = response.data.data;
        this.totalItems = response.data.meta.total_items;
      } catch (error) {
        console.error("Error fetching activities:", error);
        this.error = error.response?.data?.message || "Failed to load activities";
        this.$toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    getActivityIcon(type) {
      const icons = {
        login: "fas fa-sign-in-alt",
        logout: "fas fa-sign-out-alt",
        post: "fas fa-edit",
        transaction: "fas fa-exchange-alt",
        settings: "fas fa-cog",
        security: "fas fa-shield-alt",
        payment: "fas fa-credit-card",
        default: "fas fa-bell",
      };
      return icons[type] || icons.default;
    },
    formatTime(timestamp) {
      return dayjs(timestamp).fromNow();
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.fetchActivities();
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchActivities();
      }
    },
  },
};
</script>

<style scoped>
.activity-feed {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}

.feed-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.feed-header h2 {
  margin: 0;
  font-size: 1.25rem;
  color: #333;
}

.filter-controls {
  display: flex;
  gap: 0.75rem;
}

.filter-controls select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: #fff;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #666;
}

.spinner {
  width: 2rem;
  height: 2rem;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #e51742;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  color: #666;
}

.empty-state i {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #ddd;
}

.refresh-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.refresh-btn:hover {
  background: #eee;
}

.activity-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.activity-item {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.activity-icon.login {
  background-color: #4caf50;
}

.activity-icon.logout {
  background-color: #f44336;
}

.activity-icon.post {
  background-color: #2196f3;
}

.activity-icon.transaction {
  background-color: #ff9800;
}

.activity-icon.settings {
  background-color: #9c27b0;
}

.activity-icon.security {
  background-color: #607d8b;
}

.activity-icon.payment {
  background-color: #795548;
}

.activity-content {
  flex: 1;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.activity-title {
  margin: 0;
  font-size: 1rem;
  color: #333;
}

.activity-time {
  font-size: 0.75rem;
  color: #999;
}

.activity-description {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: #666;
}

.activity-meta {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.75rem;
}

.meta-item {
  background: #f5f5f5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: #555;
}

.meta-item strong {
  font-weight: 600;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  gap: 1rem;
}

.page-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-info {
  font-size: 0.875rem;
  color: #666;
}

@media (max-width: 600px) {
  .feed-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter-controls {
    width: 100%;
  }

  .filter-controls select {
    flex: 1;
  }

  .activity-item {
    flex-direction: column;
  }

  .activity-icon {
    margin-bottom: 0.5rem;
  }
}
</style>
