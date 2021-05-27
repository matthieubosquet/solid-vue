<template>
  <form
    v-if="!$store.state.loggedIn"
    @submit.prevent="start"
  >
    <button type="submit">
      Login
    </button>
  </form>
  <form
    v-else
    @submit.prevent="end"
  >
    <button type="submit">
      Logout
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  login,
  logout,
  handleIncomingRedirect,
  getDefaultSession
} from "@inrupt/solid-client-authn-browser";

export default defineComponent({
  async created() {
    await handleIncomingRedirect({restorePreviousSession: true});

    this.update();
  },
  methods: {
    async end() {
      await logout();
      this.update();
    },
    start() {
      login({
        oidcIssuer: "https://broker.pod.inrupt.com",
        redirectUrl: window.location.href,
        clientName: "Solid Vue"
      });
    },
    update() {
      this.$store.state.session = getDefaultSession();
      this.$store.state.loggedIn = this.$store.state.session.info.isLoggedIn;
    }
  },
})
</script>
