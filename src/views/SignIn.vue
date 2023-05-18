<template>
  <div>
    <div class="container p-5">
      <h1 class="title">Sign In</h1>
      <div class="tabs">
        <ul>
          <li :class="{ 'is-active': activeTab === 'applicant' }">
            <a @click="activeTab = 'applicant'">หางาน</a>
          </li>
          <li :class="{ 'is-active': activeTab === 'recruiter' }">
            <a @click="activeTab = 'recruiter'">หาคน</a>
          </li>
        </ul>
      </div>
      <div v-show="activeTab === 'applicant'" class="box">
        <h2 class="subtitle">เข้าสู่ระบบสำหรับผู้สมัคร</h2>
        <form @submit.prevent="signinApplicant">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="applicantEmail"
               
                class="input"
                type="text"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="applicantPassword"
                class="input"
                type="password"
              />
            </div>
          </div>

          <div class="field">
            <button class="button is-link">Sign In</button>
          </div>
        </form>
      </div>
      <div v-show="activeTab === 'recruiter'" class="box">
        <h2 class="subtitle">เข้าสู่ระบบสำหรับบริษัท</h2>
        <form @submit.prevent="signinRecruiter">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': $v.recruiterEmail.$error }"
                type="email"
                v-model.trim="$v.recruiterEmail.$model"
              />
            </div>
            <template v-if="$v.recruiterEmail.$error">
              <p class="help is-danger" v-if="!$v.recruiterEmail.required">
                This field is required
              </p>
              <p class="help is-danger" v-else-if="!$v.recruiterEmail.email">
                Invalid email format
              </p>
            </template>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': $v.recruiterPassword.$error }"
                type="password"
                v-model.trim="$v.recruiterPassword.$model"
              />
            </div>
            <template v-if="$v.recruiterPassword.$error">
              <p class="help is-danger" v-if="!$v.recruiterPassword.required">
                This field is required
              </p>
            </template>
          </div>
          <div class="field">
            <button class="button is-link">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import axios from "@/plugins/axios";
import Swal from "sweetalert2";
function complexPassword(value) {
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  data() {
    return {
      activeTab: "applicant",
      applicantEmail: "",
      applicantPassword: "",
      recruiterEmail: "",
      recruiterPassword: "",

    };
  },

  validations: {
    applicantEmail: {
      required,
      email: email,
    },
    applicantPassword: {
      required,
      minLength: minLength(8),
      complex: complexPassword,
    },
    recruiterEmail: {
      required,
      email: email,
    },
    recruiterPassword: {
      required,
      minLength: minLength(8),
      complex: complexPassword,
    },
  },
  methods: {

    signinApplicant() {
    const data = {
      email: this.applicantEmail,
      password: this.applicantPassword,
    };

    axios
      .post("http://localhost:3000/user/signin", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        this.$emit("auth-change");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          showConfirmButton: false,
        });

        this.$router.push({ path: "/" });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
            showConfirmButton: false,
          });
        }
      });
  
},

    signinRecruiter() {
      this.$v.recruiterEmail.$touch();
      this.$v.recruiterPassword.$touch();
      if (!this.$v.$error) {
        // ทำการสมัครสมาชิกบริษัท
        let data = {
          email: this.recruiterEmail,
          password: this.recruiterPassword,
        };
        axios
          .post("http://localhost:3000/user/signin", data)
          .then((res) => {
            console.log(res);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "ลงทะเบียนเรียบร้อย",
              showConfirmButton: false,
            });
            this.$router.push("/signin");
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.tabs ul {
  margin-bottom: 20px;
}

.box {
  margin-bottom: 20px;
}
</style>
