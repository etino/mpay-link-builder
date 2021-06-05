<script>
import BTabs from '../components/BTabs.vue'
import BTab from '../components/BTab.vue'

import { ref } from 'vue'

export default {
  components: {
    BTabs,
    BTab,
  },

  setup() {
    const active = ref(1)

    return { active }
  },
}
</script>

<template>
  <div class="container pt-5 pb-5 text-center text-sm-left">
    <div class="row">
      <div class="col-12">
        <BTabs v-model="active">
          <BTab title="Tab 1">Tab 1</BTab>
          <BTab title="Tab 2">Tab 2</BTab>
          <BTab title="Tab 3">Tab 3</BTab>
          <BTab title="Tab 4">Tab 4</BTab>
        </BTabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
