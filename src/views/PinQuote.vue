<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <div class="row">
          <div class="col-md-9 padding-right">
            <div class="create-new-quote-page">
              <h3 class="text-center">
                View and Compare Quotes
              </h3>
            </div>
            <div class="quote-client">
              <p class="quote-card-header-title">Client</p>
              <card class="new-quote-card">
                <template slot="body">
                  <div class="row">
                    <div class="form-group col-md-4">
                      <base-input
                        type="text"
                        value=""
                        label="Client Name"
                        placeholder="Client you are preparing this quote for"
                      ></base-input>
                    </div>
                    <div class="form-group col-md-4">
                      <base-input
                        type="text"
                        value=""
                        label="Quote Contact"
                        placeholder="Person you preparing this quote for"
                      ></base-input>
                    </div>
                    <div class="form-group col-md-4">
                      <base-input
                        type="text"
                        value=""
                        label="Margin"
                        placeholder="Margin used for this client "
                      ></base-input>
                    </div>
                  </div>
                </template>
              </card>
              <p class="quote-card-header-title">Locations</p>
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
            <pinned-quotes-table></pinned-quotes-table>
            <div class="adjust-shipment-details">Adjust Shipment Details</div>
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

              <choices-single :options="margin" v-model="selected">
                <option value="0">Margin</option>
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

            <best-quotes-table></best-quotes-table>
            <div class="other-option-table">
              <other-quotes-options-table></other-quotes-options-table>
            </div>
          </div>
          <div class="col-md-3 padding-right shipment-details-summary">
            <card class="new-quote-card">
              <template slot="body">
                <div class="margin-top-bottom shipment-details-summary-title">
                  Shipment Details Summary
                </div>
                <div class="row margin-top-bottom">
                  <div class="col-md-6">
                    Client:
                  </div>
                  <div class="col-md-6">
                    Green Theory
                  </div>
                </div>
                <div class="row margin-top-bottom">
                  <div class="col-md-6">
                    Origin:
                  </div>
                  <div class="col-md-6">
                    Vancouver
                  </div>
                </div>
                <div class="row margin-top-bottom">
                  <div class="col-md-6">
                    Destination:
                  </div>
                  <div class="col-md-6">
                    New York
                  </div>
                </div>
                <div>
                  <div
                    class="dimensions-title"
                    v-for="(item, index) in shipmentItem"
                    :key="index"
                  >
                    <div>
                      <span
                        class="item-toggle"
                        v-on:click="showItemView(index, item)"
                      >
                        Item {{ index + 1 }}
                        <i class="fa fa-angle-up" v-if="item.showItem"></i>
                        <i class="fa fa-angle-down" v-else></i>
                      </span>
                      <span class="calculate-view">
                        <span
                          >40 <i class="fa fa-times" aria-hidden="true"></i
                        ></span>
                        <span>
                          40 <i class="fa fa-times" aria-hidden="true"></i
                        ></span>
                        <span> 40 </span>
                      </span>
                      <span class="lbs-text">7845 lbs</span>
                    </div>
                    <div v-if="item.showItem">
                      <p class="dimensions-title">Dimensions</p>
                      <div class="row item-input-bottom">
                        <div class="col-md-6">
                          <base-input
                            type="text"
                            value=""
                            placeholder="Length"
                          ></base-input>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                      <div class="row item-input-bottom">
                        <div class="col-md-6">
                          <base-input
                            type="text"
                            value=""
                            placeholder="Width"
                          ></base-input>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                      <div class="row item-input-bottom">
                        <div class="col-md-6">
                          <base-input
                            type="text"
                            value=""
                            placeholder="Height"
                          ></base-input>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                      <div class="row item-input-bottom">
                        <div class="col-md-6">
                          <base-input
                            type="text"
                            value=""
                            placeholder="Weight"
                          ></base-input>
                        </div>
                        <div class="col-md-6"></div>
                      </div>
                      <span>Freight Class for this item</span>
                      <p>Density</p>
                    </div>
                  </div>
                  <base-button
                    class="add-item-btn"
                    v-on:click="addShipmentItem"
                  >
                    Add Item
                  </base-button>
                </div>
                <div class="margin-top-bottom">
                  Chargeable Weight
                </div>
                <div class="margin-top-bottom">
                  Total Weight
                </div>
                <div class="margin-top-bottom accessorials-dropdown">
                  <span>Accessorials</span>
                  <base-dropdown menuClasses="dropdown-menu-right">
                    <div
                      slot="title"
                      class="nav-link dropdown-toggle text-primary"
                      data-toggle="dropdown"
                    >
                      <base-button class="add-Accessorials-piece">
                        <i class="fa fa-plus"></i>
                      </base-button>
                    </div>
                    <div class="accessorials-dropdown-list">
                      <div class="">
                        <p class="accessorials-title">Pick up</p>
                        <base-checkbox class="mb-2">
                          Appointment
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Power Tailgate
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Inside Pickup
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Limited Access
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Residential
                        </base-checkbox>
                      </div>
                      <div class="">
                        <p class="accessorials-title">Delivery</p>
                        <base-checkbox class="mb-2">
                          Appointment
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Power Tailgate
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Inside Pickup
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Limited Access
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Residential
                        </base-checkbox>
                      </div>
                      <div class="">
                        <p class="accessorials-title">Other</p>
                        <base-checkbox class="mb-2">
                          Non-Stackable
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Dangerous Goods
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Freeze Protect
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Inbond
                        </base-checkbox>
                        <base-checkbox class="mb-2">
                          Overlength
                        </base-checkbox>
                      </div>
                    </div>
                    <div class="accessorials-done-btn">
                      <base-button type="primary" class="get-rate-btn">
                        DONE
                      </base-button>
                    </div>
                  </base-dropdown>
                </div>
                <div>
                  <div class="chip">
                    Non-Stackable
                    <span class="closebtn">&times;</span>
                  </div>
                  <div class="chip">
                    Pickup Power
                    <span class="closebtn">&times;</span>
                  </div>
                  <div class="chip">
                    Delivery Power Tailgate
                    <span class="closebtn">&times;</span>
                  </div>
                  <div class="chip">
                    Appointment Delivery
                    <span class="closebtn">&times;</span>
                  </div>
                </div>
                <div class="margin-top-bottom row">
                  <div class="col-md-3 padding-right">
                    Margin
                  </div>
                  <div class="form-group col-md-4 padding-right">
                    <base-input
                      type="text"
                      value=""
                      placeholder="$000.00"
                    ></base-input>
                  </div>
                  <div class="form-group col-md-4 padding-right">
                    <base-input
                      type="text"
                      value=""
                      placeholder="%00.00"
                    ></base-input>
                  </div>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../layout/LeftPanel";
