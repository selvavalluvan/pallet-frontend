<template>
<div class="col-md-2 left-bar">
    <div class="sidebar-large-view">
        <sidebar-menu :activeMenuName="activeMenuName"></sidebar-menu>
    </div>

    <div class="sidebar-mobile-view">
        <button class="navbar-toggler navbar-dark sidebar-toggler-button" type="button" v-b-toggle.sidebar-backdrop>
            <span class="navbar-toggler-icon"></span>
        </button>

        <b-sidebar id="sidebar-backdrop" bg-variant="white" backdrop shadow>
            <div class="px-3 py-2">
                <sidebar-menu :activeMenuName="activeMenuName"></sidebar-menu>
            </div>
        </b-sidebar>
    </div>

</div>
</template>

<script>
import Vue from "vue";
import SidebarMenu from "../layout/SidebarMenu";
import {
    BSidebar
} from 'bootstrap-vue/esm/components/sidebar/sidebar';
import {
    VBToggle
} from "bootstrap-vue/esm/directives/toggle/toggle";
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.directive('b-toggle', VBToggle)

export default {
    name: "left-panel",
    components: {
        SidebarMenu,
        BSidebar
    },
    props: {
        activeMenuName: {
            type: String,
        },
    },
};
</script>

<style>
.sidebar-toggler-button {
    position: absolute;
    top: -70px;
    left: 10px;
    z-index: 900;
}

.sidebar-toggler-button:focus {
    outline: none !important;
}

@media only screen and (min-width: 767px) {
    .sidebar-mobile-view {
        display: none;
    }

    .sidebar-large-view {
        display: block;
    }
}

@media only screen and (max-width: 767px) {
    .sidebar-large-view {
        display: none;
    }

    .sidebar-mobile-view {
        display: block;
    }
}
</style>
