<template>
  <div :style="styleGeneral" class="grid-row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    gutter: Number,
    columns: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      styleGeneral: this.createGutter(this.gutter)
    };
  },
  methods: {
    createGutter(gutter) {
      return gutter
        ? `--paddingVGR:${gutter / 2}px;--marginVGR:-${gutter / 2}px`
        : '--paddingVGR:0;--marginVGR:0';
    }
  }
};
</script>

<style scoped>
.grid-row {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + (var(--paddingVGR) * 2));
  margin: var(--marginVGR);
}
</style>
