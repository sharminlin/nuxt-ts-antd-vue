<template>
  <div class="loading">
    <div class="loader" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {
  @Prop({ type: Boolean, default: false }) show!: boolean
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(245, 132, 170, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  position: relative;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: TypingAnimation 1s linear infinite alternate;
}

@keyframes TypingAnimation {
  0% {
    background-color: rgba(255,255,255, 1);
    box-shadow: 12px 0 0 0 rgba(255,255,255,0.2), 24px 0 0 0 rgba(255, 255, 255, 0.2);
  }
  25% {
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 12px 0 0 0 rgb(255, 255, 255), 24px 0 0 0 rgba(255, 255, 255, 0.2);
  }
  75% {
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255, 255, 255, 1);
  }
}
</style>
