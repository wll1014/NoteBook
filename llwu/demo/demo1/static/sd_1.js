var sd_1 = {
    draw:function(id,data){
        var option = this.getOption(data)
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option)
    },
    getResult:function(result){
        switch(result){
            case 0:
                return "中性"
            case 1:
                return "正面"
            case -1:
                return "负面"
            case -2:
                return "未提及"
        }
    },
    proccessData:function(data){
        var data_value =  [
            [0,0,data.location_traffic_convenience],[0,1,data.location_distance_from_business_district],[0,2,data.location_easy_to_find],//单元组最后一个值是每隔指标的占比
            [0,3,data.service_wait_time],[0,4,data.service_waiters_attitude],[0,5,data.service_parking_convenience],[0,6,data.service_serving_speed],
            [0,7,data.price_level],[0,8,data.price_cost_effective],[0,9,data.price_discount],
            [0,10,data.environment_decoration],[0,11,data.environment_noise],[0,12,data.environment_space],[0,13,data.environment_cleaness],
            [0,14,data.dish_portion],[0,15,data.dish_taste],[0,16,data.dish_look],[0,17,data.dish_recommendation],
            [0,18,data.others_overall_experience],[0,19,data.others_willing_to_consume_again],
        ];
        return data_value
        
    },
    getOption:function(data){
        var that = this
        var data_value = this.proccessData(data)
        var zhibiao = ['traffic conveenience', 'distance from business distric', 'easy to find',
        'wait time', "waiter's attitude",'parking convenience','serving speed', 
        'price level', 'cost effective','discount',
        'decoration', 'noise', 'space','cleaness', 
        'portion', 'tast','look', 'recommendation', 
        'overall experience','willing to consume aggain'];//20中评价指标，用于显示

        var category = ['散点图分析'];
        var option = {
            tooltip: {
                position: 'top',
                formatter:function(data){
                    var ca = data.data[1]
                    var result = that.getResult(ca)
                    var des = data.name +":"+result
                    return des
                }
                
            },
            title: [],
            singleAxis: [],
            series: []
        };

        echarts.util.each(category, function (c, idx) {
            option.title.push({
                textBaseline: 'middle',
                top: (idx + 0.5) * 100 / 10+10 + '%',
                text: c
            });
            option.singleAxis.push({
                left: 150,
                type: 'category',
                boundaryGap: false,
                data: zhibiao,
                top: (idx * 100 / 10 )+10 + '%',
                height: (100 / 10 - 2)+10 + '%',
                axisLabel: {
                    interval: 0,
                    show:true,
                    
                    showMinLabel:true,
                    rotate:30
                }
            });
            option.series.push({
                singleAxisIndex: idx,
                coordinateSystem: 'singleAxis',
                type: 'scatter',
                data: [],
                symbolSize: function (dataItem) {
                    return (dataItem[1]+3) * 4;//(+3 是因为有负值，为了保证每个值都大于0)
                }
            });
        });

        echarts.util.each(data_value, function (dataItem) {
            
            option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
        });

        return option
    },
}