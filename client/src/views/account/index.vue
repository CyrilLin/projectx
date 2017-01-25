<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <label class="label">Username</label>
          <p class="control has-icon has-icon-right">
            <input class="input" type="text" v-model:value="user.userId">
          </p>
          <label class="label">Email</label>
          <p class="control has-icon has-icon-right">
            <input class="input" type="text" v-model:value="user.email">
          </p>
          <label class="label">Password</label>
          <p class="control has-icon has-icon-right">
            <input class="input" disabled type="password" v-model:value="user.password">
          </p>
          <label class="label">New Password</label>
          <p class="control has-icon has-icon-right">
            <input class="input" type="password" v-model:value="user.newPassword">
          </p>
          <label class="label">Confirm Password</label>
          <p class="control has-icon has-icon-right">
            <input class="input" type="password" v-model:value="user.confirm">
          </p>
          <label class="label">About Me</label>
          <p class="control">
            <textarea class="textarea" placeholder="Say something about you..." v-model="user.about"></textarea>
          </p>
          <div class="control is-grouped">
            <p class="control">
              <button class="button is-primary">Modify</button>
            </p>
            <p class="control">
              <button class="button is-link">Cancel</button>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default{
  computed: mapGetters(['user'])
}
</script>

<style></style>
