<template>
    <div class="container">
        <div class="columns mt-6">
            <div class="column has-background-light is-3 pt-3 pb-3 card">
                <div
                    :class="['select_option', select_option === 'application' ? ['has-background-primary', 'has-text-white'] : '']">
                    <p class="has-text-centered is-size-5 p-3 " @click="select_option = 'application'">งานกำลังที่ยื่นสมัคร
                    </p>
                </div>
                <div
                    :class="['select_option', select_option === 'favorite' ? ['has-background-primary', 'has-text-white'] : '']">
                    <p class="has-text-centered is-size-5 p-3 " @click="select_option = 'favorite'">งานโปรด</p>
                </div>
                <div
                    :class="['select_option', select_option === 'history' ? ['has-background-primary', 'has-text-white'] : '']">
                    <p class="has-text-centered is-size-5 p-3 " @click="select_option = 'history'">งานที่เคยยื่น</p>
                </div>
            </div>

            <myjobApplication v-if="select_option === 'application'">
            </myjobApplication>

            <myjobFavoriteListVue  v-if="select_option === 'favorite'">
            </myjobFavoriteListVue>

            <myjobApplication
                v-if="select_option === 'history'">
            </myjobApplication> 

        </div>
        
    </div>


</template>



<script lang="ts">
//import { defineComponent, onMounted, reactive, ref } from 'vue'
//import myjobApplication from '@/components/myjob-application.vue';
//import myjobFavoriteListVue from '@/components/myjob-favorite-list.vue';
//import axios from '@/plugins/axios';
export default ({
    components: {
     //   myjobApplication,
     //   myjobFavoriteListVue,
      
    },
    data() {
  return {
    select_option : 'user_profile',

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
