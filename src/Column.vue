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
      styleGeneral += `--colFlexSGR:0;`;
    } else {
      styleGeneral = `--colFlexSGR:1;`;
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
        ? `--xsWidthSGR:${this.getValue(this.xs)}; `
        : `--xsWidthSGR:100%; `;
      newStyle += this.sm ? `--smWidthSGR:${this.getValue(this.sm)}; ` : '';
      newStyle += this.md ? `--mdWidthSGR:${this.getValue(this.md)}; ` : '';
      newStyle += this.lg ? `--lgWidthSGR:${this.getValue(this.lg)}; ` : '';
      newStyle += this.xl ? `--xlWidthSGR:${this.getValue(this.xl)}; ` : '';

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
  width: calc(100% + (var(--paddingSGR) * 2));
  margin: var(--marginSGR);
}

.col {
  position: relative;
  box-sizing: border-box;
  flex-grow: var(--colFlexSGR);
  padding: var(--paddingSGR);
}
.col-xs {
  flex-basis: var(--xsWidthSGR);
  max-width: var(--xsWidthSGR);
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: var(--smWidthSGR);
    max-width: var(--smWidthSGR);
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: var(--mdWidthSGR);
    max-width: var(--mdWidthSGR);
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: var(--lgWidthSGR);
    max-width: var(--lgWidthSGR);
  }
}

@media (min-width: 1200px) {
  .col-xl {
    max-width: var(--xlWidthSGR);
  }
}
</style>
