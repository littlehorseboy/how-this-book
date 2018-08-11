<template>
  <div class="home mdc-typography">
    <mdc-layout-grid class="home__search-container"
      :style="{backgroundImage: `url(${require('../../assets/HowThisBook/book-863418_1920.jpg')})`}">
      <!--佔格子讓中間能置中用-->
      <mdc-layout-cell tablet=1 desktop=2 class="home__search-container__phone-hidden"></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__search-container__search-component">
        <div class="home__search-container__search-component__container">
          <mdc-display>好書客</mdc-display>
          <mdc-headline>為好書而生的平台</mdc-headline>
          <div>
            <mdc-button raised>找好書</mdc-button>
            <mdc-button raised>找好作者</mdc-button>
          </div>
          <div>
            <mdc-textfield v-model="searchBookName" label="找一本好書" box leading-icon="search" />
          </div>
        </div>
      </mdc-layout-cell>

      <!--佔格子讓中間能置中用-->
      <mdc-layout-cell tablet=1 desktop=2 class="home__mdc-layout-grid__phone-hidden"></mdc-layout-cell>
    </mdc-layout-grid>

    <mdc-layout-grid class="home__hot-container">
      <!--佔格子讓中間能置中用-->
      <mdc-layout-cell tablet=1 desktop=2 class="home__hot-container__phone-hidden"></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__hot-container__messages-component">
        <mdc-headline>熱門評論</mdc-headline>
        <mdc-tab-bar @change="hotTabsOnChange" class="home__hot-container__messages-component__tabs">
          <mdc-tab>心得</mdc-tab>
          <mdc-tab>問答</mdc-tab>
          <mdc-tab>閒聊</mdc-tab>
        </mdc-tab-bar>
        <div v-show="currentTab === 'experience'">
          <mdc-card class="home__hot-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here one" subtitle="subtitle here" >
              </mdc-card-header>
            </mdc-card-primary-action>
            <mdc-card-actions>
              <mdc-card-action-buttons>
                <mdc-card-action-button>ACTION</mdc-card-action-button>
              </mdc-card-action-buttons>
              <mdc-card-action-icons>
                <mdc-card-action-icon icon="star" />
              </mdc-card-action-icons>
            </mdc-card-actions>
          </mdc-card>
        </div>

        <div v-show="currentTab === 'Q&A'">
          <mdc-card class="home__hot-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here two" subtitle="subtitle here" >
              </mdc-card-header>
            </mdc-card-primary-action>
            <mdc-card-actions>
              <mdc-card-action-buttons>
                <mdc-card-action-button>ACTION</mdc-card-action-button>
              </mdc-card-action-buttons>
              <mdc-card-action-icons>
                <mdc-card-action-icon icon="star" />
              </mdc-card-action-icons>
            </mdc-card-actions>
          </mdc-card>
        </div>

        <div v-show="currentTab === 'gossip'">
          <mdc-card class="home__hot-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here three" subtitle="subtitle here" >
              </mdc-card-header>
            </mdc-card-primary-action>
            <mdc-card-actions>
              <mdc-card-action-buttons>
                <mdc-card-action-button>ACTION</mdc-card-action-button>
              </mdc-card-action-buttons>
              <mdc-card-action-icons>
                <mdc-card-action-icon icon="star" />
              </mdc-card-action-icons>
            </mdc-card-actions>
          </mdc-card>
        </div>
      </mdc-layout-cell>

      <!--佔格子讓中間能置中用-->
      <mdc-layout-cell tablet=1 desktop=2 class="home__hot-container__phone-hidden"></mdc-layout-cell>
    </mdc-layout-grid>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      searchBookName: '',
      currentTab: 'experience',
      books: [
        {
          id: 1,
          bookName: '書',
          author: '作者',
          desc: '描述, 簡介',
          publish_date: '出版日期',
          create_at: '建立時間',
        },
      ],
      messages: [
        {
          id: 1,
          book_id: 1,
          message: '',
          create_at: '建立時間',
        },
      ],
    };
  },
  methods: {
    hotTabsOnChange(idx) {
      const tabsIndexArray = [
        'experience',
        'Q&A',
        'gossip',
      ];

      this.currentTab = tabsIndexArray[idx];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  /* search-container */
  &__search-container {
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
  /* 熱門 */
  &__hot-container {
    &__phone-hidden {
      @media (max-width: 479px) {
        display: none;
      }
    }
    &__messages-component {
      >h2 {
        text-align: center;
      }
      &__tabs {
        margin-bottom: 1rem;
      }
      &__card {
        transition: box-shadow 0.5s;
        &:hover {
          -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
        }
      }
    }
  }
}
</style>
