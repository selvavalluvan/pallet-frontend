<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <div class="create-new-quote-page">
          <h3 class="text-center">
            Create New Quote
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
          <div class="new-quotes-tabs">
            <tabs pills type="info" tabNavClasses="btn-group">
              <tab-pane label="Lbs/Inches"> </tab-pane>

              <tab-pane label="kgs/cms" class="active" active> </tab-pane>
            </tabs>
          </div>
          <collapse :multiple-active="false" class="quote-collapse">
            <collapse-item name="1">
              <h5
                slot="title"
                class="mb-0 btn btn-link w-100 text-primary text-left"
              >
                SHIPMENT DETAILS
                <i class="ni ni-bold-down float-right pt-1"></i>
              </h5>
              <div>
                <div
                  class="row"
                  v-for="(item, index) in additionalPiece"
                  :key="index"
                >
                  <div class="col-md-2">
                    <div>
                      Quantity
                    </div>
                    <choices-single :options="item.quantity" v-model="selected">
                      <option value="0">Quantity</option>
                    </choices-single>
                  </div>
                  <div class="col-md-2">
                    <div>
                      Demensions
                    </div>
                    <base-input type="text" placeholder="Length"></base-input>
                    <i class="fa fa-close close-icon"></i>
                  </div>
                  <div class="col-md-2">
                    <base-input
                      type="text"
                      placeholder="Width"
                      class="height-width-input"
                    ></base-input>
                    <i class="fa fa-close close-icon"></i>
                  </div>
                  <div class="col-md-2">
                    <base-input
                      type="text"
                      placeholder="Height"
                      class="height-width-input"
                    ></base-input>
                  </div>
                  <div class="col-md-2">
                    <div>
                      Weight
                    </div>
                    <base-input type="text" placeholder="Kg"></base-input>
                  </div>
                  <div class="col-md-2">
                    <div>
                      Chargeable Weight
                    </div>
                    <base-input type="text" placeholder="Kg"></base-input>
                  </div>
                </div>
                <div class="row shipment-detail-footer">
                  <div class="col-md-6">
                    <base-button
                      class="add-additional-piece"
                      v-on:click="additionalNewPiece"
                    >
                      Add Additional Piece
                      <i class="fa fa-plus"></i>
                    </base-button>
                  </div>
                  <div class="col-md-6 text-right">
                    <base-button
                      type="success"
                      class="clear-all-btn"
                      v-on:click="clearAllAdditionalPiece"
                    >
                      CLEAR ALL
                      <i class="fa fa-close"></i>
                    </base-button>
                  </div>
                </div>
                <div class="next-btn">
                  <base-button type="primary">
                    NEXT
                  </base-button>
                </div>
              </div>
            </collapse-item>
          </collapse>
          <collapse :multiple-active="false" class="quote-collapse">
            <collapse-item name="1">
              <h5
                slot="title"
                class="mb-0 btn btn-link w-100 text-primary text-left"
              >
                Accessorials <i class="ni ni-bold-down float-right pt-1"></i>
              </h5>
              <div class="row">
                <div class="col-md-3">
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
                <div class="col-md-3">
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
                <div class="col-md-3">
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
                <div class="col-md-3">
                  <p class="accessorials-title-blank"></p>
                  <base-checkbox class="mb-2">
                    Accessorial A
                  </base-checkbox>
                  <base-checkbox class="mb-2">
                    Accessorial B
                  </base-checkbox>
                  <base-checkbox class="mb-2">
                    Accessorial C
                  </base-checkbox>
                  <base-checkbox class="mb-2">
                    Accessorial D
                  </base-checkbox>
                  <base-checkbox class="mb-2">
                    Accessorial E
                  </base-checkbox>
                </div>
              </div>
            </collapse-item>
          </collapse>
          <div class="get-rate">
            <router-link to="/viewquote">
              <base-button type="primary" class="get-rate-btn">
                GET RATES
              </base-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../layout/LeftPanel";
import Collapse from "@/components/Collapse/Collapse";
import CollapseItem from "@/components/Collapse/CollapseItem";
import Tabs from "@/components/Tabs/Tabs.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import ChoicesSingle from "@/components/SingleSelect";

export default {
  components: {
    LeftPanel,
    Collapse,
    CollapseItem,
    Tabs,
    TabPane,
    ChoicesSingle
  },
  data: function() {
    return {
      activeMenuName: "New Quote",
      additionalPiece: [
        {
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
          ]
        }
      ]
    };
  },
  methods: {
    additionalNewPiece: function() {
      let additionalPieceObj = {
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
        ]
      };
      this.additionalPiece.push(additionalPieceObj);
    },
    clearAllAdditionalPiece: function() {
      this.additionalPiece = [];
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
</style>
