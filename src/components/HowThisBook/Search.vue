<template>
  <div class="search mdc-typography">
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
          <!-- end v-for books -->
        </div>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Search',
  data() {
    return {
      currentInput: 'book', // 目前搜尋的 Input
      currentTab: 'experience', // 目前分頁 (尚無使用)
    };
  },
  computed: {
    ...mapGetters({
      books: 'getBooks',
    }),
  },
  methods: {

  },
};
</script>

<style lang="scss">
.search {
  &__comment-container {
    margin-top: 2rem;
    margin-bottom: 2rem;
    &__card {
      &:hover {
        -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
        box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
      }
      &__people {
        display: flex;
        >img {
          width: 80px;
          height: 80px;
        }
        >img + div {
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
