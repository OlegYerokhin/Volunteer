<template>
  <div class="wrapper">
    <div class="inner">
      <h3 class="head-text">Друзі!</h3>
      <p class="text">Ми працюємо 24/7 у спробах допомогти кожній людині, якій можемо. Нажаль, на даний момент наші власні заощадження закінчилися, тому ми змушені звернутися по допомогу до кожного з вас! Кожна гривня, яку Ви перекажете на наш рахунок, буде використана для допомоги тим, хто на даний момент потрапив у скруту і не може забезпечити власні потреби самотужки. Ми допомагаємо людям їжею та ліками, допомагаємо іншим волонтерам у закупівлях необхідних речей для військових. Також ми допомагаємо людям евакуюватися з міст Східної України, але все це потребує витрат. Ми звітуємо за кожну отриману та витрачену копійку, надаємо звіти по закупках та відправках кожного разу, коли витрачаються гроші, надіслані нам небайдужими українцями та мешканцями інших країн.</p>
      <p class="text">Кожен з вас може долучитися до нашої діяльності двома способами: <br>
        - передати нам їжу, ліки, товари для побуту та дітей з рук в руки (міста Володимир та Львів); <br>
        - надіслати кошти за наступними реквізитами:
      </p>
      <div class="requisites">
        <div class="qr">
          <button class="qr-button" v-if="!demonstrateQr" @click="showQr()">Показати QR-код</button>
          <button class="qr-button" v-if="demonstrateQr" @click="showQr()">Приховати QR-код</button>
          
        </div>
        <img v-if="demonstrateQr" src="../assets/privat-qr.jpg" alt="QR" />
        <p class="text">
          Картка: <br>
          ПриватБанк <br>
          5168 7554 7477 8129 <br>
          Єрохін Олег Олександрович
        </p>
        <p class="text">
          Переказ з рахунку в іншому банку: <br>
          Установа банку <br>
          ПриватБанк <br>

          МФО банку <br>
          305299 <br>

          Рахунок отримувача <br>
          262036400932952905 <br>

          Код РНОКПП отримувача <br>
          3339316550 <br>

          IBAN <br>
          UA273052990262036400932952905 <br>

          Поповнення рахунку ЄРОХІН ОЛЕГ ОЛЕКСАНДРОВИЧ
        </p>
      </div>


      <p class="text">Після здійснення переказу Ви можете зв'язатися з нами для подальшого інформування щодо використання довірених Вами фінансових ресурсів.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpUs',
  data: () => ({
    demonstrateQr: false,
  }),
  methods: {
    showQr() {
      this.demonstrateQr = !this.demonstrateQr
    }
  }
}
</script>

<style scoped>
.wrapper {
  background: url(../assets/humanitarian.webp) 0 0 no-repeat;
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

.qr-button {
  display: inline;
  margin-bottom: 15px;
  background: #00000069;
  border: 3px solid rgb(0, 141, 212);
  color: #fff;
  border-radius: 20px;
  padding: 5px 15px;
  width: 185px;
}

.qr-button:hover {
  background: #cbcbcb4d;
}
</style>