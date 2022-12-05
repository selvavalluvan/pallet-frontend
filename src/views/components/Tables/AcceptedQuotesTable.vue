<template>
  <div>
    <div>
      <span class="v-data-table-title"> Accepted Quotes </span>
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
            </div>
          </template>
          <template v-slot:expanded-item="{ headers }">
            <td :colspan="headers.length">
              <v-simple-table>
                <template v-slot:default></template>
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
