<template>app</template>

<script setup>
import { allChannelListAPI } from '@/api'
import { onMounted } from 'vue'
onMounted(() => {
  getData()
})
const getData = async () => {
  const { data: res } = await allChannelListAPI()
  console.log('data', data)
}
</script>
<style lang="less">
</style>
