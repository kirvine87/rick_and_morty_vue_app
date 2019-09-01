<template lang="html">
  <div>
    <ul>
      <CharcterListItem v-for="(character, index) in characters" :key="index" :character="character" />
    </ul>
  </div>
</template>

<script>
import CharcterListItem from '@/components/CharacterListItem'
export default {
  name: 'character-list',
  props: ['characters'],
  components: {
    CharcterListItem
  }

}
</script>

<style lang="css" scoped>
  ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  }
</style>
 
