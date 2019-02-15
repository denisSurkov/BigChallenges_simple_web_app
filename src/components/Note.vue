<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {
      title: this.note.noteName,
      noteID: this.note.id
    }
  },
  props: ['note']
}
</script>

<style scoped>

</style>
