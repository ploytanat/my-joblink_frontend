<template>
  <div class="columns mt-6">
    <div class="column is-2"></div>
    <div class="tabs is-boxed column is-8">
      <ul>
        <li :class="[select_option === 'user_profile' ? 'is-active' : '']" @click="select_option = 'user_profile'" > <a><span>User Profile</span></a></li>
        <li :class="[select_option === 'resume' ? 'is-active' : '']" @click="select_option = 'resume'" ><a><span>Resume</span></a></li>
        <li :class="[select_option === 'preview' ? 'is-active' : '']" @click="select_option = 'preview'"><a><span>ตัวอย่างใบยื่นสมัคร</span></a></li>
      </ul>
      <applicantProfile  v-if="select_option === 'user_profile'">
      </applicantProfile>
    </div>

    <div class="column is-2"></div>
  </div>
</template>

<script>
import applicantProfile from '@/components/applicant-profile.vue';
//import axios from "@/plugins/axios";
export default {
  components: {
        applicantProfile
    },
  data() {
    return {
       firstName: "",
      lastName: "",
      birthdate: "",
      phone_number: "",
      gender: "",
      email: "",
      address: "",
      modify_profile : false,
      select_option : 'user_profile',
      user:''
    };
  },
  mounted() {
    // เรียก API เพื่อดึงข้อมูลส่วนตัวของผู้ใช้และกำหนดค่าให้กับตัวแปร
    this.getUserProfile();
  },
  methods: {
    getUserProfile() {
      
      
    },
    saveProfile() {
      // เรียก API เพื่อบันทึกข้อมูลส่วนตัวที่ผู้ใช้แก้ไข
      // ใช้ค่าในตัวแปร fullName, email, phoneNumber, address
    },
  },
};
</script>

<style scoped>
/* สไตล์ CSS สำหรับฟอร์ม */
</style>
