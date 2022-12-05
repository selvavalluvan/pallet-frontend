<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <!-- Carriers main -->
        <div class="carriers-main-page">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 text-center">
              <h1>Search Your Carriers</h1>

              <base-input
                class="carriers-search-input"
                placeholder="Search your Carriers and all Lanes"
                addonLeftIcon="ni ni-zoom-split-in"
                alternative
              ></base-input>

              <router-link to="/newcarriers">
                <base-button type="primary" class="add-carriers-btn">
                  Add New Carrier
                </base-button>
              </router-link>
            </div>
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
      activeMenuName: "Carriers"
    };
  }
};
</script>

<style></style>
