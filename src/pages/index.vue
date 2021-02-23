<template>
  <div class="page-container">
    <div v-if="!loading">
      <Intro />
      <div>
        <Button type="primary">
          {{ word }}
        </Button>
      </div>
    </div>
    <Loading v-if="loading" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Button } from 'ant-design-vue'
import Loading from '~/components/UI/Loading/index.vue'
import Intro from '~/components/local/index/intro.vue'

@Component({
  layout: 'admin',
  components: {
    Button,
    Loading,
    Intro
  }
})
export default class Index extends Vue {
  word: string = 'hello es6'
  loading: boolean = false

  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 5000)
  }
}
</script>

<style lang="less" scoped>
.page-container {
  text-align: center;
}
</style>
