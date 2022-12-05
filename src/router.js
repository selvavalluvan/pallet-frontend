import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import SignInHeader from "./layout/SignInHeader";
import AppFooter from "./layout/AppFooter";
import Register from "./views/Register.vue";
import Reset from "./views/Reset.vue";
import Home from "./views/Home.vue";
import CreateNewQuote from "./views/CreateNewQuote.vue";
import Quotes from "./views/Quotes.vue";
import ViewAllQuotes from "./views/ViewAllQuotes.vue";
import Carriers from "./views/Carriers.vue";
import NewCarriers from "./views/NewCarriers.vue";
import Account from "./views/Account.vue";
import ProfilePage from "./views/ProfilePage.vue";
import Invoice from "./views/Invoice.vue";
import Checkout from "./views/Checkout.vue";
import PinQuote from "./views/PinQuote.vue";
import SearchTabs from "./views/SearchTabs.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "register",
      components: {
        header: SignInHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/reset",
      name: "reset",
      components: {
        header: SignInHeader,
        default: Reset,
        footer: AppFooter
      }
    },
    {
      path: "/home",
      name: "home",
      components: {
        header: AppHeader,
        default: Home
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/newquote",
      name: "newquote",
      components: {
        header: AppHeader,
        default: CreateNewQuote
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/viewquote",
      name: "viewquote",
      components: {
        header: AppHeader,
        default: PinQuote
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/search-tabs",
      name: "search-tabs",
      components: {
        header: AppHeader,
        default: SearchTabs
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/quotes",
      name: "quotes",
      components: {
        header: AppHeader,
        default: Quotes
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/viewallquotes",
      name: "viewallquotes",
      components: {
        header: AppHeader,
        default: ViewAllQuotes
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/carriers",
      name: "carriers",
      components: {
        header: AppHeader,
        default: Carriers
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/newcarriers",
      name: "newcarriers",
      components: {
        header: AppHeader,
        default: NewCarriers
      },
      props: {
        header: { navbarType: "default" }
      }
    },
    {
      path: "/account",
      name: "account",
      components: {
        header: AppHeader,
        default: Account,
        footer: AppFooter
      }
    },
    {
      path: "/profile-page",
      name: "profile-page",
      components: {
        header: AppHeader,
        default: ProfilePage,
        footer: AppFooter
      }
    },
    {
      path: "/invoice",
      name: "invoice",
      components: {
        header: AppHeader,
        default: Invoice,
        footer: AppFooter
      }
    },
    {
      path: "/checkout",
      name: "checkout",
      components: {
        header: AppHeader,
        default: Checkout,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
