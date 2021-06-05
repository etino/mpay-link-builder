<template>
  <div class="form-group">
    <label v-if="label" :for="id" class="active">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :aria-describedby="`${id}Help`"
      class="form-control"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :disabled="disabled"
    />
    <small v-if="help" :id="`${id}Help`" class="form-text text-muted">{{
      help
    }}</small>
  </div>
</template>

<script>
export default {
  setup(props) {
    const { label } = props
    let id = 'input-'
    if (label) {
      id = label.split(' ').join('-').toLowerCase()
    }
    return { id }
  },
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    help: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style lang="scss" scoped></style>
