<template>
    <div class="column ml-6 p-0">
      <div>
        <div class="card px-5 py-4">
          <div
            
          >
            <p class="is-size-4 has-text-weight-bold">บริษัท:</p>
            <p class="is-size-4 has-text-weight-bold">ตำแหน่ง:</p>
            <div class="columns is-multiline ml-6 mt-1">
              <div class="column is-6">
                <i class="pi pi-map-marker">
                  <span class="is-size-5 pl-4"
                    ><b>สถานที่ทำงาน: </b></span
                  ></i
                >
              </div>
              <div class="column is-6">
                <i class="pi pi-dollar">
                  <span class="is-size-5 pl-4"
                    ><b>ค่าตอบแทนรายวัน: </b></span
                  ></i
                >
              </div>
              <div class="column is-6">
                <i class="pi pi-user"
                  ><span class="is-size-5 pl-4"
                    ><b>จำนวนคำที่รับ: </b></span
                  ></i
                >
              </div>
              <p class="is-size-5 column is-6">
                <b>รูปแบบการสัมภาษณ์: </b>
              </p>
            </div>
            <div
              style="
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
              "
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts">
  export default ({
      components: {
       //   myjobApplication,
       //   myjobFavoriteListVue,
        
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
  