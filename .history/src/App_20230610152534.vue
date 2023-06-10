<template>app</template>

<script setup>
import { allChannelListAPI } from '@/api'
import { onMounted } from 'vue'
onMounted(() => {
  getData()
})
const getData = () => {
  const data = allChannelListAPI()
}
</script>
<style lang="less">
</style>
