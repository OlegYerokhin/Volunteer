<template>
  <div class="wrapper">
    <div class="inner">
      <h3 class="head-text">Як з нами зв'язатися?</h3>
      <p class="text"> Друзі, ми знаходимося на зв'язку майже цілодобово і готові допомогти Вам в будь-який момент. Якщо Ви маєте потребу зв'язатися із нами, Ви можете скористатися наступними сервісами:</p>
      <div class="contact-info text">
        <div class="contact">
          <p>Зв'язатися з Олегом:</p>
          <div class="link-block email">
            <a href="mailto:olegyerokhin91@gmail.com" class="link-image"></a>
          </div>
          <div class="link-block facebook">
            <a href="https://www.facebook.com/oleg.yerokhin" class="link-image"></a>
          </div>
          <div class="link-block instagram">
            <a href="https://www.instagram.com/oleg.yerokhin/" class="link-image"></a>
          </div>
          <div class="link-block telegram">
            <a href="https://t.me/olegyerokhin" class="link-image"></a>
          </div>
        </div>
      </div>
          <!-- <a href="mailto:olegyerokhin91@gmail.com" class="link"><img class="icon" src="../assets/email.png" alt="email"></a>
          <a href="https://www.facebook.com/oleg.yerokhin"><img class="icon" src="../assets/facebook.png" alt="facebook"></a>
          <a href="https://www.instagram.com/oleg.yerokhin/"><img class="icon" src="../assets/instagram.png" alt="instagram"></a>
          <a href="https://t.me/olegyerokhin"><img class="icon" src="../assets/telegram.png" alt="telegram"></a> -->
        <!-- </div> -->
      <div class="contact-info text">
        <div class="contact">
          <p>Зв'язатися з Оленою:</p>
          <div class="link-block email">
            <a href="mailto:072016ringoo@gmail.com" class="link-image"></a>
          </div>
          <div class="link-block facebook">
            <a href="https://www.facebook.com/id=100010814506974" class="link-image"></a>
          </div>
          <div class="link-block instagram">
            <a href="https://www.instagram.com/olena_oliakh/" class="link-image"></a>
          </div>
          <div class="link-block telegram">
            <a href="https://t.me/Olena_oljah" class="link-image"></a>
          </div>
          


          <!-- <div class="link-block">
            <a href="mailto:072016ringoo@gmail.com" class="link-image"></a>
          </div> -->
          <!-- <div class="link-block"> -->

          <!-- </div> -->
          <!-- <a href="https://www.facebook.com/id=100010814506974"><img class="icon" src="../assets/facebook.png" alt="facebook"></a>
          <a href="https://www.instagram.com/olena_oliakh/"><img class="icon" src="../assets/instagram.png" alt="instagram"></a>
          <a href="https://t.me/Olena_oljah"><img class="icon" src="../assets/telegram.png" alt="telegram"></a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.wrapper {
  background: url(../assets/contact.jpg) 0 0 no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.inner {
  padding: 45px;
}

.head-text {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  background: rgba(0, 0, 0, 0.647);
  margin: 30px;
  padding: 30px;
}

.text {
  color: #fff;
  background: rgba(0, 0, 0, 0.647);
  line-height: 1.8;
  padding: 30px;
}

.contact-info {
  display: inline-flex;
  margin: 55px;
}

.contact {
  display: grid;
  margin: 10px;
  padding: 0 80px;
}

.icon {
  width: 50px;
  margin: 10px;
  /* border: 1px solid #fff; */
}

.link-block {
  background-size: 50px 50px;
  background-position: top right;
  width: 50px;
  height: 50px;
  left: 35px;
  position: relative;
}

.link-image {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
}

.email {
  background-image: url(../assets/email.png);
  margin: 15px;
}

.facebook {
  background-image: url(../assets/facebook.png);
  margin: 15px;
}

.instagram {
  background-image: url(../assets/instagram.png);
  margin: 15px;
}

.telegram {
  background-image: url(../assets/telegram.png);
  margin: 15px;
}
</style>