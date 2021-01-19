<template>
  <div class="home">
    {{ token }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from "../store"

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    let token = store.state.token

    return {
      token
    }
  }
})
</script>

<style scoped lang="less">
.home {
}
</style>
