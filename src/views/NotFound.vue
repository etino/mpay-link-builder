<template>
  <div>
    <div class="container pb-5 text-center text-sm-left">
      <div class="row">
        <div class="offset-lg-1 col-lg-6 col-md-8 mt-5 mb-0 mb-lg-4">
          <div class="text-center text-sm-left pb-4">
            <h1 class="h1">Not Found</h1>
            <p class="lead">Pagina non trovata</p>
            <p>
              <router-link :to="{ name: 'Home' }">Torna alla Home</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
