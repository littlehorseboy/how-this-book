<template>
  <div class="book mdc-typography">
    <mdc-layout-grid>
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8>
        <mdc-card class="mdc-elevation--z16">
          <mdc-card-text>
            <!-- 書籍內容 -->
            <mdc-layout-grid>
              <!-- tablet=8 desktop=12 -->
              <mdc-layout-cell phone=4 tablet=3 desktop=3>
                <img :src="book.imgSrc">
              </mdc-layout-cell>
              <mdc-layout-cell phone=4 tablet=5 desktop=9>
                <mdc-display>{{ book.bookName }}</mdc-display>
                <mdc-body>ISBN: {{ book.ISBN }}</mdc-body>
                <mdc-body>
                  <mdc-icon icon="star"></mdc-icon>
                  <mdc-icon icon="star"></mdc-icon>
                  <mdc-icon icon="star"></mdc-icon>
                  <mdc-icon icon="star"></mdc-icon>
                  <mdc-icon icon="star_border">
                </mdc-icon></mdc-body>
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
            <mdc-card-action-icons>
              <mdc-button raised @click="create_comment_div = true;">
                <i class="material-icons mdc-button__icon">add</i>
                評論
              </mdc-button>
            </mdc-card-action-icons>
          </mdc-card-actions>
        </mdc-card>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>

    <!-- 新增評論 -->
    <mdc-layout-grid v-if="create_comment_div">
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8>
        <mdc-card>
          <mdc-button raised @click="create_comment_div = false;">
            <i class="material-icons mdc-button__icon">add</i>
            收起
          </mdc-button>
          <mdc-card-text>
            <!-- 新增表單 -->
            <mdc-layout-grid>
              <mdc-layout-cell phone=4 tablet=8 desktop=12>
                <mdc-body>你要發表的是：</mdc-body>
                <mdc-body>
                  <mdc-button raised>讀書心得</mdc-button>
                  <mdc-button raised>問答</mdc-button>
                  <mdc-button raised>閒聊</mdc-button>
                </mdc-body>

                <mdc-body>優點： 目前還可以輸入 5000 字</mdc-body>
                <mdc-body>
                  <mdc-textfield v-model="advantage" fullwidth multiline rows="2" label="想想這本書最令你印象深刻的地方" />
                </mdc-body>

                <mdc-body>缺點： 目前還可以輸入 5000 字</mdc-body>
                <mdc-body>
                  <mdc-textfield v-model="advantage" fullwidth multiline rows="2" label="想想這本書讓你不知所云的地方" />
                </mdc-body>

                <mdc-body>整體而言，你覺得這本書：</mdc-body>
                <mdc-body>
                  <mdc-button raised>好</mdc-button>
                  <mdc-button raised>普</mdc-button>
                  <mdc-button raised>差</mdc-button>
                </mdc-body>

                <mdc-body>
                  <mdc-switch v-model="checked">{{Label}}</mdc-switch>
                </mdc-body>
                <mdc-body>
                  <mdc-button raised>送出</mdc-button>
                </mdc-body>
              </mdc-layout-cell>
            </mdc-layout-grid>
            <!-- end 新增表單 -->
          </mdc-card-text>
          <mdc-card-actions>
            <mdc-card-action-icons>
              <mdc-button raised @click="create_comment_div = true;">
                <i class="material-icons mdc-button__icon">add</i>
                評論
              </mdc-button>
            </mdc-card-action-icons>
          </mdc-card-actions>
        </mdc-card>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>
    <!-- end 新增評論 -->

    <mdc-layout-grid>
      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>

      <mdc-layout-cell phone=4 tablet=6 desktop=8>
        <div v-for="(comment, index) in comments" :key="comment.id" class="book__comment-container">
          <mdc-card class="book__comment-container__card">
            <mdc-card-text>
              <!-- comment -->
              <mdc-layout-grid>
                <!-- tablet=8 desktop=12 -->
                <mdc-layout-cell phone=4 tablet=1 desktop=3 class="book__comment-container__card__people">
                  <img :src="`https://source.unsplash.com/80x80/?face&sig=${index}`">
                  <div>
                    <mdc-body typo="body2">{{ comment.name }}</mdc-body>
                    <mdc-body typo="body2">2周前</mdc-body>
                  </div>
                </mdc-layout-cell>
                <mdc-layout-cell phone=4 tablet=6 desktop=7>
                  <mdc-body>{{ book.bookName }}</mdc-body>
                </mdc-layout-cell>
                <mdc-layout-cell phone=4 tablet=1 desktop=2>
                  <mdc-icon icon="star_border"></mdc-icon>
                </mdc-layout-cell>

                <!-- end tablet=8 desktop=12 -->
                <mdc-layout-cell phone=4 tablet=8 desktop=12>
                  <mdc-body v-html="comment.comment.replace(/\n/g, '<br>')"></mdc-body>
                  <mdc-body typo="body2">來自: 127.0.0.1</mdc-body>
                </mdc-layout-cell>

                <!-- end tablet=8 desktop=12 -->
                <mdc-layout-cell phone=4 tablet=8 desktop=12>
                  <mdc-caption><mdc-icon icon="star_border"></mdc-icon></mdc-caption>
                  <mdc-caption>回覆</mdc-caption>
                  <mdc-caption>0</mdc-caption>
                  <mdc-caption><mdc-icon icon="star_border"></mdc-icon></mdc-caption>
                  <mdc-caption>同意</mdc-caption>
                  <mdc-caption>0</mdc-caption>
                  <mdc-caption><mdc-icon icon="star_border"></mdc-icon></mdc-caption>
                  <mdc-caption>反對</mdc-caption>
                  <mdc-caption>0</mdc-caption>
                </mdc-layout-cell>
              </mdc-layout-grid>
              <!-- end comment -->
            </mdc-card-text>
          </mdc-card>
        </div>
      </mdc-layout-cell>

      <mdc-layout-cell tablet=1 desktop=2></mdc-layout-cell>
    </mdc-layout-grid>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      create_comment_div: false,

      advantage: '',
    };
  },
  computed: {
    book() {
      return this.$store.getters.getBook(this.$route.params.ISBN);
    },
    comments() {
      return this.$store.getters.getComments(this.$route.params.ISBN);
    },
  },
  methods: {

  },
};
</script>

<style lang="scss">
.book {
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
