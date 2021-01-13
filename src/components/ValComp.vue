<template>
  <div>
    <slot name="trigger" :buttonValue="buttonValue" :text="text"/>
    <NewComponent>
      <slot name="trigger" :buttonValue="buttonValue" :text="text"/>
    </NewComponent>
  </div>
</template>

<script>

import NewComponent from './NewComponent'
import Cart from './Cart'

export default {
  name: 'ValComp',
  components: {
    NewComponent,
    Cart
  },
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