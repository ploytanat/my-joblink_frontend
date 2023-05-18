<template>
  <div>
    <div class="container p-5">
      <h1 class="title">Sign up</h1>
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
        <h2 class="subtitle">สมัครสมาชิกสำหรับผู้สมัคร</h2>
        <form @submit.prevent="registerApplicant">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="$v.applicantEmail.$model"
                :class="{ 'is-danger': $v.applicantEmail.$error }"
                class="input"
                type="text"
              />
            </div>

            <template v-if="$v.applicantEmail.$error">
              <p class="help is-danger" v-if="!$v.applicantEmail.required">
                This field is required
              </p>
              <p class="help is-danger" v-else-if="!$v.applicantEmail.email">
                Invalid email format
              </p>
            </template>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="$v.applicantPassword.$model"
                :class="{ 'is-danger': $v.applicantPassword.$error }"
                class="input"
                type="password"
              />
            </div>
            <template v-if="$v.applicantPassword.$error">
              <p class="help is-danger" v-if="!$v.applicantPassword.required">
                This field is required
              </p>
              <p
                class="help is-danger"
                v-else-if="!$v.applicantPassword.minLength"
              >
                Password must be at least 8 characters
              </p>
              <p
                class="help is-danger"
                v-else-if="!$v.applicantPassword.complex"
              >
                Password should contain at least one lowercase letter, one
                uppercase letter, and one number
              </p>
            </template>
          </div>

          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': $v.applicantConfirmPassword.$error }"
                type="password"
                v-model="$v.applicantConfirmPassword.$model"
              />
            </div>
            <template v-if="$v.applicantConfirmPassword.$error">
              <p
                class="help is-danger"
                v-if="!$v.applicantConfirmPassword.required"
              >
                This field is required
              </p>
              <p
                class="help is-danger"
                v-else-if="!$v.applicantConfirmPassword.sameAsPassword"
              >
                Passwords do not match
              </p>
            </template>
          </div>
          <div class="field">
            <button class="button is-link">Sign up</button>
          </div>
        </form>
      </div>

      <div v-show="activeTab === 'recruiter'" class="box">
        <h2 class="subtitle">สมัครสมาชิกสำหรับบริษัท</h2>
        <form @submit.prevent="registerRecruiter">
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
              <p
                class="help is-danger"
                v-else-if="!$v.recruiterPassword.minLength"
              >
                Password must be at least 8 characters
              </p>
              <p
                class="help is-danger"
                v-else-if="!$v.recruiterPassword.complex"
              >
                Password should contain at least one lowercase letter, one
                uppercase letter, and one number
              </p>
            </template>
          </div>

          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': $v.recruiterConfirmPassword.$error }"
                type="password"
                v-model.trim="$v.recruiterConfirmPassword.$model"
              />
            </div>
            <template v-if="$v.recruiterConfirmPassword.$error">
              <p
                class="help is-danger"
                v-if="!$v.recruiterConfirmPassword.required"
              >
                This field is required
              </p>
              <p
                class="help is-danger"
                v-else-if="!$v.recruiterConfirmPassword.sameAsPassword"
              >
                Passwords do not match
              </p>
            </template>
          </div>
          <div class="field">
            <button class="button is-link">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
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
      applicantConfirmPassword: "",
      recruiterEmail: "",
      recruiterPassword: "",
      recruiterConfirmPassword: "",

      email: "",
      password: "",
      confirmPassword: "",
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
    applicantConfirmPassword: {
      required,
      sameAsPassword: sameAs("applicantPassword"),
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
    recruiterConfirmPassword: {
      required,
      sameAsPassword: sameAs("recruiterPassword"),
    },
  },

  methods: {
    registerApplicant() {
      this.$v.applicantEmail.$touch();
      this.$v.applicantPassword.$touch();
      this.$v.applicantConfirmPassword.$touch();
      if (!this.$v.$error) {
        // ทำการสมัครสมาชิกผู้สมัคร
        let data = {
          email: this.applicantEmail,
          password: this.applicantPassword,
          confirm_password: this.applicantConfirmPassword,
        };

        axios
          .post("http://localhost:3000/applicant/signup", data)
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
              alert("โปรดกรอกข้อมูลให้ครบก่อน");
            }
          });
      }
    },
    registerRecruiter() {
      this.$v.recruiterEmail.$touch();
      this.$v.recruiterPassword.$touch();
      this.$v.recruiterConfirmPassword.$touch();
      if (!this.$v.$error) {
        // ทำการสมัครสมาชิกบริษัท
        let data = {
          email: this.recruiterEmail,
          password: this.recruiterPassword,
          confirm_password: this.recruiterConfirmPassword
        };
        axios
          .post("http://localhost:3000/recruiter/signup", data)
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
