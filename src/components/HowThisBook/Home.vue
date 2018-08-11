<template>
  <div class="home mdc-typography">
    <mdc-layout-grid class="home__mdc-layout-grid"
      :style="{backgroundImage: `url(${require('../../assets/HowThisBook/book-863418_1920.jpg')})`}">

      <mdc-layout-cell tablet=1 desktop=2 class="home__mdc-layout-grid__phone-hidden"></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__mdc-layout-grid__search-component">
        <div class="home__mdc-layout-grid__search-component__container">
          <mdc-display>好書客</mdc-display>
          <mdc-headline>為好書而生的平台</mdc-headline>
          <div>
            <mdc-button raised>找好書</mdc-button>
            <mdc-button raised>找好作者</mdc-button>
          </div>
          <div>
            <mdc-textfield v-model="bookName" label="找一本好書" box leading-icon="search" />
          </div>
        </div>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2 class="home__mdc-layout-grid__phone-hidden"></mdc-layout-cell>

    </mdc-layout-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      bookName: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  &__mdc-layout-grid {
    height: 600px;
    // background-image: url('../../../static/HowThisBook/book-863418_1920.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    @media (max-width: 839px) {
      height: 100vh;
    }
    >.mdc-layout-grid__inner {
      height: 100%;
    }
    &__phone-hidden {
      @media (max-width: 479px) {
        display: none;
      }
    }
    &__search-component {
      display: flex;
      align-items: center;
      justify-content: center;
      &__container {
        text-align: center;
        color: white;
      }
    }
  }
}
</style>
