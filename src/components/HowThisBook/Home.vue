<template>
  <div class="home mdc-typography">
    <mdc-layout-grid class="home__search-container"
      :style="{backgroundImage: `url(${require('../../assets/HowThisBook/book-863418_1920.jpg')})`}">
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__search-container__search-component">
        <div class="home__search-container__search-component__container">
          <mdc-display>好書客</mdc-display>
          <mdc-headline>好書客，一個分享讀書心得的平台。</mdc-headline>
          <div>
            <mdc-button raised @click="currentInput = 'book'">找好書</mdc-button>
            <mdc-button raised @click="currentInput = 'author'">找作者</mdc-button>
          </div>
          <div>
            <mdc-textfield v-if="currentInput === 'book'" v-model="searchBookName" label="找一本好書" box
              leading-icon="search" @icon-action="gogo" />
            <mdc-textfield v-if="currentInput === 'author'" v-model="searchBookName" label="找一個作者" box
              leading-icon="search" @icon-action="gogo" />
          </div>
        </div>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>

    <mdc-layout-grid class="home__book-container">
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__book-container__messages-component">
        <mdc-headline>熱門書籍</mdc-headline>
        <div v-show="currentTab === 'experience'">
          <!-- v-for books -->
          <router-link :to="{ name: 'Book', params: { ISBN: book.ISBN }}" tag="div" v-for="book in books" :key="book.id">
            <mdc-card class="home__book-container__messages-component__card">
              <mdc-card-primary-action>
                <mdc-card-text>
                  <!-- 書籍內容 -->
                  <mdc-layout-grid>
                    <!-- tablet=8 desktop=12 -->
                    <mdc-layout-cell phone=4 tablet=3 desktop=3>
                      <img :src="book.imgSrc">
                    </mdc-layout-cell>
                    <mdc-layout-cell phone=4 tablet=5 desktop=6>
                      <mdc-body>{{ book.bookName }}</mdc-body>
                      <mdc-body>ISBN: {{ book.ISBN }}</mdc-body>
                    </mdc-layout-cell>
                    <mdc-layout-cell phone=4 tablet=8 desktop=3>
                      <mdc-icon icon="star"></mdc-icon>
                      <mdc-icon icon="star"></mdc-icon>
                      <mdc-icon icon="star"></mdc-icon>
                      <mdc-icon icon="star"></mdc-icon>
                      <mdc-icon icon="star_border"></mdc-icon>
                    </mdc-layout-cell>
                    <!-- end tablet=8 desktop=12 -->
                    <mdc-layout-cell phone=4 tablet=8 desktop=12>
                      <mdc-body>作者: {{ book.author }}</mdc-body>
                      <mdc-body>譯者: {{ book.translator }}</mdc-body>
                      <mdc-body>出版社: {{ book.publishing_house }}</mdc-body>
                      <mdc-body>出版日期: {{ book.publish_date }}</mdc-body>
                    </mdc-layout-cell>
                  </mdc-layout-grid>
                  <!-- end 書籍內容 -->
                </mdc-card-text>
                <mdc-card-actions>
                  <mdc-card-action-icons class="home__book-container__messages-component__card__action-icons">
                    <mdc-card-action-icon icon="thumb_up" />
                  </mdc-card-action-icons>
                  <mdc-card-action-icons class="home__book-container__messages-component__card__action-icons">
                    <mdc-card-action-icon icon="thumb_down" />
                  </mdc-card-action-icons>
                  <mdc-card-action-icons class="home__book-container__messages-component__card__action-icons">
                    <mdc-card-action-icon icon="comment" />
                  </mdc-card-action-icons>
                </mdc-card-actions>
              </mdc-card-primary-action>
            </mdc-card>
          </router-link>
          <!-- </div> -->
          <!-- end v-for books -->
        </div>

        <!-- 以下註解區域為 tabs 功能 -->
        <!-- <mdc-tab-bar @change="hotTabsOnChange" class="home__book-container__messages-component__tabs">
          <mdc-tab>心得</mdc-tab>
          <mdc-tab>問答</mdc-tab>
          <mdc-tab>閒聊</mdc-tab>
        </mdc-tab-bar>

        <div v-show="currentTab === 'experience'">
          <mdc-card class="home__book-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here one" subtitle="subtitle here">
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
          <mdc-card class="home__book-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here two" subtitle="subtitle here">
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
          <mdc-card class="home__book-container__messages-component__card">
            <mdc-card-primary-action>
              <mdc-card-header title="Title goes here three" subtitle="subtitle here">
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
        </div> -->
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>

    <!-- footer -->
    <mdc-layout-grid class="home__footer-container">
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8 class="home__footer-container__footer-component">
        <div class="home__footer-container__footer-component__container">
          <div>
            <mdc-button raised @click="currentInput = 'book'">找好書</mdc-button>
            <mdc-button raised @click="currentInput = 'author'">找作者</mdc-button>
          </div>
          <div>
            <mdc-textfield v-if="currentInput === 'book'" v-model="searchBookName" label="找一本好書" box leading-icon="search" />
            <mdc-textfield v-if="currentInput === 'author'" v-model="searchBookName" label="找一個作者" box leading-icon="search" />
          </div>
          <mdc-body>
            <mdc-button raised>關於我們</mdc-button>
            <mdc-button raised>聯絡我們</mdc-button>
            <mdc-button raised>FAQ</mdc-button>
            <mdc-button raised>服務條款&隱私權政策</mdc-button>
          </mdc-body>
          <mdc-body>© 2018 好書客 All Rights Reserved.</mdc-body>
        </div>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      searchBookName: '', // 搜尋欄位值
      currentInput: 'book', // 目前搜尋的 Input
      currentTab: 'experience', // 目前分頁 (尚無使用)
      comments: [ // comment 之後會放 vuex 裡吧
        {
          id: 1,
          book_id: 1,
          ISBN: '',
          comment: '',
          create_at: '建立時間',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      books: 'getBooks',
    }),
  },
  methods: {
    hotTabsOnChange(idx) {
      // tabs 切換用
      const tabsIndexArray = [
        'experience',
        'Q&A',
        'gossip',
      ];
      this.currentTab = tabsIndexArray[idx];
    },
    gogo() {
      debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
.phone-hidden {
  @media (max-width: 479px) {
    display: none;
  }
}

.home {
  // search-container
  &__search-container {
    height: 600px;
    // 圖片 webpack build 載入機制不夠明白
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
  // book
  &__book-container {
    background-color: #1c1a0914;
    &__messages-component {
      >h2 {
        text-align: center;
      }
      &__tabs {
        margin-bottom: 1rem;
      }
      &__card {
        margin-top: 2rem;
        margin-bottom: 2rem;
        transition: box-shadow 0.5s;
        &:hover {
          -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
        }
        &__action-icons {
          justify-content: center;
        }
      }
    }
  }
  // footer-container
  &__footer-container {
    color: white;
    background-color: var(--mdc-theme-primary, #212121);
    &__footer-component {
      display: flex;
      align-items: center;
      justify-content: center;
      &__container {
        text-align: center;
        color: white;
        button {
          color: white !important;
        }
      }
    }
  }
}
</style>
