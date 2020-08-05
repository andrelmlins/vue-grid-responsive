<template>
  <div :class="classGeneral">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Hidden',
  data() {
    return {
      classGeneral: `${this.createClassSize()}`
    };
  },
  props: {
    xs: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean
  },
  methods: {
    createClassSize() {
      let newClass = '';

      newClass += this.xs ? 'hiddenVGR-xs ' : '';
      newClass += this.sm ? 'hiddenVGR-sm ' : '';
      newClass += this.md ? 'hiddenVGR-md ' : '';
      newClass += this.lg ? 'hiddenVGR-lg ' : '';
      newClass += this.xl ? 'hiddenVGR-xl ' : '';

      return newClass;
    }
  }
};
</script>

<style scoped>
@media (max-width: 575px) {
  .hiddenVGR-xs {
    display: none;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .hiddenVGR-sm {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .hiddenVGR-md {
    display: none;
  }
}

@media (min-width: 992px) and (max-width: 1199px) {
  .hiddenVGR-lg {
    display: none;
  }
}

@media (min-width: 1200px) {
  .hiddenVGR-xl {
    display: none;
  }
}
</style>
