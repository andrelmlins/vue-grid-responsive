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
      classGeneral: `col ${this.createClassSize()}`,
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
      let newClass = 'col-xs ';

      newClass += this.sm ? 'col-sm ' : '';
      newClass += this.md ? 'col-md ' : '';
      newClass += this.lg ? 'col-lg ' : '';
      newClass += this.xl ? 'col-xl ' : '';

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
.container {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + (var(--paddingVGR) * 2));
  margin: var(--marginVGR);
}

.col {
  position: relative;
  box-sizing: border-box;
  flex-grow: var(--colFlexVGR);
  padding: var(--paddingVGR);
}
.col-xs {
  flex-basis: var(--xsWidthVGR);
  max-width: var(--xsWidthVGR);
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: var(--smWidthVGR);
    max-width: var(--smWidthVGR);
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: var(--mdWidthVGR);
    max-width: var(--mdWidthVGR);
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: var(--lgWidthVGR);
    max-width: var(--lgWidthVGR);
  }
}

@media (min-width: 1200px) {
  .col-xl {
    max-width: var(--xlWidthVGR);
  }
}
</style>
