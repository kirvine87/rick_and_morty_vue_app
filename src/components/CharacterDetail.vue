<template lang="html">
  <div class="">
    <h2>{{character.name}}</h2>
    <p>Status: {{character.status}}</p>
    <p>Species: {{character.species}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Origin: {{character.origin.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'character-detail',
  props: ['character']
}
</script>

<style lang="css" scoped>
</style>
