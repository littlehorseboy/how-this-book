<template>
  <div class="HowThisBook mdc-typography">

    <mdc-layout-app>
      <mdc-toolbar slot="toolbar" fixed>
        <mdc-toolbar-row>
          <mdc-toolbar-section align-start >
            <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
            <router-link :to="{ name: 'Home' }" tag="mdc-toolbar-title">好書客</router-link>
          </mdc-toolbar-section>
          <mdc-toolbar-section align-end>
            <mdc-toolbar-icon event="show-help" icon="help"></mdc-toolbar-icon>
          </mdc-toolbar-section>
        </mdc-toolbar-row>
      </mdc-toolbar>
      <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
        <mdc-drawer-list>
            <router-link :to="{ name: 'Home' }" tag="mdc-drawer-item" start-icon="inbox">
              <span class="mdc-list-item__graphic"><i aria-hidden="true" class="material-icons">inbox</i></span>
              支持者名單
            </router-link>
            <!-- <mdc-drawer-item start-icon="inbox">支持者名單</mdc-drawer-item> -->
            <mdc-drawer-item start-icon="send">FAQ</mdc-drawer-item>
            <mdc-drawer-item start-icon="drafts">粉絲專頁</mdc-drawer-item>
            <mdc-drawer-item start-icon="drafts">關於我們</mdc-drawer-item>
            <mdc-drawer-item start-icon="drafts">發言規則</mdc-drawer-item>
        </mdc-drawer-list>
      </mdc-drawer>

      <main class="content">
        <router-view/>
      </main>

    </mdc-layout-app>

  </div>
</template>

<script>
export default {
  name: 'HowThisBook',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss" scoped>
.HowThisBook {
  main {
    min-height: 100%;
  }
}
</style>
