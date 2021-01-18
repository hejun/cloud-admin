<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const msg = inject('msg')

    return {
      msg
    }
  }
})
</script>

<style scoped lang="less">
.home {
}
</style>
