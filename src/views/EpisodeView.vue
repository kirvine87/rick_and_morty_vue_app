<template lang="html">
  <div class="">
    <h2>I am episode view</h2>
    <p>{{character.name}}</p>
  </div>
</template>

<script>
export default {
  name: 'episode-view',
  props: ['character']
}
</script>

<style lang="css" scoped>
h2 {
  color: white;
}
p {
  color: white;
  font-size: 20px;
}

</style>
