<template>
    <div class="container">
        <div class="columns mt-6">
            <div class="column has-background-light is-3 pt-3 pb-3 card">
                <div
                    :class="['select_option', select_option === 'recruiterProfile' ? ['has-background-primary', 'has-text-white'] : '']">
                    <p class="has-text-centered is-size-5 p-3 " @click="select_option = 'recruiterProfile'">ข้อมูลบริษัท
                    </p>
                </div>
                <div
                    :class="['select_option', select_option === 'myjob' ? ['has-background-primary', 'has-text-white'] : '']">
                    <p class="has-text-centered is-size-5 p-3 " @click="select_option = 'myjob'">งานที่ประกาศ</p>
                </div>
            </div>
            <recruiterProfile v-if="select_option === 'recruiterProfile'">
            </recruiterProfile >

            <myjobFavoriteListVue  v-if="select_option === 'favorite'">
            </myjobFavoriteListVue>

        </div>
        
    </div>


</template>



<script lang="ts">
import recruiterProfile from '@/components/recruiter-profile.vue';
//import { defineComponent, onMounted, reactive, ref } from 'vue'
//import myjobApplication from '@/components/myjob-application.vue';
//import myjobFavoriteListVue from '@/components/myjob-favorite-list.vue';
//import axios from '@/plugins/axios';
export default ({
    components: {
     recruiterProfile
      
    },
    data() {
  return {
    select_option : 'recruiterProfile',

  };
},
    
})
</script>

<style scoped>
.select_option {
    cursor: pointer;
}

.select_option:hover {
    background-color: rgb(255, 255, 255);
}</style>
