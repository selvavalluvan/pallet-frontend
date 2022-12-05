<template>
  <div>
    <div>
      <span class="v-data-table-title"> Best Quotes </span>
      <div class="tools float-right">
        <base-dropdown menuClasses="dropdown-menu-right">
          <div
            slot="title"
            class="nav-link dropdown-toggle text-primary"
            data-toggle="dropdown"
          >
            <i class="ni ni-settings-gear-65"></i>
          </div>
        </base-dropdown>
      </div>
    </div>
    <div>
      <v-app id="inspire">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="tableData"
          :single-expand="singleExpand"
          :expanded.sync="expanded"
          :single-select="singleSelect"
          :hide-default-footer="true"
          item-key="name"
          show-expand
          select-enable
          class="elevation-1"
        >
          <template v-slot:item.name="{}">
            <div class="checkbox-pin">
              <base-checkbox></base-checkbox>
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2.81523V7.58402C9 8.65223 9.37 9.64413 10 10.4453H4C4.65 9.62506 5 8.63315 5 7.58402V2.81523H9ZM12 0.907715H2C1.45 0.907715 1 1.33691 1 1.86147C1 2.38604 1.45 2.81523 2 2.81523H3V7.58402C3 9.16726 1.66 10.4453 0 10.4453V12.3528H5.97V19.0291L6.97 19.9829L7.97 19.0291V12.3528H14V10.4453C12.34 10.4453 11 9.16726 11 7.58402V2.81523H12C12.55 2.81523 13 2.38604 13 1.86147C13 1.33691 12.55 0.907715 12 0.907715Z"
                  fill="#004225"
                />
              </svg>
            </div>
          </template>
          <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">
              <v-simple-table>
                <template v-slot:default>
                  <div class="row v-table-row">
                    <div class="col-md-3">
                      <p class="accessorials-title">Carrier Quote Number</p>
                    </div>
                    <div class="col-md-3">
                      <p class="accessorials-title">Line Item</p>
                      <div class="best-quotes-item">Chargeable Rate</div>
                      <div class="best-quotes-item">Deficit Weight of</div>
                    </div>
                    <div class="col-md-2">
                      <p class="accessorials-title">Weight</p>
                      <div class="best-quotes-item">000000</div>
                      <div class="best-quotes-item">000000</div>
                    </div>
                    <div class="col-md-2">
                      <p class="accessorials-title">Base Rate</p>
                      <div class="best-quotes-item">000000</div>
                      <div class="best-quotes-item">000000</div>
                    </div>
                    <div class="col-md-2">
                      <p class="accessorials-title">Rate</p>
                      <div class="best-quotes-item">000000</div>
                      <div class="best-quotes-item">000000</div>
                    </div>
                  </div>
                  <div class="row v-table-row">
                    <div class="col-md-3">
                      <p class="accessorials-title">Accessorials:</p>
                    </div>
                    <div class="col-md-3">
                      <div class="best-quotes-item">Pickup Power Tailgate</div>
                      <div class="best-quotes-item">Non-Stackable</div>
                      <div class="best-quotes-item">Delivery Appointment</div>
                      <div class="best-quotes-item">
                        Delivery Power Tailgate
                      </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                      <div class="best-quotes-item">000000</div>
                      <div class="best-quotes-item">000000</div>
                    </div>
                  </div>
                  <div class="row v-table-row">
                    <div class="col-md-3"></div>
                    <div class="col-md-3">
                      <p class="accessorials-title">Subtotal</p>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2"></div>
                    <div class="col-md-2">
                      <p class="accessorials-title">000000</p>
                    </div>
                  </div>
                </template>
              </v-simple-table>
            </td>
          </template>
        </v-data-table>
      </v-app>
    </div>
  </div>
</template>

<script>
import BaseDropdown from "@/components/BaseDropdown";

export default {
  name: "light-table",
  components: {
    BaseDropdown
  },
  data() {
    return {
      singleSelect: false,
      selected: [],
      expanded: [],
      singleExpand: false,
      headers: [
        { text: "PIN/TAG", value: "name" },
        { text: "CARRIER", value: "carrier" },
        { text: "SERVICE LEVEL", value: "serviceLevel" },
        { text: "TRANSIT TIME", value: "transitTime" },
        { text: "(CARRIER RATE) buy rate)", value: "carrierRate" },
        { text: "QUOTED RATE", value: "quotedRate" },
        { text: "$     %     MARGIN", value: "data-table-expand" }
      ],
      tableData: [
        {
          name: "PIN",
          carrier: "NAME",
          serviceLevel: "LEVEL",
          transitTime: "TIME",
          carrierRate: "RATE",
          quotedRate: "RATE"
        },
        {
          name: "PIN 1",
          carrier: "NAME 1",
          serviceLevel: "LEVEL 1",
          transitTime: "TIME 1",
          carrierRate: "RATE 1",
          quotedRate: "RATE 1"
        },
        {
          name: "PIN 3",
          carrier: "NAME 3",
          serviceLevel: "LEVEL 3",
          transitTime: "TIME 3",
          carrierRate: "RATE 3",
          quotedRate: "RATE 3"
        }
      ]
    };
  }
};
</script>

<style></style>
