<template>
  <div :style="styleGeneral" class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  data() {
    return {
      styleGeneral: this.createGutter(this.gutter)
    };
  },
  props: {
    gutter: Number,
    columns: {
      type: Number,
      default: 12
    }
  },
  methods: {
    createGutter(gutter) {
      return gutter
        ? `--paddingSGR:${gutter / 2}px;--marginSGR:-${gutter / 2}px`
        : '--paddingSGR:0;--marginSGR:0';
    }
  }
};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + (var(--paddingSGR) * 2));
  margin: var(--marginSGR);
}
</style>
