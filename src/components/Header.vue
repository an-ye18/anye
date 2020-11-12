<template>
  <div>
    <div style="position: fixed">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <p>
          <img
            src="../assets/img/logo.png"
            width="35px"
            style="padding: 13px 0 0 15px"
          />
        </p>
        <router-link to="/index">
          <el-menu-item index="1">
            <i class="el-icon-s-home" @click="addTab(editableTabsValue)"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
          </template>
          <el-menu-item-group>
            <span slot="title">CRM</span>
            <el-menu-item index="1-1" @click="addTab1(editableTabsValue)"
              >发现</el-menu-item
            >
            <el-menu-item index="1-2" @click="addTab2(editableTabsValue)"
              >客户公共池</el-menu-item
            >
            <el-menu-item index="1-3" @click="addTab3(editableTabsValue)"
              >线索</el-menu-item
            >
            <el-menu-item index="1-4" @click="addTab4(editableTabsValue)"
              >商机</el-menu-item
            >
            <el-menu-item index="1-5" @click="addTab5(editableTabsValue)"
              >客户管理</el-menu-item
            >
            <el-menu-item index="1-6" @click="addTab6(editableTabsValue)"
              >合同</el-menu-item
            >
            <el-menu-item index="1-7" @click="addTab7(editableTabsValue)"
              >联系人</el-menu-item
            >
            <el-menu-item index="1-8" @click="addTab8(editableTabsValue)"
              >销售任务</el-menu-item
            >
            <el-menu-item index="1-9" @click="addTab9(editableTabsValue)"
              >日程</el-menu-item
            >
            <el-menu-item index="1-10" @click="addTab10(editableTabsValue)"
              >外勤管理</el-menu-item
            >
            <el-menu-item index="1-11" @click="addTab11(editableTabsValue)"
              >产品</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-pie-chart"></i>
          </template>
          <el-menu-item-group>
            <span slot="title">统计分析</span>
            <el-menu-item index="1-1" @click="addTab12(editableTabsValue)"
              >仪表盘</el-menu-item
            >
            <el-menu-item index="1-2" @click="addTab13(editableTabsValue)"
              >数据报表</el-menu-item
            >
            <el-menu-item index="1-3" @click="addTab14(editableTabsValue)"
              >销售分析</el-menu-item
            >
            <el-menu-item index="1-4" @click="addTab15(editableTabsValue)"
              >客户分析</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-reading" @click="addTab16(editableTabsValue)"></i>
          <span slot="title">知识库</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div>
      <div class="topR">
        <span
          ><img
            src="../assets/img/u724.svg"
            width="22px"
            style="position: relative; left: -38px; top: 5px"
        /></span>
        <span
          ><input
            type="text"
            style="font-size: 12px"
            placeholder="告诉我你想要做什么"
          />
          <router-link to="/search">
            <i
              class="el-icon-search"
              style="
                position: relative;
                right: 25px;
                top: 2px;
                color: #66b1ff;
                cursor: pointer;
              "
            ></i
          ></router-link>
        </span>
        <span>
          <template>
            <el-popover placement="bottom-end" width="220" trigger="hover">
              <img src="../assets/img/top.png" width="220px" />
              <el-button
                class="el-icon-s-order btn"
                slot="reference"
              ></el-button>
            </el-popover>
          </template>
          <i class="el-icon-message-solid"></i>
        </span>
        <span>
          <img
            src="../assets/img/u705.png"
            width="35px"
            style="position: relative; top: 10px; left: 25px"
          /> </span
        ><span
          style="
            position: relative;
            left: 368px;
            top: -32px;
            font-size: 12px;
            transform: scale(0.8);
          "
        >
          <el-row class="block-col-2">
            <el-col :span="12">
              <el-dropdown>
                <span class="el-dropdown-link">
                  彭于晏<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu placement="bottom-end" slot="dropdown">
                  <router-link to="/grsz">
                    <el-dropdown-item icon="el-icon-user-solid"
                      >个人设置</el-dropdown-item
                    >
                  </router-link>
                  <router-link to="/xtsz">
                    <el-dropdown-item icon="el-icon-s-tools"
                      >系统设置</el-dropdown-item
                    >
                  </router-link>
                  <router-link to="/">
                    <el-dropdown-item icon="el-icon-right"
                      >退出登录</el-dropdown-item
                    >
                  </router-link>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </span>
      </div>
      <!-- <div class="topL">
      <el-tabs
        v-model="editableTabsValue"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane
          v-for="item in editableTabs"
          :key="item.name"
          :label="item.title"
          :name="item.name"
        >
          {{ item.content }}
        </el-tab-pane>
      </el-tabs>
    </div> -->
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item,
.el-submenu__title {
  height: 48px;
  line-height: 48px;
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  list-style: none;
}
.topR {
  height: 65px;
  position: fixed;
  padding-left: 700px;
  border: 1px solid rgb(245, 242, 242);
  width: 500px;
  background: white;
  z-index: 3;
  margin-left: 65px;
}
.topR input {
  border: none;
  outline: none;
  padding-left: 10px;
  background: url("../assets/img/u708.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.5;
  width: 180px;
  height: 25px;
}
.btn {
  font-size: 15px;
  border: none;
  background: none;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-dropdown {
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 12px;
  margin-top: 5px;
}
.el-dropdown-menu {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  margin: 15px 0;
  background-color: #fff;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  transform: scale(0.8);
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true,
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "首页",
        },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "首页",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab1(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "发现",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab2(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "客户公共池",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab3(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "线索",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab4(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "商机",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab5(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "客户管理",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab6(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "合同",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab7(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "联系人",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab8(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "销售任务",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab9(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "日程",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab10(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "外勤管理",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab11(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "产品",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab12(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "仪表盘",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab13(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "数据报表",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab14(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "销售分析",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab15(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "客户分析",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    addTab16(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "知识库",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>