import PinnedQuotesTable from "./components/Tables/PinnedQuotesTable.vue";
import BestQuotesTable from "./components/Tables/BestQuotesTable.vue";
import OtherQuotesOptionsTable from "./components/Tables/OtherQuotesOptionsTable.vue";
import BaseDropdown from "@/components/BaseDropdown";
import ChoicesSingle from "@/components/SingleSelect";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";

export default {
  components: {
    LeftPanel,
    PinnedQuotesTable,
    BestQuotesTable,
    OtherQuotesOptionsTable,
    ChoicesSingle,
    Tabs,
    TabPane,
    BaseDropdown
  },
  data: function() {
    return {
      activeMenuName: "New Quote",
      selected: 0,
      //showItem: false,
      shipmentItem: [
        {
          length: "",
          width: "",
          height: "",
          weight: "",
          showItem: false
        }
      ],
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
      margin: [
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
      ]
    };
  },
  methods: {
    showItemView: function(index, item) {
      this.shipmentItem[index].showItem = !item.showItem;
    },
    addShipmentItem: function() {
      let addShipmentItemObj = {
        length: "",
        width: "",
        height: "",
        weight: "",
        showItem: false
      };
      this.shipmentItem.push(addShipmentItemObj);
    }
  }
};
</script>

<style>
.create-new-quote-page {
  margin-top: 10px;
  margin-bottom: 20px;
}

.new-quote-card .card-body {
  padding: 10px;
}

.new-quote-card .form-group {
  margin-bottom: 0rem;
}

.location-arrow-icon {
  text-align: center;
  margin-top: 36px;
}
.quote-card-header-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 10px;
  color: #000000;
}

.quote-collapse {
  border-radius: 4px !important;
}

.quote-collapse .card-header {
  border-radius: 4px !important;
  background: rgba(0, 66, 37, 0.85) !important;
  padding: 5px !important;
}

.quote-collapse .card-header h5 {
  color: white !important;
}

.accessorials-title {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 27px;
  color: #000000;
}

.accessorials-title-blank {
  margin-bottom: 2.6rem !important;
}

.get-rate {
  text-align: right;
  margin-bottom: 15px;
}

