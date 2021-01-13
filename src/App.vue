<template>
  <div id="app">
    <div class="variable">
      <p class="variable_title">Вариант 1</p>
      <ValidateComponent ref="childComponent"></ValidateComponent>
      <button @click="click">Вызвать метод дочерних компонентов</button>
    </div>

    <div>
      <p class="variable">Вариант 2</p>
      <ValComp>
        <template v-slot:trigger="{ buttonValue, text }">
          <div>
            <button @click="buttonValue">Вызвать метод дочерних компонентов</button>
            <p>{{ text }}</p>
          </div>
          <Cart :buttonValue="buttonValue" :text="text"></Cart>
        </template>
      </ValComp>
    </div>
  </div>
</template>

<script>
 import ValidateComponent from './components/ValidateComponent'
 import ValComp from './components/ValComp'
 import Cart from './components/Cart'

  export default {
   components: {
     ValidateComponent,
     ValComp,
     Cart
   },
    data() {
      return {

      }
    },
    methods: {
      click: function() {
        this.$refs.childComponent.setValue('Метод вызвался у дочернего компонента');
      }
    }
  }
</script>

<style lang="scss">
  .variable {
    border: 1px dashed black;

    &_title {
      font-weight: bold;
    }
  }

  .child-component {
    border: 1px solid black;
  }
</style>
