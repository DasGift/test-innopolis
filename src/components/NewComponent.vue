<template>
  <div>
    <slot name="trigger" :buttonValue="buttonValue" :text="text"/>
  </div>
</template>

<script>

export default {
  name: 'ValCompParent',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    buttonValue() {
      this.text = 'Дочерний компонент'
    }
  },
};
</script>

<style scoped>

</style>