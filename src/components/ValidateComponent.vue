<template>
  <div class="child-component">
    <p>Дочерний компонент</p>
    <span>{{ childText }}</span>
    <SomeComponent ref="childComponent2"></SomeComponent>
  </div>
</template>

<script>
import SomeComponent from './SomeComponent'
export default {
  name: "ValidateComponent",
  components: {
    SomeComponent
  },
  data() {
    return {
      childText: ''
    }
  },
  methods: {
    setValue: function(value) {
      this.childText = value
      this.$refs.childComponent2.setValue('Метод вызвался у дочернего компонента');
    }
  }
}
</script>

<style scoped>

</style>