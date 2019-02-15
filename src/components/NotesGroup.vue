<template>
  <article class="accordion is-success" :class="{'is-active': active}" style="margin-bottom: 10px;">
    <div class="accordion-header toggle"  @click="changeActive">
      <p class="subtitle has-text-white">{{ groupName }}</p>
    </div>
    <div class="accordion-body" v-if="active">
      <div class="accordion-content">
        <transition-group name="list">
        <Note :note="note" v-for="note in notes" v-bind:key="note.id"/>
        </transition-group>
        <div class="card has-text-centered has-background-light is-hoverable" @click="addNewNote">
          <i class="fa fa-plus is-success add-button is-large"></i>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Note from '@/components/Note'
export default {
  name: 'NotesGroup',
  props: ['groupData'],
  components: {
    Note
  },
  data () {
    return {
      groupID: 0,
      groupName: 'Группа 1',
      active: false
    }
  },
  created () {
    this.groupName = this.groupData.groupName
    this.groupID = this.groupData.id
  },
  methods: {
    addNewNote () {
      console.log('you are going to add new note')
      this.$store.dispatch('createNewNote', this.groupID)
    },
    changeActive () {
      this.active = !this.active
    }
  },
  computed: {
    notes () {
      return this.$store.getters.groupByID(this.groupID).notes
    }
  }
}
</script>

<style scoped>
  .add-button {
    color: darkgreen;
  }
  .add-button:hover {
    color: green;
  }

  .list-move {
    transition: transform 1s;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
  }

  .list-leave-active {
    position: absolute;
  }
</style>
