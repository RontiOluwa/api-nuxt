<template>
    <div>
        <div v-show="loader" class="preloader w-full" >
            <img src="../assets/35.gif" class="m-auto my-10 w-16"/>
        </div>
        <div v-for="item in webinerList" :key="item.title" class="webinarList my-5">
            <div class="max-w-4xl m-auto p-6">
            <div class="flex">
                <div class="webinar_date text-left w-16">
                    <h4 class="text-3xl font-bold text-yellow-400 text-left">
                        {{ new Date(item.webinars[0].startDateTime).getDate() }}
                    </h4>
                    <a class="text-xs">
                        {{ new Date(item.webinars[0].startDateTime).toLocaleString('default', { month: 'long' }) }}
                        `{{ new Date(item.webinars[0].startDateTime).getDate() }}
                    </a>
                </div>
                <div class="webinar_header mx-10 flex text-center w-8/12">
                    <img class="w-24 m-auto" :src="item.thumbnail" alt="thumbnail">
                    <h4 class="font-bold text-2xl m-auto my-5">{{item.title}}</h4>
                </div>
                <div class="join_us my-4 w-3/12 text-right">
                    <a :href="item.url" class="my-8 w-24 px-12 text-center rounded font-bold p-2 bg-yellow-400">Join Us</a>
                </div>
            </div>
            <div v-for="webinar in item.webinars" :key="webinar.title">
                <div class="flex my-12">
                    <div class="w-32"></div>
                    <div class="w-11/12 flex">
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
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            webinerList: [],
            loader: true
        }
    },
    created() {
        const api = 'https://allansolutions.com/.netlify/functions/webinars'
        axios.get(api).then((result)=>{
            this.$store.commit('equateList',result.data)
            this.webinerList = this.$store.state.list
            this.loader = false
        })
    },
}
</script>