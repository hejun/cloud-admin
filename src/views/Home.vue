<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
import {inject} from 'vue'

const msg = inject('msg')
</script>

<style scoped lang="less">
.home {
}
</style>
