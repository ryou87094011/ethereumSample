<template>
  <header class="banner navbar navbar-default navbar-static-top no-padding-top">
    <img src="../../img/ethereum.png" class="rounded headerLogo" alt="logo" />
    <p class="headerTitle"><b>EthereumApp</b></p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  overflow: visible !important;
  z-index: 9998;
  background-color: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -o-box-shadow: none;
  border-bottom: 0;
  color: white;
}

.navbar {
  position: relative;
  min-height: 60px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.navbar-default {
  background-color: #2d96ff;
  border-color: #2d96ff;
}

.navbar-static-top {
  border-radius: 0;
}

.no-padding-top {
  padding-top: 0px;
}

.headerLogo {
  width: 30px;
  float: left;
  padding-top: 5px;
}

.headerTitle {
  font-size: 25px;
  padding-top: 10px;
  padding-left: 10px;
  float: left;
  color: ghostwhite;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
  display: block;
}
</style>
