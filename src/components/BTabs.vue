<script>
import { provide, computed, ref } from 'vue'
// Reference: https://forum.vuejs.org/t/how-to-access-children-in-vue-3-for-creating-a-tabs-component/108955
export default {
  name: 'BTabs',
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const active = computed(() => props.modelValue)
    const tabs = ref([])

    function selectTab(tab) {
      emit('update:modelValue', tab)
    }

    provide('tabsState', {
      active,
      tabs,
    })

    return {
      tabs,
      active,
      selectTab,
    }
  },
}
</script>

<template>
  <ul class="nav nav-tabs auto">
    <li
      class="nav-item"
      v-for="(tab, i) of tabs"
      :key="i"
      @click="selectTab(i)"
    >
      <span
        style="cursor: pointer"
        class="nav-link"
        :class="{ active: active === i }"
        >{{ tab.props.title }}</span
      >
    </li>
  </ul>
  <div class="tab-content">
    <slot />
  </div>
</template>

<style lang="scss" scoped></style>
