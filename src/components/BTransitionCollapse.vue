<template>
  <transition
    name="slide-fade"
    mode="in-out"
    @beforeLeave="beforeLeave"
    @enter="enter"
    @afterEnter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script>
export default {
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
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity;
  transition-timing-function: ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  --transform: translateY(-20px);
  --opacity: 0;
}
</style>
