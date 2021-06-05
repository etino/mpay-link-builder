<template>
  <div class="it-header-center-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-center-content-wrapper">
            <div class="it-brand-wrapper">
              <a href="#">
                <BSvgIcon class="icon" :name="logoIcon" />
                <!-- <svg class="icon">
                  <use
                    xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-code-circle"
                  ></use>
                </svg> -->
                <div class="it-brand-text">
                  <h2 class="no_toc">{{ title }}</h2>
                  <h3 class="no_toc d-none d-md-block">
                    {{ tagline }}
                  </h3>
                </div>
              </a>
            </div>
            <div class="it-right-zone">
              <div v-if="!noFollow" class="it-socials d-none d-md-flex">
                <span>Seguici su</span>
                <ul>
                  <li v-if="followFacebookUrl">
                    <a
                      :href="followFacebookUrl"
                      aria-label="Facebook"
                      target="_blank"
                    >
                      <BSvgIcon class="icon" name="it-facebook" />
                    </a>
                  </li>
                  <li v-if="followGithubUrl">
                    <a
                      :href="followGithubUrl"
                      aria-label="Github"
                      target="_blank"
                    >
                      <BSvgIcon class="icon" name="it-github" />
                    </a>
                  </li>
                  <li v-if="followTwitterUrl">
                    <a
                      :href="followTwitterUrl"
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <BSvgIcon class="icon" name="it-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div v-if="!noSearch" class="it-search-wrapper">
                <span class="d-none d-md-block">Cerca</span>
                <a class="search-link rounded-icon" aria-label="Cerca" href="#">
                  <BSvgIcon name="it-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<script>
import BSvgIcon from './BSvgIcon.vue'
export default {
  components: { BSvgIcon },
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum Lorem Ipsum',
    },
    tagline: {
      type: String,
      default: 'Inserire qui la tag line',
    },
    noFollow: {
      type: Boolean,
      default: false,
    },
    noSearch: {
      type: Boolean,
      default: false,
    },
    logoIcon: {
      type: String,
      default: 'it-code-circle',
    },
    followFacebookUrl: {
      type: String,
      default: null,
    },
    followTwitterUrl: {
      type: String,
      default: null,
    },
    followGithubUrl: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
