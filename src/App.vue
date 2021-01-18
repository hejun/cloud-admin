<template>
  <router-view/>
</template>

<script setup lang="ts">
import {provide} from 'vue'

provide('msg', 'Hello World!')
</script>
