<template>
  <div class="main3">
    <div id="main1" style="width: 416px; height: 320px"></div>
  </div>
</template>
<style scoped>
.main3 {
  transform: scaleY(0.9);
  margin-left: 30px;
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
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["Tom", "Mary", "Jim", "Tony", "May"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
              { value: 12.43, name: "Tom", itemStyle: { color: "#3aa1ff" } },
              { value: 12.26, name: "Mary", itemStyle: { color: "#36cbcb" } },
              { value: 16.87, name: "Jim", itemStyle: { color: "#4ecb73" } },
              { value: 25.75, name: "Tony", itemStyle: { color: "#fbd437" } },
              { value: 32.68, name: "May", itemStyle: { color: "#f2637b" } },
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