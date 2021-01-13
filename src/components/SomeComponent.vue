<template>
  <div class="child-component">
    <p>Дочерний компонент 2</p>
    <span>{{ childText }}</span>
  </div>
</template>

<script>
export default {
  name: "SomeComponent",
  data() {
    return {
      childText: ''
    }
  },
  methods: {
    setValue: function(value) {
      this.childText = value
    }
  }
}
</script>

<style scoped>

</style>