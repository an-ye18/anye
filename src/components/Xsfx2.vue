<template>
  <div class="main3">
    <div id="main1" style="width: 350px; height: 350px"></div>
  </div>
</template>
<style scoped>
.main3 {
  transform: scaleY(0.9);
  margin-left: 10px;
}
</style>
<script>
export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main1"));

      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        legend: {
          data: ["浏览网站", "放入购物车", "生成订单", "支付订单", "完成交易"],
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "10%",
            top: 60,
            bottom: 60,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 96, name: "浏览网站", itemStyle: { color: "#3aa1ff" } },
              { value: 85, name: "放入购物车", itemStyle: { color: "#36cbcb" }  },
              { value: 68, name: "生成订单", itemStyle: { color: "#4ecb73" }  },
              { value: 60, name: "支付订单", itemStyle: { color: "#fbd437" }  },
              { value: 58, name: "完成交易", itemStyle: { color: "#f2637b" }  },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>