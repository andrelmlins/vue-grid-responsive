<template>
  <div :style="styleGeneral" :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    xsOffset: {
      required: false,
      type: Number
    },
    smOffset: {
      required: false,
      type: Number
    },
    mdOffset: {
      required: false,
      type: Number
    },
    lgOffset: {
      required: false,
      type: Number
    },
    xlOffset: {
      required: false,
      type: Number
    },
    order: {
      required: false,
      type: Number
    }
  },
  data() {
    let styleGeneral = this.createStyleSize();

    if (this.xs || this.sm || this.md || this.lg || this.xl) {
      styleGeneral += `--colFlexVGR:0;`;
    } else {
      styleGeneral = `--colFlexVGR:1;`;
    }

    if (this.order || this.order === 0) {
      styleGeneral += `--orderSGR:${this.order};`;
    }

    return {
      classGeneral: `${this.createClassSize()} ${this.$props.class || ''}`,
      styleGeneral: `${styleGeneral};${this.$props.style || ''}`
    };
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
      let newClass = 'colVGR colVGR-xs grid-column ';

      newClass += this.sm ? 'colVGR-sm ' : '';
      newClass += this.md ? 'colVGR-md ' : '';
      newClass += this.lg ? 'colVGR-lg ' : '';
      newClass += this.xl ? 'colVGR-xl ' : '';

      newClass += this.xsOffset ? 'colVGR-Offset-xs ' : '';
      newClass += this.smOffset ? 'colVGR-Offset-sm ' : '';
      newClass += this.mdOffset ? 'colVGR-Offset-md ' : '';
      newClass += this.lgOffset ? 'colVGR-Offset-lg ' : '';
      newClass += this.xlOffset ? 'colVGR-Offset-xl ' : '';

      return newClass;
    },
    createStyleSize() {
      let newStyle = '';

      // Scale
      newStyle += this.xs
        ? `--xsWidthVGR:${this.getValue(this.xs)}; `
        : `--xsWidthVGR:100%; `;
      newStyle += this.sm ? `--smWidthVGR:${this.getValue(this.sm)}; ` : '';
      newStyle += this.md ? `--mdWidthVGR:${this.getValue(this.md)}; ` : '';
      newStyle += this.lg ? `--lgWidthVGR:${this.getValue(this.lg)}; ` : '';
      newStyle += this.xl ? `--xlWidthVGR:${this.getValue(this.xl)}; ` : '';

      // Offset
      newStyle += this.xsOffset
        ? `--xsOffset:${this.getValue(this.xsOffset)}; `
        : ``;
      newStyle += this.smOffset
        ? `--smOffset:${this.getValue(this.smOffset)}; `
        : '';
      newStyle += this.mdOffset
        ? `--mdOffset:${this.getValue(this.mdOffset)}; `
        : '';
      newStyle += this.lgOffset
        ? `--lgOffset:${this.getValue(this.lgOffset)}; `
        : '';
      newStyle += this.xlOffset
        ? `--xlOffset:${this.getValue(this.xlOffset)}; `
        : '';

      return `${newStyle};${this.$props.style || ''}`;
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
  order: var(--orderSGR);
}
.colVGR-xs {
  flex-basis: var(--xsWidthVGR);
  max-width: var(--xsWidthVGR);
}

.colVGR-Offset-xs {
  margin-left: var(--xsOffset);
}

@media (min-width: 576px) {
  .colVGR-sm {
    flex-basis: var(--smWidthVGR);
    max-width: var(--smWidthVGR);
  }
  .colVGR-Offset-sm {
    margin-left: var(--smOffset);
  }
}

@media (min-width: 768px) {
  .colVGR-md {
    flex-basis: var(--mdWidthVGR);
    max-width: var(--mdWidthVGR);
  }
  .colVGR-Offset-md {
    margin-left: var(--mdOffset);
  }
}

@media (min-width: 992px) {
  .colVGR-lg {
    flex-basis: var(--lgWidthVGR);
    max-width: var(--lgWidthVGR);
  }
  .colVGR-Offset-lg {
    margin-left: var(--lgOffset);
  }
}

@media (min-width: 1200px) {
  .colVGR-xl {
    flex-basis: var(--xlWidthVGR);
    max-width: var(--xlWidthVGR);
  }
  .colVGR-Offset-xl {
    margin-left: var(--xlOffset);
  }
}
</style>
