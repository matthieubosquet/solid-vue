<template>
  <h1>{{ msg }} {{ name }}</h1>
</template>

<script>
export default {
  props: {
    msg: { default: "Hello", type: String }
  },
  data () {
    return {
      name: "World"
    }
  },
  async created() {
    await this.loadUser()
  },
  methods: {
    async loadUser() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await fetch("https://reqres.in/api/users")
      const { data: users } = await response.json()
      this.name = users.length
    }
  },
}
</script>

<style scoped>
h1 {
  margin: 1em 0 0;
}
</style>
