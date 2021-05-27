<template>
  <h1>{{ msg }} {{ name }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Solid from "../services/SolidDataService";

export default defineComponent({
  props: {
    msg: { default: "Hello", type: String },
  },
  data() {
    return {
      name: "world"
    }
  },
  computed: {
    profile(): string {
      if (this.$store.state.loggedIn) {
        return this.$store.state.session?.info.webId ?? "";
      }
      return "";
    }
  },
  watch: {
    async profile (profile) {
      if (profile && profile !== "") {
        this.name = (await this.getName(profile)) ?? "world";
      }
      else {
        this.name = "world";
      }
    }
  },
  methods: {
    async getName(thing: string) {
      return Solid.getString("http://www.w3.org/2006/vcard/ns#fn", thing)
    }
  },
})
</script>

<style scoped>
h1 {
  margin: 1em 0 0;
}
</style>
