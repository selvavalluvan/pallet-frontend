<template>
  <div class="wrapper">
    <div class="page-header bg-default">
      <div
        class="page-header-image"
        style="background-image: url('img/ill/register_bg.png');"
      ></div>
      <div
        class="container"
        v-bind:class="{ 'right-panel-active': isActive }"
        id="container"
      >
        <div class="form-container sign-up-container">
          <form action="javascript:;">
            <h2>Create Account</h2>
            <span class="text-default mb-4"
              >use your email for registration</span
            >
            <div class="form-group mb-0">
              <base-input
                alternative
                placeholder="Name"
                addonLeftIcon="ni ni-circle-08"
              ></base-input>
            </div>
            <div class="form-group mb-0">
              <base-input
                alternative
                placeholder="Email"
                addonLeftIcon="ni ni-email-83"
              ></base-input>
            </div>
            <div class="form-group">
              <base-input
                alternative
                placeholder="Password"
                addonLeftIcon="ni ni-lock-circle-open"
              ></base-input>
            </div>
            <base-button type="success">Sign Up</base-button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#" role="form">
            <h2>Sign in</h2>
            <span class="text-default mb-4">using your account</span>
            <div class="form-group mb-0">
              <base-input
                alternative
                placeholder="Email"
                addonLeftIcon="ni ni-email-83"
              ></base-input>
            </div>
            <div class="form-group">
              <base-input
                alternative
                placeholder="Password"
                addonLeftIcon="ni ni-lock-circle-open"
              ></base-input>
            </div>
            <router-link to="/reset" class="dropdown-item">
              Forgot your password?
            </router-link>

            <router-link to="/home">
              <base-button type="success" class="mt-3">Sign In</base-button>
            </router-link>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1 class="text-white">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <base-button type="neutral" size="sm" @click="isActive = false"
                >Sign In</base-button
              >
            </div>
            <div class="overlay-panel overlay-right">
              <h1 class="text-white">Welcome!</h1>
              <p>
                Your a few steps away from creating your best quotes easier than
                ever before
              </p>
              <base-button type="neutral" size="sm" @click="isActive = true"
                >Sign Up</base-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "register-page",
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style></style>
