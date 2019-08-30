<template lang="html">
  <div>
  <li>{{character.name}}</li>
  <img :src="character.image" />
  </div>
</template>

<script>
export default {
  name: 'character-list-item',
  props: ['character']
}
</script>

<style lang="css" scoped>
  img {
    height: 100px;
    width: 100px;
  }

  div:hover {
    font-size: 20px;
  }

  li {
    display: flex;
    width: 150px;
    text-decoration: none;
    list-style-type: none;
  }


</style>

<!-- {{character.status}} {{character.species}} {{character.gender}} {{character.origin.name}} -->
