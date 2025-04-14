<template></template>

<script>
import axios from "axios";
export default {
  name: "ShopPage",
  data() {
    return {
      selection: [],
    };
    },
    mounted() {
    this.getUserSelect();
  },
  watch: {
    "$route.query.category": "getUserSelect",
  },
  methods: {
    async getUserSelect() {
      const category = this.$route.query.category;
          if (category) {
        console.log(category)
        let res = await axios.get(`http://localhost:3000/item?category=${category}`).then((response) => {
          this.selection = response.data;
        }).catch(err => {
        console.error("We've a problem here please try agin", err)
        })
          } else {
        console.error("We've a problem in link or api here please try agin")
      }
    },
  },

};
</script>

<style></style>
