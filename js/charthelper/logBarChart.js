/**
 * Created by dell on 2017/7/23.
 */
var eChart4 = echarts.init(document.getElementById("echart4"));
var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i < 24; i++) {
    xAxisData.push(i + "hours");
    data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
    data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
    data3.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
}

option = {
    title: {
        text: '24小时数据统计图'
    },
    legend: {
        data: ['色情', '暴力','反动'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: '色情',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: '暴力',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    },
        {
            name: '反动',
            type: 'bar',
            data: data3,
            animationDelay: function (idx) {
                return idx * 10 + 200;
            }
        }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};
eChart4.setOption(option);