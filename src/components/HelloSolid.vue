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
    profile: { default: "https://pod.inrupt.com/docsteam/profile/card#me", type: String }
  },
  data () {
    return {
      name: "World"
    }
  },
  async created() {
    await this.load()
  },
  methods: {
    async load() {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const dataset = await getSolidDataset(this.profile);

      this.name = getStringNoLocale(getThing(dataset, this.profile), "http://www.w3.org/2006/vcard/ns#fn");
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 1em 0 0;
}
</style>
