<template lang="html">
  <div class="">
    <h2>{{character.name}}</h2>
    <p>Status: {{character.status}}</p>
    <p>Species: {{character.species}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Origin: {{character.origin.name}}</p>
    <p><router-link :to="{ name: 'episode' }">See Episodes</router-link></P>
  </div>
</template>

<script>
export default {
  name: 'character-detail',
  props: ['character']
}
</script>

<style lang="css" scoped>
  div {
    display: flex;
    flex-direction: column;
    border: 1px solid green;
  }
  h2, p {
    text-align: center;
    color: green;
  }
</style>
