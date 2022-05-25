<template>
  <div>
    <div class="footer bg-dark">
      <div class="wrapper mr-3">
        <div class="button-block">
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'StartPage'})">Головна</button>
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'Activities'})">Наша діяльність</button>
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'RoadToTheWest'})">Дорога на захід</button>
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'HelpUs'})">Допомогти</button>
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'About'})">Про нас</button>
          <button class="footer-btn text-white-50 bg-dark"
            @click="$router.push({name: 'Contacts'})">Контакти</button>
        </div>
        <div class="created" v-html="linkToMyProfile"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    linkToMyProfile: '<p>Created by <a href="https://github.com/OlegYerokhin/">Me</a></p>'
  })
}
</script>

<style scoped>
.wrapper {
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.footer-btn {
  margin: 25px;
  padding: 5px;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
}

.footer-btn:hover {
  text-decoration: underline;
}

.created {
  padding-bottom: 5px;
  /* justify-content: center; */
  text-align: center;
  /* align-self: center; */
  color: darkgrey;
  font-size: 14px;
}
</style>