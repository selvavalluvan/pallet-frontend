<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <div class="create-new-quote-page">
          <h3 class="text-center">
            View and Compare Quotes
          </h3>
        </div>
        <div class="text-center add-new-tab" v-on:click="addSearchTab">
          <svg
            width="17"
            height="17"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.5807 17.0832H17.0807V29.5832H12.9141V17.0832H0.414062V12.9165H12.9141V0.416504H17.0807V12.9165H29.5807V17.0832Z"
              fill="url(#paint0_linear_1858_11201)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1858_11201"
                x1="29.5807"
                y1="0.416504"
                x2="-4.35325"
                y2="22.1342"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2DCECC" />
                <stop offset="1" stop-color="#2DCE89" />
              </linearGradient>
            </defs>
          </svg>
          <p>Add Search Tab</p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-12 text-center custom-search-tab">
              <ul role="tablist" class="nav nav-pills-info nav-pills btn-group">
                <li
                  v-for="tab in searchTabList"
                  class="nav-item"
                  data-toggle="tab"
                  role="tablist"
                  aria-expanded="true"
                  :key="tab.tabIndex"
                >
                  <a
                    data-toggle="tab"
                    role="tablist"
                    :href="`#${tab.tabIndex}`"
                    @click.prevent="activateTab(tab)"
                    :aria-expanded="tab.active"
                    class="nav-link"
                    :class="tab.active ? 'active-tab' : 'in-active-tab'"
                  >
                    <span> Search Tab {{ tab.tabIndex + 1 }}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div
              v-if="activeTabIndex === searchTabList[activeTabIndex].tabIndex"
            >
              <div class="quote-client quote-client-tab row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <p class="quote-card-header-title">
                    Locations
                  </p>
                  <card class="new-quote-card">
                    <template slot="body">
                      <div class="row">
                        <div class="form-group col-md-5">
                          <base-input
                            type="text"
                            value=""
                            label="Origin"
                            placeholder="Postal Code, City, Location"
                          ></base-input>
                        </div>
                        <div class="col-md-1 location-arrow-icon">
                          <svg
                            width="28"
                            height="30"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.5 7.5H21.5V12L27.5 6L21.5 0V4.5H3.5V13.5H6.5V7.5ZM21.5 22.5H6.5V18L0.5 24L6.5 30V25.5H24.5V16.5H21.5V22.5Z"
                              fill="#004225"
                            />
                          </svg>
                        </div>
                        <div class="form-group col-md-6">
                          <base-input
                            type="text"
                            value=""
                            label="Destination"
                            placeholder="Postal Code, City, Location"
                          ></base-input>
                        </div>
                      </div>
                    </template>
                  </card>
                </div>
              </div>
              <div class="adjust-shipment-details">
                Adjust Shipment Details
              </div>
              <div class="row shipment-filter-view-quotes">
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
              </div>

              <div class="row filter-button pin-quote-tab">
                <tabs pills type="info" tabNavClasses="btn-group">
                  <tab-pane label="Lbs/Inches"> </tab-pane>

                  <tab-pane label="kgs/cms" class="active" active> </tab-pane>
                </tabs>

                <base-button type="warning" class="common-btn-margin"
                  >Add Additional Pieces</base-button
                >
              </div>
              <div class="row">
                <div class="col-md-4">
                  <p>Volume: <span>XXXXXXXXXX</span></p>
                </div>
                <div class="col-md-4">
                  <p>Total Weight: <span>XXXXXXXXXX</span></p>
                </div>
                <div class="col-md-4">
                  <p>Chargeable Weight: <span>XXXXXXXXXX</span></p>
                </div>
              </div>
              <best-quotes-table></best-quotes-table>
              <div class="other-option-table">
                <other-quotes-options-table></other-quotes-options-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../layout/LeftPanel";
import BestQuotesTable from "./components/Tables/BestQuotesTable.vue";
import OtherQuotesOptionsTable from "./components/Tables/OtherQuotesOptionsTable.vue";
import ChoicesSingle from "@/components/SingleSelect";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  components: {
    LeftPanel,
    BestQuotesTable,
    OtherQuotesOptionsTable,
    ChoicesSingle,
    Tabs,
    TabPane
  },
  data: function() {
    return {
      activeMenuName: "New Quote",
      selected: 0,
      quantity: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      weight: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      chargeableWeight: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      commodity: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      dimensions: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      accessorials: [
        {
          id: 1,
          text: "1"
        },
        {
          id: 2,
          text: "2"
        },
        {
          id: 3,
          text: "3"
        }
      ],
      searchTabList: [
        {
          tabIndex: 0,
          active: true
        }
      ],
      activeTabIndex: 0
    };
  },
  methods: {
    addSearchTab: function() {
      let tabList = this.searchTabList;
      let tabIndex = tabList[tabList.length - 1].tabIndex;
      this.deactivateTabs();
      let addSearchTabObj = {
        tabIndex: tabIndex + 1,
        active: true
      };
      this.activeTabIndex = tabIndex + 1;
      this.searchTabList.push(addSearchTabObj);
    },
    activateTab(tab) {
      this.deactivateTabs();
      tab.active = true;
      this.activeTabIndex = tab.tabIndex;
    },
    deactivateTabs() {
      this.searchTabList.forEach(tab => {
        tab.active = false;
      });
    }
  }
};
</script>

<style>
.add-new-tab {
  cursor: pointer;
  position: absolute;
  right: 20px;
  z-index: 100;
}

.add-new-tab p {
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  background: linear-gradient(237.38deg, #2dcecc 0%, #2dce89 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.custom-search-tab .nav-link {
  background-color: white !important;
  border: 1px solid #000000 !important;
  border-top: 1px solid #000000 !important;
  border-left: 1px solid #000000 !important;
  border-right: 1px solid #000000 !important;
  border-bottom: 0px !important;
  border-radius: 0px !important;
  border-top-left-radius: 8px !important;
  box-shadow: none !important;
}
.quote-client-tab {
  margin-top: 3%;
}

.active-tab {
  color: #11cdef !important;
}

.in-active-tab {
  color: #000000 !important;
}
</style>
