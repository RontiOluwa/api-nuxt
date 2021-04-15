<template>
  <div>
    <Header/>
  </div>
</template>
<script>
import axios from 'axios'
import Header from '../components/header.vue'
export default {
  components: {
    Header
  },
  data() {
    return {
      webinerList: []
    }
  },
  created() {
    const api = 'https://allansolutions.com/.netlify/functions/webinars'
    axios.get(api).then((result)=>{
      this.$store.commit('addList',result.data)
      this.webinerList = result.data
    })
  },
}
</script>
