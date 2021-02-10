<template>
  <div class="container">
    <div>
      <Logo />
      <Button type="primary">
        Primary
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Button } from 'ant-design-vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Button,
    Logo
  }
})
</script>

<style lang="less" scoped>
.container {
  text-align: center;
}
</style>
