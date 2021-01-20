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
    const authorized = store.getters.authorized
    watchEffect(() => authorized.value ? router.replace("/") : router.replace("/login"))
  }
})
</script>
