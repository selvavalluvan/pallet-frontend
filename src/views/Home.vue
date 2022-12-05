<template>
  <div class="wrapper">
    <div class="body-container row">
      <left-panel :activeMenuName="activeMenuName"></left-panel>
      <div class="col-md-10 right-panel-scroll">
        <div
          class="row align-items-center justify-content-center home-page-margin"
        >
          <div class="col-lg-6 text-center">
            <h3>Pallet</h3>
            <base-button
              type="primary"
              size="lg"
              @click="firstQuoteModal = true"
            >
              CREATE YOUR FIRST QUOTE
            </base-button>
          </div>
        </div>

        <div class="row align-items-center justify-content-center">
          <div class="menu-text-align">
            <router-link to="/newquote">
              <div class="left-item-menu">
                <svg
                  width="34"
                  height="42"
                  viewBox="0 0 34 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1654 0.166992H4.4987C2.20703 0.166992 0.352865 2.04199 0.352865 4.33366L0.332031 37.667C0.332031 39.9587 2.1862 41.8337 4.47786 41.8337H29.4987C31.7904 41.8337 33.6654 39.9587 33.6654 37.667V12.667L21.1654 0.166992ZM25.332 29.3337H19.082V35.5837H14.9154V29.3337H8.66536V25.167H14.9154V18.917H19.082V25.167H25.332V29.3337ZM19.082 14.7503V3.29199L30.5404 14.7503H19.082Z"
                    fill="#172B4D"
                  />
                </svg>
                <p class="p-text-new-quote menu-p-text">
                  Create New Quote
                </p>
              </div>
            </router-link>
          </div>

          <div class="quotes-item menu-text-align">
            <router-link to="/quotes">
              <div class="left-item-menu">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.8161 2.36399V30.0004H0.179688V2.36399C0.179688 1.96181 0.505506 1.63672 0.90696 1.63672H11.0888C11.4902 1.63672 11.8161 1.96181 11.8161 2.36399ZM5.99787 9.63672C5.59641 9.63672 5.2706 9.96181 5.2706 10.364V19.0913C5.2706 19.4934 5.59641 19.8185 5.99787 19.8185C6.39932 19.8185 6.72514 19.4934 6.72514 19.0913V10.364C6.72514 9.96181 6.39932 9.63672 5.99787 9.63672Z"
                    fill="#172B4D"
                  />
                  <path
                    d="M0.179688 31.4541V43.0905C0.179688 43.4926 0.505506 43.8177 0.90696 43.8177H11.0888C11.4902 43.8177 11.8161 43.4926 11.8161 43.0905V31.4541H0.179688Z"
                    fill="#172B4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.6325 2.36399V30.0004H13.9961V2.36399C13.9961 1.96181 14.3219 1.63672 14.7234 1.63672H24.9052C25.3066 1.63672 25.6325 1.96181 25.6325 2.36399ZM19.8143 9.63672C19.4128 9.63672 19.087 9.96181 19.087 10.364V19.0913C19.087 19.4934 19.4128 19.8185 19.8143 19.8185C20.2157 19.8185 20.5415 19.4934 20.5415 19.0913V10.364C20.5415 9.96181 20.2157 9.63672 19.8143 9.63672Z"
                    fill="#172B4D"
                  />
                  <path
                    d="M13.9961 31.4541V43.0905C13.9961 43.4926 14.3219 43.8177 14.7234 43.8177H24.9052C25.3066 43.8177 25.6325 43.4926 25.6325 43.0905V31.4541H13.9961Z"
                    fill="#172B4D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M35.6183 1.03348L40.8641 28.1673L29.4394 30.3767L24.1929 3.2422C24.1172 2.84802 24.3747 2.4662 24.7689 2.39057L34.766 0.457477C34.9543 0.418932 35.1514 0.460386 35.3114 0.56875C35.4714 0.677113 35.582 0.843659 35.6183 1.03348ZM32.1383 9.85457C32.0612 9.45966 31.678 9.19857 31.286 9.27857C30.8918 9.3542 30.6343 9.73602 30.71 10.1302L32.3667 18.6989C32.4343 19.0473 32.7383 19.2887 33.0801 19.2887C33.126 19.2887 33.1725 19.2844 33.2191 19.2749C33.6132 19.1986 33.8707 18.8175 33.7951 18.4233L32.1383 9.85457Z"
                    fill="#172B4D"
                  />
                  <path
                    d="M29.7148 31.8042L31.9236 43.2289C31.9912 43.5765 32.2959 43.818 32.637 43.818C32.6828 43.818 32.7287 43.8136 32.7759 43.8042L42.773 41.8718C42.9621 41.8355 43.1294 41.7249 43.2378 41.5649C43.3461 41.4049 43.3861 41.2093 43.349 41.0202L41.1403 29.5947L29.7148 31.8042Z"
                    fill="#172B4D"
                  />
                </svg>
                <p class="p-text-quotes menu-p-text">
                  Quotes
                </p>
              </div>
            </router-link>
          </div>

          <div class="menu-text-align carriers-item">
            <router-link to="/carriers">
              <div class="left-item-menu">
                <svg
                  width="46"
                  height="44"
                  viewBox="0 0 46 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.6654 8.66634H33.4154V0.333008H4.2487C1.95703 0.333008 0.0820312 2.20801 0.0820312 4.49967V27.4163H4.2487C4.2487 30.8747 7.04036 33.6663 10.4987 33.6663C13.957 33.6663 16.7487 30.8747 16.7487 27.4163H29.2487C29.2487 30.8747 32.0404 33.6663 35.4987 33.6663C38.957 33.6663 41.7487 30.8747 41.7487 27.4163H45.9154V16.9997L39.6654 8.66634ZM10.4987 30.5413C8.76953 30.5413 7.3737 29.1455 7.3737 27.4163C7.3737 25.6872 8.76953 24.2913 10.4987 24.2913C12.2279 24.2913 13.6237 25.6872 13.6237 27.4163C13.6237 29.1455 12.2279 30.5413 10.4987 30.5413ZM38.6237 11.7913L42.707 16.9997H33.4154V11.7913H38.6237ZM35.4987 30.5413C33.7695 30.5413 32.3737 29.1455 32.3737 27.4163C32.3737 25.6872 33.7695 24.2913 35.4987 24.2913C37.2279 24.2913 38.6237 25.6872 38.6237 27.4163C38.6237 29.1455 37.2279 30.5413 35.4987 30.5413Z"
                    fill="#172B4D"
                  />
                </svg>
                <p class="p-text-carriers menu-p-text">
                  Carriers
                </p>
              </div>
            </router-link>
          </div>

          <modal
            :show.sync="firstQuoteModal"
            modal-classes="modal-dialog-centered modal-lg"
          >
            <h4>How many carriers do you want to add now?</h4>
            <p>*Reccomended at least 3 carriers</p>

            <div
              class="row align-items-center justify-content-center number-carriers-margin"
            >
              <div class="col-lg-5">
                <p class="number-carriers-text">
                  Number of Carriers you want to add
                </p>
                <div class="form-group">
                  <choices-single :options="carriersNumber" v-model="selected">
                    <option disabled value="0">Select one</option>
                  </choices-single>
                </div>
                <router-link to="/newcarriers">
                  <base-button
                    type="primary"
                    class="start-btn"
                    v-on:click="addNewCarriers"
                  >
                    Start
                  </base-button>
                </router-link>
              </div>
            </div>

            <div class="text-right">
              *I don’t have time or I’m worried about setting up all my
              carriers. Pay Pallet to do it for me
            </div>
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftPanel from "../layout/LeftPanel";
import Modal from "@/components/Modal.vue";
import ChoicesSingle from "@/components/SingleSelect";

export default {
  bodyClass: "home",
  components: {
    LeftPanel,
    Modal,
    ChoicesSingle
  },
  data: function() {
    return {
      activeMenuName: "Home",
      firstQuoteModal: false,
      selected: 0,
      carriersNumber: [
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
        },
        {
          id: 4,
          text: "4"
        },
        {
          id: 5,
          text: "5"
        },
        {
          id: 6,
          text: "6"
        },
        {
          id: 7,
          text: "7"
        }
      ]
    };
  },
  methods: {
    addNewCarriers: function() {
      localStorage.setItem("carriersCount", this.selected);
    }
  }
};
</script>

<style></style>
