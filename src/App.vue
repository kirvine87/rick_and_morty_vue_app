<template lang="html">
  <div id="view">
    <Header />
    <CharacterView />
  </div>
</template>

<script>
import Header from '@/components/Header'
import CharacterView from '@/views/CharacterView'
export default {
  name: 'app',
  components: {
    CharacterView,
    Header
  }
}
</script>

<style lang="css" scoped>
</style>
