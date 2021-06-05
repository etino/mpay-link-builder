<template>
  <div class="it-header-slim-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="it-header-slim-wrapper-content">
            <a v-if="false" class="d-none d-lg-block navbar-brand" href="#"
              >Ente appartenenza/Owner</a
            >
            <div v-if="false" class="nav-mobile">
              <nav>
                <a
                  class="it-opener d-lg-none"
                  data-toggle="collapse"
                  href="#menu1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="menu1"
                >
                  <span>Ente appartenenza/Owner</span>
                  <BSvgIcon class="icon" name="it-expand" />
                </a>
                <div class="link-list-wrapper collapse" id="menu1">
                  <ul class="link-list">
                    <li><a class="list-item" href="#">Link 1</a></li>
                    <li>
                      <a class="list-item active" href="#">Link 2 Active</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div v-if="false" class="it-header-slim-right-zone">
              <div class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span>Ita</span>
                  <BSvgIcon class="icon d-none d-lg-block" name="it-expand" />
                </a>
                <div class="dropdown-menu">
                  <div class="row">
                    <div class="col-12">
                      <div class="link-list-wrapper">
                        <ul class="link-list">
                          <li>
                            <a class="list-item" href="#"><span>ITA</span></a>
                          </li>
                          <li>
                            <a class="list-item" href="#"><span>ENG</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="it-access-top-wrapper">
                <a class="btn btn-primary btn-sm" href="#">Accedi</a>
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
  props: {},
}
</script>

<style lang="scss" scoped></style>
