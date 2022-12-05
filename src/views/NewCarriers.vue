<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <!-- New Carriers-->
        <div class="new-carriers-page">
          <h2 class="text-center">
            Add New Carriers
          </h2>
          <!-- <CreateTask @carriersCount="addCarrierFirstTime" /> -->
          <card class="new-carriers-card">
            <template slot="body">
              <div class="new-carriers-container">
                <div
                  v-for="index in newCarriers.length"
                  :key="index"
                  class="row add-new-carriers-row"
                >
                  <div class="col-md-1 carriers-count">
                    <span>
                      {{ index }}
                    </span>
                  </div>
                  <div class="col-md-6 carriers-inputs">
                    <base-input
                      type="text"
                      name="firstName"
                      placeholder="Carrier Name"
                      v-on:change="setCarriersName(index)"
                    ></base-input>
                  </div>
                  <div class="col-md-5 carriers-upload">
                    <span class="carriers-file-upload">
                      <input
                        accept="application/pdf, application/vnd.ms-excel, text/xml"
                        type="file"
                        id="upload-file"
                        hidden
                      />
                      <label
                        for="upload-file"
                        refs="upload-file"
                        class="file-btn"
                      >
                        <svg
                          width="32"
                          height="22"
                          viewBox="0 0 32 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M26.2893 9.56651C25.597 4.42323 21.245 0.615234 16.0028 0.615234C11.5024 0.615234 7.59551 3.43414 6.16133 7.68723C2.94678 8.3796 0.671875 11.1491 0.671875 14.4625C0.671875 18.0727 3.49078 21.0894 7.10097 21.3861H25.8937H25.9432C28.9599 21.0894 31.3337 18.5178 31.3337 15.4516C31.3337 12.5338 29.1577 10.0116 26.2893 9.56651ZM21.2944 12.336C21.1955 12.4349 21.0966 12.4843 20.9482 12.4843C20.7999 12.4843 20.701 12.4349 20.6021 12.336L16.4973 8.23123V17.9243C16.4973 18.2211 16.2995 18.4189 16.0028 18.4189C15.7061 18.4189 15.5082 18.2211 15.5082 17.9243V8.23123L11.4035 12.336C11.2057 12.5338 10.909 12.5338 10.7111 12.336C10.5133 12.1381 10.5133 11.8414 10.7111 11.6436L15.6566 6.69814C15.7061 6.64869 15.7555 6.59923 15.805 6.59923C15.9039 6.54978 16.0522 6.54978 16.2006 6.59923C16.2501 6.64869 16.2995 6.64869 16.349 6.69814L21.2944 11.6436C21.4922 11.8414 21.4922 12.1381 21.2944 12.336Z"
                            fill="#324CDD"
                          />
                        </svg>
                        Upload Tarrif sheets in Excel, XML, PDF
                      </label>
                    </span>
                  </div>
                </div>

                <div class="row add-carrier-btn">
                  <base-button v-on:click="addNewCarriers" type="info">
                    +
                  </base-button>
                </div>
              </div>
            </template>
          </card>
          <div class="save-carriers">
            <base-button type="success">
              Save
            </base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../layout/LeftPanel";

export default {
  bodyClass: "carriers",
  components: {
    LeftPanel
  },
  data: function() {
    return {
      newCarriers: [
        {
          carrierName: "",
          carrierFile: ""
        }
      ],
      activeMenuName: "Carriers"
    };
  },
  methods: {
    addNewCarriers: function() {
      let carriersObj = {
        carrierName: "",
        carrierFile: ""
      };
      this.newCarriers.push(carriersObj);
    },
    setCarriersName: function(i) {
      console.log(i);
    }
  },
  created() {
    let vm = this;
    let carriersCount = localStorage.getItem("carriersCount");
    if (carriersCount != null) {
      for (let i = 1; i < carriersCount; i++) {
        let carriersObj = {
          carrierName: "",
          carrierFile: ""
        };
        vm.newCarriers.push(carriersObj);
      }
      localStorage.removeItem("carriersCount");
    }
  }
};
</script>

<style></style>
