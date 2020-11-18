<template>
  <div class="main2">
    <div id="main" style="width: 500px; height: 350px"></div>
  </div>
</template>
<style scoped>
.main2 {
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
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "XX统计",
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "tokyo", "london"],
          source: [
            { product: "Jan", tokyo: 7, london: 3.9 },
            { product: "Feb", tokyo: 6.9, london: 4.2 },
            { product: "Mar", tokyo: 14.5, london: 5.7 },
            { product: "Apr", tokyo: 18.4, london: 8.5 },
            { product: "May", tokyo: 21.5, london: 11.9 },
            { product: "Jun", tokyo: 25.2, london: 15.2 },
            { product: "Jul", tokyo: 26.5, london: 17 },
            { product: "Aug", tokyo: 23.3, london: 16.6 },
            { product: "Sep", tokyo: 18.3, london: 14.2 },
            { product: "Oct", tokyo: 13.9, london: 10.3 },
            { product: "Nov", tokyo: 13.9, london: 6.6 },
            { product: "Dec", tokyo: 9.6, london: 4.8 },
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [
          { type: "bar", itemStyle: { color: "#3aa1ff" } },
          { type: "bar", itemStyle: { color: "#4ecb73" } },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>