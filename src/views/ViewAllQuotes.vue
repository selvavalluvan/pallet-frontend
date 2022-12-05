<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <div class="carriers-main-page">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-5">
              <router-link to="/quotes">
                <span class="back-btn">Back</span>
              </router-link>
            </div>
            <div class="col-lg-7">
              <span class="quotes-title">Quotes</span>
            </div>
          </div>

          <div class="row search-quotes-padding">
            <div class="col-md-6">
              <base-input
                class=""
                placeholder="Search all Quotes"
                addonLeftIcon="ni ni-zoom-split-in"
                alternative
              ></base-input>
            </div>
            <div class="col-md-6"></div>
          </div>

          <div class="row shipment-filter">
            <div>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 16.8333V19.1667H7.5V16.8333H0.5ZM0.5 2.83333V5.16667H12.1667V2.83333H0.5ZM12.1667 21.5V19.1667H21.5V16.8333H12.1667V14.5H9.83333V21.5H12.1667ZM5.16667 7.5V9.83333H0.5V12.1667H5.16667V14.5H7.5V7.5H5.16667ZM21.5 12.1667V9.83333H9.83333V12.1667H21.5ZM14.5 7.5H16.8333V5.16667H21.5V2.83333H16.8333V0.5H14.5V7.5Z"
                  fill="#004225"
                />
              </svg>

              <span class="shipment-filter-text">
                All Shipment Detail Filters
              </span>
            </div>

            <choices-single :options="quantity" v-model="selected">
              <option value="0">Quantity</option>
            </choices-single>

            <choices-single :options="weight" v-model="selected">
              <option value="0">Weight</option>
            </choices-single>

            <choices-single :options="chargeableWeight" v-model="selected">
              <option value="0">Chargeable Weight</option>
            </choices-single>

            <choices-single :options="commodity" v-model="selected">
              <option value="0">Commodity</option>
            </choices-single>

            <choices-single :options="dimensions" v-model="selected">
              <option value="0">Dimensions</option>
            </choices-single>

            <choices-single :options="accessorials" v-model="selected">
              <option value="0">Accessorials</option>
            </choices-single>

            <choices-single :options="margin" v-model="selected">
              <option value="0">Margin</option>
            </choices-single>
          </div>

          <div class="row filter-button">
            <tabs pills type="info" tabNavClasses="btn-group">
              <tab-pane label="Lbs/Inches"> </tab-pane>

              <tab-pane label="kgs/cms" class="active" active> </tab-pane>
            </tabs>

            <base-button type="warning" class="common-btn-margin"
              >Add Additional Pieces</base-button
            >
            <base-button type="success" class="common-btn-margin"
              >Follow Up</base-button
            >

            <base-dropdown>
              <a
                role="button"
                class="btn btn-warning text-white dropdown-toggle"
                slot="title"
                data-toggle="dropdown"
              >
                <span class="nav-link-inner--text"
                  >Change Selected Quote Status</span
                >
              </a>
              <a class="dropdown-item" href="javascript:;">Action</a>
              <a class="dropdown-item" href="javascript:;">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </base-dropdown>
          </div>

          <div class="row accepted-quotes">
            <div class="col-md-12">
              <reverse-chronological-view-table></reverse-chronological-view-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LeftPanel from "../layout/LeftPanel";
import ChoicesSingle from "@/components/SingleSelect";
import ReverseChronologicalViewTable from "./components/Tables/ReverseChronologicalViewTable.vue";
import BaseDropdown from "@/components/BaseDropdown";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  bodyClass: "quotes-page",
  components: {
    LeftPanel,
    ChoicesSingle,
    ReverseChronologicalViewTable,
    BaseDropdown,
    Tabs,
    TabPane
  },
  data: function() {
    return {
      activeMenuName: "Quotes",
      selected: 0,
      quantity: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      weight: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      chargeableWeight: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      commodity: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      dimensions: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      accessorials: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ],
      margin: [
        { id: 1, text: "1" },
        { id: 2, text: "2" },
        { id: 3, text: "3" }
      ]
    };
  }
};
</script>
<style scope>
.accepted-quotes {
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-top: 30px;
}
.search-quotes-padding {
  padding-top: 30px;
}

.shipment-filter {
  margin-right: 0px !important;
  margin-left: 0px !important;
  margin-top: 30px;
}

.shipment-filter .choices {
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
}

.shipment-filter-text {
  font-weight: 700;
  font-size: 13px;
  line-height: 22px;
  color: #004225;
  padding-left: 5px;
  padding-right: 5px;
}

.quotes-title {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
}

.filter-button {
  margin-left: 0px !important;
  margin-right: 0px !important;
  padding-top: 20px;
}

.quotes-page .nav.btn-group li {
  flex: 1 1 auto;
  padding: 0;
  text-align: center;
}

.quotes-page .nav.btn-group li a {
  margin: 0;
  box-shadow: none;
  border: 1px solid transparent;
}

.quotes-page .nav.btn-group li:first-child a {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.quotes-page .nav.btn-group li:last-child a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.quotes-page .nav.btn-group li a:not(.active) {
  border: 1px solid #11cdef;
}
.tab-space {
  padding: 0px !important;
}

.quotes-page
  .nav-pills.nav-pills:not(.flex-column)
  .nav-item:not(:last-child)
  .nav-link {
  margin-bottom: 0px !important;
}

.quotes-page .nav {
  padding-left: 0px !important;
  padding-right: 15px !important;
}

.choices__list--single {
  padding: 0px 16px 0px 0px !important;
}
.quotes-page .dropdown .btn {
  line-height: 1.7 !important;
}

.common-btn-margin {
  margin-right: 15px !important;
}

.back-btn {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.3px;
  color: #233dd2;
}
</style>
