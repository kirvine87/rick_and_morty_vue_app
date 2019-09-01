<template lang="html">
  <div @click="handleCharacterClick">
  <li>{{character.name}}</li>
  <img :src="character.image" />
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: 'character-list-item',
  props: ['character'],
  methods:{
    handleCharacterClick() {
      eventBus.$emit('character-selected', this.character)
    }
  }
}
</script>

<style lang="css" scoped>
  img {
    height: 100px;
    width: 100px;
  }

  div {
    border: 2px solid green;
    background-color: skyblue;
  }

  div:hover {
    font-size: 18px;
  }

  li {
    display: flex;
    width: 150px;
    height: 40px;
    text-decoration: none;
    list-style-type: none;
  }


</style>
