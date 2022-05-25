<template>
  <div class="wrapper">
    <div class="inner">
      <h3 class="head-text">Місто Володимир</h3>
      <img class="city-img" src="../assets/about-city/04.jpg" alt="volodymyr">
      <p class="text">Володимир (донедавна - Володимир-Волинський) розташований у Волинській області України. Він є одним зі стародавніх міст Україні. Найдавніші згадки Володимира відносяться до IХ сторіччя. В ХІІ сторіччі місто було центром Волинського князівства, а з 1204 року - резиденцією Великого князя київського Романа Мстиславовича. В ХІІІ сторіччі місто стало центром спочатку Галицько-Волинського князівства, а згодом - одноіменного королівства. Саме тут засідав король Данило Галицький. В різні часи місто мало Магдебурзьке право, було центром єпископства римо-католицької церкви. Історія міста пов'язана з видатними іменами українського та польського народів - Адам Сангушко, Микола-Юрій Чорторийський, Павло Тетеря в різний час мешкали і працювали у Володимирі.</p>
      <div class="text">
        <p>Давня історія залишила в місті свій відбиток, який зберігся і до нашого часу. Так, в самому центрі міста розташовано Василівську ротонду - самобутню пам'ятку       архітектури, що сягає кінця ХІІ сторіччя та належить до зразків храмобудівної діяльності князя Романа Мстиславича.</p> 
        <img class="city-img" src="../assets/about-city/07.jpg" alt="rotonda">
      </div>
      <div class="text">
        <p>Однією з візитівок міста є Свято-Успенський кафедральний собор, побудований ще 1160 року, за часів волинського князя Мстислава II Ізяславича.</p>
        <img class="city-img" src="../assets/about-city/08.jpg" alt="cathedral">
      </div>
      <div class="text">
        <p>На майдані Героїв - центральному майдані міста, розташовується римо-католицький костел святих Йоакима і Анни, що відноситься до стилю бароко та середини XVIII сторіччя. Неподалік знаходиться ще одна красива будівля - кафедральний Собор Різдва Христового, що відноситься до Православної Церкви України. </p>
        <div>
          <img class="city-img" src="../assets/about-city/02.jpg" alt="catolic">
          <img class="city-img" src="../assets/about-city/03.jpg" alt="orthodox">
        </div>
      </div>
      <div class="text">
        <p>В самому центрі міста розкинувся затишний Слов'янський парк. Тут можна погуляти з дітьми, влаштувати пікнік з коханою людиною, або просто посидіти в тіні дерев із книжкою. В парку розташовано кілька скульптур давньоруських князів, письменників, є два джерела з прозорою чистою водою, мотузковий парк та невеличкий спортивний майданчик.</p>
        <img class="city-img" src="../assets/about-city/05.jpg" alt="park">
      </div>
      <div class="text">
        <p>Володимир має розвинену транспортну систему. Громадським транспортом можна дістатися до центру з будь-якої частини міста. Дивує якість доріг, до якої не дотягнуть деякі великі міста нашої країни. У Володимирі присутні популярні мережеві магазини і сервіси - Eva, Watsons, Аврора, АТБ, Rozetka, Нова Пошта, Delivery, SPAR, Сім-23,Dnipro-M, Алло, Фокстрот. В самому центрі розташовані продуктовий та речовий ринки та магазини будівельних матеріалів. Присутні готель, автостанція та залізничний вокзал.</p>
        <div class="brand-logos">
          <div class="row">
            <img class="round-brand-image col" src="../assets/trade/7-23_logo.png" alt="7-23">
            <img class="round-brand-image col" src="../assets/trade/spar_logo.png" alt="spar">
            <img class="round-brand-image col" src="../assets/trade/rozetka_logo.png" alt="rozetka">
            <img class="round-brand-image col" src="../assets/trade/novaposhta_logo.png" alt="nova_poshta">
          </div>
          <span class="row">
            <img class="brand-image col" src="../assets/trade/eva_logo.png" alt="eva">
            <img class="brand-image col" src="../assets/trade/allo_logo.png" alt="allo">
            <img class="brand-image col" src="../assets/trade/watsons_logo.png" alt="watsons">
            <img class="brand-image col" src="../assets/trade/delivery_logo.png" alt="delivery">
          </span>
          <span class="row">
            <img class="brand-image col" src="../assets/trade/atb_logo.png" alt="atb">
            <img class="brand-image col" src="../assets/trade/dnipro-m_logo.png" alt="dnipro-m">
            <img class="brand-image col" src="../assets/trade/foxtrot_logo.png" alt="foxtrot">
            <img class="brand-image col" src="../assets/trade/avrora_logo.svg" alt="avrora">
          </span>
        </div>
      </div>
      <div class="text">
        <p>Можна із впевненістю сказати, що для комфортного життя у Володимирі є все!</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "AboutCity",
  data: () => ({

  }),
}
</script>

<style scoped>
.wrapper {
  background: url(../assets/about-city/bg.jpg) 0 0 no-repeat;
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
  font-size: 18px;
  padding: 30px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.city-img {
  max-width: 500px;
  max-height: 300px;
  margin: 15px;
}

.brand-image {
  width: 100px;
  margin-top: 40px;
}

.brand-image:last-child {
  margin-top: 0;
}

.round-brand-image {
  padding: 30px;
  height: 333px;
}
</style>