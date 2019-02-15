import Vue from 'vue'
import Vuex from 'vuex'

import { shuffle } from '@/utils/shuffleArray'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    notes: [],
    groups: []
  },
  mutations: {
    addGroup (state, group) {
      state.groups.push(group)
    },
    addNewNote (state, note) {
      state.notes.push(note)
    }
  },
  actions: {
    createNewGroup ({ commit, state, getters }) {
      const nextId = getters.groupsCount + 1
      commit('addGroup', {id: nextId, groupName: `Группа ${nextId}`, notes: []})
    },
    createNewNote ({ commit, state, getters, dispatch }, startGroupID) {
      let group = getters.groupByID(startGroupID)
      const nextNoteID = getters.notesCount + 1

      const newNote = { id: nextNoteID, noteName: `Запись ${nextNoteID}` }
      group.notes.push(newNote)
      commit('addNewNote', newNote)
    },
    shuffleNotes ({ commit, state, getters, dispatch }) {
      let notes = getters.notes.slice(0)
      let shuffledNotes = shuffle(notes)
      let groups = getters.groups

      groups.map(function (group) { group.notes = [] })

      while (shuffledNotes.length > 0) {
        groups[Math.floor(Math.random() * groups.length)].notes.push(shuffledNotes.pop())
        console.log(groups)
      }
    }
  },
  getters: {
    groupsCount: (state, getters) => {
      return state.groups.length
    },
    notesCount: (state, getters) => {
      return state.notes.length
    },
    notes: (state) => {
      return state.notes
    },
    groups: (state) => {
      return state.groups
    },
    groupByID: state => id => {
      return state.groups.filter(group => group.id === id)[0]
    }
  }
})
