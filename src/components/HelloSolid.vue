<template>
  <h1>{{ msg }} {{ name }}</h1>
</template>

<script>
import {
  getSolidDataset,
  getThing,
  getStringNoLocale
} from "@inrupt/solid-client";

export default {
  props: {
    msg: { default: "Hello", type: String },
  },
  data() {
    return {
      name: "world"
    }
  },
  computed: {
    profile () {
      if (this.$store.state.loggedIn) {
        return this.$store.state.session.info.webId;
      }
      return null;
    }
  },
  watch: {
    async profile (profile) {
      if (profile) {
        this.name = await this.read(profile, "http://www.w3.org/2006/vcard/ns#fn");
      }
      else {
        this.name = "world";
      }
    }
  },
  methods: {
    async read(thing, property) {
      return await getStringNoLocale(getThing(await getSolidDataset(thing), thing), property);
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 1em 0 0;
}
</style>
