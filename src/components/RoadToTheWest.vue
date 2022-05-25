<template>
  <div>
    <div class="wrapper">
      <div class="inner">
        <h3 class="head-text">Евакуація на територію Західної України</h3>
        <p class="text">Ми допомагаємо мешканцям міст Східної України безпечно евакуюватися на захід.</p>
        <p class="text">На даний момент, ми пропонуємо поселення в місті Володимир Волинської області. Розміщення відбувається в гуртожитку ВПУ. Проживання безкоштовне, є гаряча та холодна вода, кухні, душі, пральня. Є кімнати на 2, 3, 4 ліжка, можливе поселення родинами. Дозволено проживання з домашніми тваринами (за умови дотримання внутрішніх правил гуртожитку).</p>
        <button class="city-btn" @click="$router.push({name: 'AboutCity'})">Дізнатися про Володимир</button>
        <p class="text">Також, надається допомога при реєстрації осіб як переселенців, отриманні статусу внутрішньо-переміщеної особи, в подальшому пошуці роботи.</p>
        
        <p class="text"><span class="alert">Увага!</span><br> 
        Ми не пропонуємо жодних послуг з пришвидшеного отримання статусу ВПО, ані на платній, ані на безоплатній основі. Допомога в отримані статусу означає отримання форм для внесення даних в систему, а також допомога у їхньому заповненні. Подальші дії особи, що бажає отримати статус ВПО, здійснюються на загальних засадах і у загальній черзі.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadToTheWest'
}
</script>

<style scoped>
.wrapper {
  background: url(../assets/trainstation.jpg) 0 0 no-repeat;
  background-size: cover;
  background-position-y: -150px;
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
  font-size: 18px;
  padding: 30px;
  line-height: 1.8;
}

.city-btn {
  display: inline;
  margin-bottom: 15px;
  background: #00000069;
  border: 3px solid rgb(0, 141, 212);
  color: #fff;
  border-radius: 20px;
  padding: 5px 15px;
  width: 245px;
}

.city-btn:hover {
  background: #cbcbcb4d;
}

.alert {
  font-size: 30px;
  font-weight: 700;
  text-decoration: red underline;
}
</style>