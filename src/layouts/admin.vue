<template>
  <div class="app-admin">
    <div class="app-menu">
      <AdminMenu />
    </div>
    <div class="app-body">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AdminMenu from '~/components/local/layouts/admin-menu.vue'

@Component({
  components: { AdminMenu }
})
export default class AdminLayout extends Vue {
}
</script>
<style lang="less" scoped>
.app-admin {
  position: relative;
  width: 100vw;
  height: 100vh;
}

.app-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  overflow: auto;
}
.app-body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 300px;
  right: 0;
  z-index: 2;
  overflow: auto;
}
</style>
