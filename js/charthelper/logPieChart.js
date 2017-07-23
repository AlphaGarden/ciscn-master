/**
 * Created by dell on 2017/7/23.
 */
var echart5 = echarts.init(document.getElementById("echart5"));
option = {
    title : {
        text: '不良主播平台来源',
        subtext: '24-hour',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['斗鱼TV','bilibili','全民TV','熊猫TV','其他']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'斗鱼TV'},
                {value:310, name:'bilibili'},
                {value:234, name:'全民TV'},
                {value:135, name:'熊猫TV'},
                {value:1548, name:'其他'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

echart5.setOption(option);