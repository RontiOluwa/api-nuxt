<template>
  <div>
    <Header/>
    <div v-for="item in webinerList" :key="item.title" class="webinarList my-5">
      <div class="max-w-4xl m-auto p-6">
        <div class="flex">
          <div class="webinar_date text-center w-1/4">
            <h4 class="text-3xl font-bold text-yellow-400">12</h4>
            <a class="text-xs">Apr-12</a>
          </div>
          <div class="webinar_header mx-10 flex text-center w-2/4">
            <img class="w-20 m-auto" :src="item.thumbnail" alt="thumbnail">
            <h4 class="font-bold text-lg m-auto my-5">{{item.title}}</h4>
          </div>
          <div class="join_us mx-10 w-1/4">
            <a :href="item.url" class="my-8 w-24 rounded font-bold p-3 bg-yellow-400">Join Us</a>
          </div>
        </div>
        <div v-for="webinar in item.webinars" :key="webinar.title">
          <div class="flex my-5">
            <div class="bg-B1DEFF p-4 rounded w-1/4 text-center">
              <div class="my-12">
                <h4>{{Math.abs(new Date(webinar.startDateTime) - new Date(webinar.endDateTime)) / 36e5}}</h4>
                <p>{{webinar.timeZone}}</p>
                <a class="text-xs">2 HRS</a>
              </div>
            </div>
            <div class="w-3/4 bg-B1DEFF mx-3 rounded p-5">
              <h4 class="font-bold">{{webinar.title}}</h4>
              <p class="text-xs my-2">{{webinar.blurb}}</p>
              <div class="border-top-black my-5">
                <p class="text-sm my-2">Speaker</p>
                <ul v-for="speaker in webinar.speakers" :key="speaker.name">
                  <li class="text-xs my-2">{{speaker.name}}, {{speaker.position}} - {{speaker.company}}</li>                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
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
