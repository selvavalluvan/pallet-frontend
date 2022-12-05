<template>
  <header class="header-global">
    <base-nav
      class="navbar-main headroom"
      id="navbar-main"
      :type="navbarType ? navbarType : ''"
      effect="dark"
      expand
    >
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <label class="pallet-text">Pallet</label>
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <label class="pallet-text">Pallet</label>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import Headroom from "headroom.js";

export default {
  components: {
    BaseNav,
    CloseButton,
  },
  props: {
    navbarType: String
  },
  mounted: function() {
    let headroom = new Headroom(document.getElementById("navbar-main"), {
      offset: 300,
      tolerance: {
        up: 30,
        down: 30
      }
    });
    headroom.init();
  }
};
</script>
<style>
.navbar-main.headroom {
  z-index: 9999;
}
</style>
