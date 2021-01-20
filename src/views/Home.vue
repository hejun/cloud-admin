<template>
  <div class="home">
    <button type="button" @click="queryUser">queryUser</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {userList} from "../assets/api/Uac"

export default defineComponent({
  name: 'Home',
  setup() {
    const queryUser = () => userList()
    return {
      queryUser
    }
  }
})
</script>

<style scoped lang="less">
.home {
}
</style>
