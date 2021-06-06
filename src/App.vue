<template>
  <header class="it-header-wrapper">
    <BHeader />
    <div class="it-nav-wrapper">
      <BHeaderCentral
        title="MPay Link Builder"
        tagline="Utility di creazione URL per link Mpay"
        followGithubUrl="https://github.com/etino/mpay-link-builder"
        no-search
      />
      <BHeaderNavBar />
    </div>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </main>
  <BFooter />
</template>

<script setup>
import BHeader from './components/BHeader.vue'
import BHeaderCentral from './components/BHeaderCentral.vue'
import BHeaderNavBar from './components/BHeaderNavBar.vue'
import BFooter from './components/BFooter.vue'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<script>
import { defineComponent, computed } from 'vue'
import BSvgIcon from './components/BSvgIcon.vue'

export default defineComponent({
  name: 'App',
  components: { BSvgIcon },
  data() {
    return {
      prevHeight: 0,
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height
    },
    enter(element) {
      const { height } = getComputedStyle(element)

      element.style.height = this.prevHeight

      setTimeout(() => {
        element.style.height = height
      })
    },
    afterEnter(element) {
      element.style.height = 'auto'
    },
  },
})
</script>

<style></style>
