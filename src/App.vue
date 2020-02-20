<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import 'src/compiled-icons'

export default {
  name: 'App'
}

function getDatas(s) {
alert(s);
}
</script>

<style lang="sass">
  @import 'src/css/main.scss';
</style>
