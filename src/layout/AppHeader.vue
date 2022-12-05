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

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center ml-lg-auto">

        <li>
          <a class="pallet-header-help" href="mailto:support@usepallet.com" target="_blank">
            <i class="fa fa-question-circle help-icon" aria-hidden="true"></i>
            Help
          </a>
        </li>

        <li>
          <base-button type="success" class="carriers-btn-text">
            Invite colleagues
          </base-button>
        </li>

        <li>
          <router-link to="/checkout">
            <base-button type="info" class="carriers-btn-text">
              Upgrade
            </base-button>
          </router-link>
        </li>

        <base-dropdown class="nav-item account-dropdown">
          <a
            role="button"
            slot="title"
            href="#"
            class="nav-link"
            data-toggle="dropdown"
          >
            <i class="fa fa-user-circle-o account-icon" aria-hidden="true"></i>
             Account
          </a>
          <router-link to="/account" class="dropdown-item">
            <i class="ni ni-lock-circle-open text-muted"></i>
            Account Settings
          </router-link>
          
           <router-link to="/profile-page" class="dropdown-item">
            <i class="ni ni-tv-2 text-danger"></i>
            Profile
          </router-link>

          <router-link to="/invoice" class="dropdown-item">
            <i class="ni ni-air-baloon text-pink"></i>
            Billing
          </router-link>

          <router-link to="/checkout" class="dropdown-item">
            <i class="ni ni-atom text-info"></i>
            Upgrade
          </router-link>

          <router-link to="/" class="dropdown-item">
            <i class="ni ni-bullet-list-67 text-success"></i>
            Invite a colleague
          </router-link>
        </base-dropdown>
        
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";
import BaseDropdown from "@/components/BaseDropdown";
import Headroom from "headroom.js";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
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

@media only screen and (max-width: 700px) {
  .pallet-text {
    display :none;
  }
}
</style>
