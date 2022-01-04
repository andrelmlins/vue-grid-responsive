<template>
  <div :style="styleGeneral" :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  props: {
    gutter: {
      Number,
      default: 0
    },
    columns: {
      type: Number,
      default: 12
    }
  },
  computed: {
    styleGeneral() {
      return `--paddingVGR:${this.gutter / 2}px;--marginVGR:-${this.gutter /
        2}px;${this.$props.style || ''}`;
    },
    classGeneral() {
      return `grid-row ${this.$props.class || ''}`;
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
