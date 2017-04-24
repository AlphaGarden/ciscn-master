/**
 * Created by garden on 17-4-17.
 */

var eChart3 = echarts.init(document.getElementById("echart3"));
eChart3.showLoading();
$.get('http://localhost:63342/ciscn-master/xml/les-miserables.gexf', function (xml) {
    eChart3.hideLoading();

    var graph = echarts.dataTool.gexf.parse(xml);
    var categories = [];
    for (var i = 0; i < 4; i++) {
        if(i==0){
            categories.push({name:'色情'});
        }else if(i==1) {
            categories.push({name:'反动'});
        }else if(i==2){
            categories.push({name:'暴力'});
        }else{
            categories.push({name:'正常'});
        }
    }
    graph.nodes.forEach(function (node) {
        node.itemStyle = null;
        node.value = node.symbolSize;
        node.symbolSize /= 1.5;
        node.label = {
            normal: {
                show: node.symbolSize > 30
            }
        };
        node.category = node.attributes.modularity_class;
    });
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ]
    };

    eChart3.setOption(option);
}, 'xml');