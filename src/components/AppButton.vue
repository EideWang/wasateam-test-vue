<template>
  <button
    type="button"
    class="btn primary"
    :class="{
      outline: false || outline,
      pill: false || pill,
      active: false || active,
      disable: false || disable,
    }"
    @click="$emit('click')"
  >
    <slot>Click</slot>
  </button>
</template>
<script>
export default {
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.primary {
  background-color: var(--btn-color-secondary);
  color: var(--text-color-dark);
  border: 1px solid var(--btn-color-secondary);
  border-radius: 0.375rem;
  line-height: 1.5;

  &:focus,
  &.active,
  &:hover {
    background-color: var(--btn-color-secondary-dark);
    border: 1px solid var(--btn-color-secondary-dark);
    outline: none;
    box-shadow: none;
  }

  &.outline {
    background-color: transparent;
    color: var(--text-color-dark);
    border-color: var(--btn-color-primary);
    &:focus,
    &.active,
    &:hover {
      color: var(--btn-color-primary-dark);
      border: 1px solid var(--btn-color-primary-dark);
      outline: none;
      box-shadow: none;
    }
  }
  &.pill {
    border-radius: 10rem;
  }
  &.disable,
  &.disable:hover {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: var(--btn-color-secondary);
    border: 1px solid var(--btn-color-secondary);
    color: var(--text-color-dark);
  }
  &.danger {
    background-color: var(--btn-color-danger);
    border-color: var(--btn-color-danger);
    &:focus,
    &.active,
    &:hover {
      background-color: var(--btn-color-danger-dark);
      border: 1px solid var(--btn-color-danger-dark);
      outline: none;
      box-shadow: none;
    }
  }
}
</style>
