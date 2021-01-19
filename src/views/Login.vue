<template>
  <button type="button" @click="updateToken">更新Token</button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from "vue-router"
import {useStore} from "../store"
import Token from "../assets/vo/Token"

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter()
    const store = useStore()
    let token: Token = {
      accessToken: 'accessToken',
      tokenType: 'tokenType',
      refreshToken: 'refreshToken',
      expiresAt: 0,
      scope: 'scope'
    }
    const updateToken = () => {
      store.dispatch('updateToken', token)
      router.replace('/')
    }
    return {
      updateToken
    }
  }
})
</script>

<style scoped>

</style>
