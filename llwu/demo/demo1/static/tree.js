var tree = {
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
        var that = this
        return data_option = {
            "name": "被分析文本",
            "children": [
                {
                    "name": "location", 
                    "children":[{
                        "name":"traffic conveenience",
                        "children":[{
                                "name":that.getResult(data.location_traffic_convenience)//指标结果
                            }]
                    },{
                        "name":"distance from business distric",
                        "children":[{
                                "name":that.getResult(data.location_distance_from_business_district)//指标结果
                            }]
                    },{
                        "name":"easy to find"  ,
                        "children":[{
                                "name":that.getResult(data.location_easy_to_find)//指标结果
                            }]
                    }]
                    
                },
                {
                    "name": "service",
                    "children":[{
                        "name":"wait time",
                        "children":[{
                                "name":that.getResult(data.service_wait_time)//指标结果
                            }]   
                    },{
                        "name":"waiter's attitude",
                        "children":[{
                                "name":that.getResult(data.service_waiters_attitude)//指标结果
                            }]   
                    },{
                        "name":"parking convenience",
                        "children":[{
                                "name":that.getResult(data.service_parking_convenience)//指标结果
                            }]  
                    },{
                        "name":"serving speed" ,
                        "children":[{
                                "name":that.getResult(data.service_serving_speed)//指标结果
                            }] 
                    }]
                    
                },
                {
                    "name": "price",
                    "children":[{
                        "name":"price level" ,
                        "children":[{
                                "name":that.getResult(data.price_level)//指标结果
                            }]  
                    },{
                        "name":"cost effective" ,
                        "children":[{
                                "name":that.getResult(data.price_cost_effective)//指标结果
                            }]  
                    },{
                        "name":"discount" ,
                        "children":[{
                                "name":that.getResult(data.price_discount)//指标结果
                            }] 
                    }]
                
                },
                {
                    "name": "environment",
                    "children":[{
                        "name":"decoration"  ,
                        "children":[{
                                "name":that.getResult(data.environment_decoration)//指标结果
                            }] 
                    },{
                        "name":"noise",
                        "children":[{
                                "name":that.getResult(data.environment_noise)//指标结果
                            }]   
                    },{
                        "name":"space",
                        "children":[{
                                "name":that.getResult(data.environment_space)//指标结果
                            }]  
                    },{
                        "name":"cleaness" ,
                        "children":[{
                                "name":that.getResult(data.environment_cleaness)//指标结果
                            }]   
                    }]
                    
                },
                {
                    "name": "dish",
                    "children":[{
                        "name":"portion",
                        "children":[{
                                "name":that.getResult(data.dish_portion)//指标结果
                            }]     
                    },{
                        "name":"tast"  ,
                        "children":[{
                                "name":that.getResult(data.dish_taste)//指标结果
                            }]   
                    },{
                        "name":"look",
                        "children":[{
                                "name":that.getResult(data.dish_look)//指标结果
                            }]    
                    },{
                        "name":"recommendation",
                        "children":[{
                                "name":that.getResult(data.dish_recommendation)//指标结果
                            }]    
                    }]
                    
                },
                {
                    "name": "others",
                    "children":[{
                        "name":"overall experience",
                        "children":[{
                                "name":that.getResult(data.others_overall_experience)//指标结果
                            }]     
                    },{
                        "name":"willing to consume aggain" ,
                        "children":[{
                                "name":that.getResult(data.others_willing_to_consume_again)//指标结果
                            }]    
                    }]
                    
                }
            ]
        };
        
    },
    getOption:function(data){
        var data_option = this.proccessData(data)
        return option = {
            title: {
                text: '树图分析'
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series:[
                {
                    type: 'tree',
                    id: 0,
                    name: 'tree1',
                    data: [data_option],

                    top: '10%',
                    left: '20%',
                    bottom: '22%',
                    right: '20%',

                    symbolSize: 7,

                    edgeShape: 'polyline',
                    edgeForkPosition: '63%',
                    initialTreeDepth: 3,

                    lineStyle: {
                        width: 2
                    },

                    label: {
                        backgroundColor: '#fff',
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right'
                    },

                    leaves: {
                        label: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },

                    expandAndCollapse: true,
                    animationDuration: 550,
                    animationDurationUpdate: 750
                }
            ]
        };
    },
}