.get-rate-btn {
  background-color: #f0c03d !important;
  border: 1px solid #f0c03d !important;
  border-radius: 4px !important;
}

.new-quotes-tabs {
  display: inline-flex;
  justify-content: right;
  width: 100%;
  margin-bottom: 15px;
}

.close-icon {
  position: absolute;
  top: 35px;
  right: -5px;
  cursor: pointer;
}

.height-width-input {
  margin-top: 24px;
}

.add-additional-piece {
  background-color: #004225 !important;
  border: 1px solid #004225 !important;
  border-radius: 4px !important;
  color: #fff !important;
}

.add-Accessorials-piece {
  padding: 1px 6px !important;
  background-color: #004225 !important;
  border: 1px solid #004225 !important;
  border-radius: 4px !important;
  color: #fff !important;
}

.add-item-btn {
  padding: 1px 6px !important;
  background-color: #004225 !important;
  border: 1px solid #004225 !important;
  border-radius: 4px !important;
  color: #fff !important;
  font-size: 10px !important;
}

.clear-all-btn {
  background-color: #172b4d !important;
  border: 1px solid #172b4d !important;
  box-shadow: 0px 1px 2px rgba(68, 68, 68, 0.25) !important;
  border-radius: 4px !important;
}

.shipment-detail-footer .fa {
  padding-left: 7px;
}

.next-btn {
  text-align: right;
  margin-bottom: 15px;
  margin-top: 15px;
}

.next-btn button {
  background-color: #f0c03d !important;
  border: 1px solid #f0c03d !important;
  border-radius: 4px !important;
}

.text-right {
  text-align: right;
}
.shipment-filter-view-quotes {
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.shipment-filter-view-quotes .choices {
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
}

.adjust-shipment-details {
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin-bottom: 10px;
  margin-top: 15px;
}

.pin-quote-tab {
  margin-bottom: 21px;
}

.pin-quote-tab .nav {
  padding-left: 0px !important;
  padding-right: 15px !important;
}

.pin-quote-tab .nav.btn-group li {
  flex: 1 1 auto;
  padding: 0;
  text-align: center;
}

.pin-quote-tab .nav.btn-group li a {
  margin: 0;
  box-shadow: none;
  border: 1px solid transparent;
}

.pin-quote-tab .nav.btn-group li:first-child a {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.pin-quote-tab .nav.btn-group li:last-child a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.pin-quote-tab .nav.btn-group li a:not(.active) {
  border: 1px solid #11cdef;
}

.tab-space {
  padding: 0px !important;
}

.pin-quote-tab
  .nav-pills.nav-pills:not(.flex-column)
  .nav-item:not(:last-child)
  .nav-link {
  margin-bottom: 0px !important;
}

.pin-quote-tab .nav {
  padding-left: 0px !important;
  padding-right: 15px !important;
}

.other-option-table {
  margin-top: 23px;
  margin-bottom: 23px;
}

.padding-right {
  padding-right: 0px !important;
}

.margin-top-bottom {
  margin-bottom: 20px;
  margin-top: 20px;
}

.accessorials-dropdown .nav-link::after {
  display: none !important;
}

.accessorials-dropdown-list {
  padding-left: 15px;
}
.accessorials-dropdown-list
  .custom-control-input:checked
  ~ .custom-control-label::before {
  background-color: #004225 !important;
  border-color: #004225 !important;
}

.accessorials-done-btn {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
}

.closebtn {
  padding-left: 10px;
  font-weight: bold;
  float: right;
  font-size: 15px;
  cursor: pointer;
}

.chip {
  display: inline-block;
  padding-top: 0px;
  padding-right: 13px;
  padding-bottom: 0px;
  padding-left: 19px;
  height: 25px;
  line-height: 25px;
  border-radius: 25px;
  background-color: #004225;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  margin-left: 4px;
  color: white;
  margin-bottom: 5px;
}

.closebtn:hover {
  color: #000;
}

.item-toggle {
  cursor: pointer;
  margin-right: 10px;
}

.item-input-bottom {
  margin-bottom: 10px;
}

.dimensions-title {
  margin-top: 8px !important;
  margin-bottom: 8px !important;
}

.lbs-text {
  position: absolute;
  right: 10px;
}

.shipment-details-summary-title {
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #000000;
}

.calculate-view .fa-times {
  font-size: 10px;
}

.accessorials-dropdown .dropdown.show .dropdown-menu.show {
  animation: none !important;
}
</style>
