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
import { useStore } from "../store";

export default defineComponent({
  setup() {
    const { state } = useStore();
    return { state };
  },
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
      this.state.session = getDefaultSession();
      this.state.loggedIn = this.state.session?.info.isLoggedIn ?? false;
    }
  },
})
</script>
