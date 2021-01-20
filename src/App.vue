<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent, watchEffect} from 'vue'
import {useRouter} from "vue-router"
import {useStore} from "./store"

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const store = useStore()

    //处理 store 浏览器刷新丢失问题
    const STORE_KEY = "KEY_CLOUD_ADMIN_STORE"
    if (<any>window.sessionStorage.getItem(STORE_KEY)) {
      store.replaceState(Object.assign({}, store.state, JSON.parse(<any>window.sessionStorage.getItem(STORE_KEY))))
    }
    <any>window.addEventListener('beforeunload', () => {
      <any>window.sessionStorage.setItem(STORE_KEY, JSON.stringify(store.state))
    })

    //处理登录状态
    const authorized = store.getters.authorized
    watchEffect(() => authorized.value ? router.replace("/") : router.replace("/login"))
  }
})
</script>
