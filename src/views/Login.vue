<template>
  <div class="login">
    <div>
      <input type="text" v-model="username">
    </div>
    <div>
      <input type="password" v-model="password">
    </div>
    <div>
      <button type="button" @click="login">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useStore} from "../store"
import {obtainToken} from "../assets/api/Auth"

export default defineComponent({
  name: "Login",
  setup() {
    const store = useStore()

    const username = ref('admin')
    const password = ref('1234')
    const login = () => obtainToken(username.value, password.value)
      .then(token => store.dispatch('updateToken', token))
      .catch(error => console.log(error))

    return {
      username,
      password,
      login
    }
  }
})
</script>

<style scoped>

</style>
