<template lang="html">
  <div id="view" v-if="characters.length">
    <CharacterList :characters="characters"  />
    <CharacterDetail v-if="selectedCharacter" :character="selectedCharacter" />
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList';
import CharacterDetail from '@/components/CharacterDetail';
import {eventBus} from '@/main.js'
export default {
  name: 'character-view',
  data() {
    return {
      characters: [],
      selectedCharacter: null
    }
  },
  mounted() {
    fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(data => this.characters = data.results)

    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character
    })
  },
  components: {
    CharacterList,
    CharacterDetail
  }
}
</script>

<style lang="css" scoped>
</style>
