<template>
  <a-layout id="components-layout-demo-custom-trigger" :style="{ height: '100%' }">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"></div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item v-for="(item, index) in menuList" :key="index">
          <router-link :to="item.path">
            <a-icon type="user" />
            <span>nav {{ item.name }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="nav-bar">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-dropdown class="nav-bar-login">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
            {{ this.$store.getters.resturantName }}
            <a-icon type="down" />
          </a>
          <!-- eslint-disable-next-line vue/no-static-inline-styles -->
          <a-menu style="margin: 0 24px;" slot="overlay">
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false
    };
  },
  computed: {
    menuList() {
      return this.$store.getters.menuList.children;
    }
  }
};
</script>
<style lang="less">
#components-layout-demo-custom-trigger {
  .nav-bar {
    padding: 0;
    background: #fff;
  }

  .nav-bar-login {
    float: right;
    padding: 0 30px;
  }
}

#components-layout-demo-custom-trigger .trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
}
</style>
