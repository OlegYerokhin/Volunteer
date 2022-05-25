<template>
  <div>
    <div class="header bg-dark">
      <div class="wrapper d-flex mr-3">
        <div class="header-logo">
          <img class="logo" src="../assets/support.png" alt="Logo">
        </div>
        <div class="button-block">
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'StartPage'})">Головна</button>
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'Activities'})">Наша діяльність</button>
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'RoadToTheWest'})">Дорога на захід</button>
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'HelpUs'})">Допомогти</button>
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'About'})">Про нас</button>
          <button class="header-btn text-light bg-dark"
            @click="$router.push({name: 'Contacts'})">Контакти</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<style scoped>
.wrapper {
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 75px;
  height: 75px;
  padding: 10px;
}

.header-btn {
  margin: 10px;
  padding: 5px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
}

.header-btn:hover {
  text-decoration: underline;
}
</style>