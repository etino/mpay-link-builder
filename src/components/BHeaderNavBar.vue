<template>
  <div class="it-header-navbar-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!--start nav-->
          <nav class="navbar navbar-expand-lg has-megamenu">
            <button
              class="custom-navbar-toggler"
              :class="{ 'focus-mouse': toggle }"
              type="button"
              aria-controls="nav0"
              :aria-expanded="toggle"
              aria-label="Toggle navigation"
              data-target="#nav0"
              @click="toggleMenu()"
            >
              <BSvgIcon name="it-burger" />
            </button>
            <div
              class="navbar-collapsable"
              :class="{ expanded: toggle }"
              id="nav0"
              :style="{ display: toggle ? 'block' : 'none' }"
            >
              <div
                class="overlay"
                :style="{ display: toggle ? 'block' : 'none' }"
                @click="toggleMenu()"
              ></div>
              <div class="close-div sr-only">
                <button class="btn close-menu" type="button">
                  <span class="it-close"></span>close
                </button>
              </div>
              <div class="menu-wrapper">
                <ul class="navbar-nav">
                  <router-link
                    v-for="(link, index) in links"
                    :to="link"
                    :key="index"
                    custom
                    v-slot="{ href, navigate, isActive }"
                  >
                    <li
                      :class="{
                        'nav-item-active': isActive,
                        'nav-item': !isActive,
                      }"
                    >
                      <a
                        class="nav-link"
                        :class="{ active: isActive }"
                        :href="href"
                        @click="navigate"
                      >
                        {{ $router.resolve(link).name }}
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BSvgIcon from './BSvgIcon.vue'
import { ref, watch, computed } from 'vue'
import { mainMenuRoutes } from '../router'
export default {
  setup() {
    const toggle = ref(false)

    function toggleMenu() {
      toggle.value = !toggle.value
    }
    const links = computed(() => mainMenuRoutes)

    return {
      links,
      toggle,
      toggleMenu,
    }
  },
  components: {
    BSvgIcon,
  },
  watch: {
    $route() {
      if (this.toggle) {
        this.toggleMenu()
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
