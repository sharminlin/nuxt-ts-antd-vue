<template>
  <div class="container">
    <div v-if="!loading">
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
import Loading from '~/components/UI/Loading.vue'
@Component({
  components: {
    Button,
    Loading
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
.container {
  text-align: center;
}
</style>
