<template lang="html">
  <div id="view" >
    <CharacterList :characters="characters"  />
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList';
export default {
  name: 'character-view',
  data() {
    return {
      characters: []
    }
  },
  mounted() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => this.characters = data.results)
  },
  components: {
    CharacterList
  }
}
</script>

<style lang="css" scoped>
</style>
