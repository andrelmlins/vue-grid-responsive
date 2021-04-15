<template>
  <div :style="styleGeneral" :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Col',
  data() {
    let styleGeneral = this.createStyleSize();

    if (this.xs || this.sm || this.md || this.lg || this.xl) {
      styleGeneral += `--colFlexVGR:0;`;
    } else {
      styleGeneral = `--colFlexVGR:1;`;
    }

    return {
      classGeneral: `colVGR ${this.createClassSize()}`,
      styleGeneral
    };
  },
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number
  },
  methods: {
    getValue(breakpoint) {
      const localColumns = this.$parent.columns;
      if (breakpoint > localColumns) {
        breakpoint = localColumns;
      }

      return breakpoint ? `${(breakpoint / localColumns) * 100}%` : false;
    },
    createClassSize() {
      let newClass = 'colVGR-xs ';

      newClass += this.sm ? 'colVGR-sm ' : '';
      newClass += this.md ? 'colVGR-md ' : '';
      newClass += this.lg ? 'colVGR-lg ' : '';
      newClass += this.xl ? 'colVGR-xl ' : '';

      return newClass;
    },
    createStyleSize() {
      let newStyle = '';

      newStyle += this.xs
        ? `--xsWidthVGR:${this.getValue(this.xs)}; `
        : `--xsWidthVGR:100%; `;
      newStyle += this.sm ? `--smWidthVGR:${this.getValue(this.sm)}; ` : '';
      newStyle += this.md ? `--mdWidthVGR:${this.getValue(this.md)}; ` : '';
      newStyle += this.lg ? `--lgWidthVGR:${this.getValue(this.lg)}; ` : '';
      newStyle += this.xl ? `--xlWidthVGR:${this.getValue(this.xl)}; ` : '';

      return newStyle;
    }
  }
};
</script>

<style scoped>
.colVGR {
  position: relative;
  box-sizing: border-box;
  flex-grow: var(--colFlexVGR);
  padding: var(--paddingVGR);
}
.colVGR-xs {
  flex-basis: var(--xsWidthVGR);
  max-width: var(--xsWidthVGR);
}

@media (min-width: 576px) {
  .colVGR-sm {
    flex-basis: var(--smWidthVGR);
    max-width: var(--smWidthVGR);
  }
}

@media (min-width: 768px) {
  .colVGR-md {
    flex-basis: var(--mdWidthVGR);
    max-width: var(--mdWidthVGR);
  }
}

@media (min-width: 992px) {
  .colVGR-lg {
    flex-basis: var(--lgWidthVGR);
    max-width: var(--lgWidthVGR);
  }
}

@media (min-width: 1200px) {
  .colVGR-xl {
    flex-basis: var(--xlWidthVGR);
    max-width: var(--xlWidthVGR);
  }
}
</style>
