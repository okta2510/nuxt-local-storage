<template>
  <div class="container">
    <div>
      <form v-on:submit.prevent="SubmitForm(userInfo)">
        <div class="form-group">
          <label for="">
            Name
          </label>
          <input  v-model="userInfo.name" type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="">
        </div>
        <div class="form-group">
          <label for="email">
            Email
          </label>
          <input v-model="userInfo.email" type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="">
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
      </form>
    </div>
    <hr v-show="users.length > 0" class="my-3">
    <div class="row mb-3">
      <div v-for="(user, index) in users" :key="index" class="col-md-4 mb-2">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{user.name}}</h4>
            <p class="card-text">{{user.email}}</p>
          </div>
        </div>
      </div>
    </div>
     <button v-show="users.length > 0" class="btn btn-danger" @click="clearProfile">Clear All</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      userInfo: {
        name: '',
        email: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getProfile']),
    users() {
      return this.$store.getters.getProfile
    }
  },
  methods: {
    SubmitForm() {
      this.$store.commit('setProfile', this.userInfo)
    },
    clearProfile() {
      this.$store.commit('clearProfile')
    }
  }
}
</script>

<style>
</style>
