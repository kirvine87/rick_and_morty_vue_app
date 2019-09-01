<template lang="html">
  <div id="header-container">
    <h1>Wubbalubbadubdub! </h1>
    <router-link id="link" :to="{ name: 'character' }">Back To Characters</router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  h1 {
    display: flex;
    justify-content: center;
    color: green;
  }

  #link {
    font-size: 30px;
    display: flex;
    justify-content: center;
  }
</style>
