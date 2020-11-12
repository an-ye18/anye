<template>
  <div>
    <Header></Header>
    <section class="sec">
      <div class="sec1">
        <el-input
          placeholder="搜企业、法人、产品、经营范围..."
          v-model="input3"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>
      <div class="sec2">
        <template>
          <span style="margin-right: 30px;">
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
              >全选</el-checkbox
            ></span
          >
          <span>
            <el-checkbox-group
              v-model="checkedCities"
              @change="handleCheckedCitiesChange"
            >
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{
                city
              }}</el-checkbox>
            </el-checkbox-group></span
          >
        </template>
      </div>
    </section>
  </div>
</template>
      </div>
    </section>
  </div>
</template>
<style scoped>
.sec {
  padding: 70px 10px 10px 70px;
  background: rgb(251 251 251);
  font-size: 12px;
}

.input-with-select {
  width: 500px;
}
.el-input-group__append button.el-button,
.el-input-group__append div.el-select .el-input__inner,
.el-input-group__append div.el-select:hover .el-input__inner,
.el-input-group__prepend button.el-button,
.el-input-group__prepend div.el-select .el-input__inner,
.el-input-group__prepend div.el-select:hover .el-input__inner {
  background-color: #3a8ee6;
  border: 1px solid #3a8ee6;
  color: white;
  border-radius: 0;
}
.sec1 {
  margin: 50px 320px;
}
::v-deep.sec2 {
  font-size: 12px;
  transform: scale(0.9);
  margin-top: -42px;
  margin-left: 273px;
}
::v-deep.sec2>span{
    float: left;
}
</style>
<script>
import Header from "../components/Header";

const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  components: {
    Header,
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: false,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>