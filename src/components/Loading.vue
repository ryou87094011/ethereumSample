<template>
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading
        type="spiningDubbles"
        color="blue"
        :size="{ width: '100px', height: '100px' }"
        >
      </vue-loading>
    </div>
</template>

<script>
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'loading',
  components: {
    VueLoading
  }

}
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
}
.loading-spacer {
  height: 30%;
}
</style>
