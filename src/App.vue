<template>
  <div id="app" class="section">
    <h1 class="title has-text-centered">Простое веб приложение</h1>
    <div class="container">
      <div class="accordions">
        <notes-group v-for="group in groups" :groupData="group" :key="group.name"/>
      </div>
    </div>

    <div class="container has-text-right" style="margin-top: 20px;">
      <button class="button is-primary" @click="addNewGroup">Добавить новую группу</button>
    </div>
  </div>
</template>

<script>
import Note from '@/components/Note'
import NotesGroup from '@/components/NotesGroup'

export default {
  name: 'App',
  components: {
    Note,
    NotesGroup
  },
  methods: {
    addNewGroup () {
      this.$store.dispatch('createNewGroup')
    },
    test () {
      console.log('test')
    }
  },
  computed: {
    groups () {
      return this.$store.getters.groups
    }
  },
  mounted () {
    const vm = this
    setInterval(function () {
      vm.$store.dispatch('shuffleNotes')
    }, 5000)
  }
}
</script>

<style>
</style>
