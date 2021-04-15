<template>
  <div>Implement solution here</div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      webinerList: []
    }
  },
  created() {
    const api = 'https://allansolutions.com/.netlify/functions/webinars'
    axios.get(api).then((result)=>{
      console.log(result.data)
      this.$store.commit('addList',result.data)
      this.webinerList = result.data
    })
  },
}
</script>
