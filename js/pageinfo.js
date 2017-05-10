/**
 * Created by garden on 17-4-11.
 */
app.controller("navController",function ($scope,$interval,$http,ramdonlabelclasspicker) {
    //logresponse default value is false
    $scope.logresponse = false;
    $scope.sidebarflag = true;
    $scope.realtimeTypeFlag = "nonlive";
    $scope.overviewTypeFlag = "nonlive";
    $scope.badResourceNum = 1000;
    $scope.badNodeNum = 31412;
    $scope.badLiveNum = 3145;
    $scope.pZone = "中国";
    $scope.btnflag = -1;
    $scope.toggleshow= function () {
        $scope.isover= true;

    };
    $scope.togglehide = function(){
        $scope.isover = false;
    };
    $scope.dopulse = function () {
        $scope.pulseflag = true;
    };
    $scope.notpulse = function () {
        $scope.pulseflag = false;
    };
    $scope.login = function () {
        $http({
            method: 'GET',
            url: 'http://123.207.219.224:8007/dht/resource_text/?format=json'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            alert(response.data);
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $('#loginmsg').popover(
                {
                    title:$scope.loginResponseTitle,
                    content:$scope.loginResponseContent,
                    placement:"bottom",
                });
        });
        $scope.loginResponseTitle = "错误";
        $scope.loginResponseContent = "你的密码不正确，请核对你的账号和密码是否匹配。如果疑问请联系系统管理员";
    };
    $scope.logout = function () {
        $scope.logresponse = false;
    };
    $scope.dashboard = function () {
        if($scope.sidebarflag == true){
            $scope.sidebarflag = false;
        }else{
            $scope.sidebarflag = true;
        }
    };
    $scope.btnshow = function (index) {
        $scope.btnflag = index;
        // alert($scope.btnflag);
    };
    $scope.hideresourceitem = function (index) {
        $scope.resourcerecord.splice(index,1);
    };
    $scope.hidenodeitem = function (index) {
        $scope.noderecord.splice(index,1);
    };
    $scope.btnhide = function () {
        $scope.btnflag = -1;//Not matching any media,so hide that button blcok
    };

    //overview page
    $scope.overviewSwitch = function (flag) {
        $scope.overviewTypeFlag = flag;
    };

    //realTime Page
    $scope.realtimeSwitch =function (flag) {
        $scope.realtimeTypeFlag = flag;
    };

    $scope.resourcerecord=[
        {
            "id":"resource-001",
            "ip":"114.117.194.0",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"Ip地址:114.117.194.0",
            "belonging":"归属地：四川成都市",
            "capturetime":"捕获时间:Sun, 23 Apr 2017 09:42:35 ",
            "resourcename":"资源名：超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿",
            "resourcetype":"视频文件",
            "classfystandard":"色情",
            "labeltype":ramdonlabelclasspicker.pick()
        },
        {
            "id":"resource-002",
            "ip":"114.117.194.1",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"Ip地址:114.117.194.1",
            "belonging":"归属地：四川成都市",
            "capturetime":"捕获时间:Sun, 23 Apr 2017 09:42:35 ",
            "resourcename":"资源名：超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿",
            "resourcetype":"视频文件",
            "classfystandard":"色情",
            "labeltype":ramdonlabelclasspicker.pick()
        },
        {
            "id":"resource-003",
            "ip":"114.117.194.2",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"Ip地址:114.117.194.2",
            "belonging":"归属地：四川成都市",
            "capturetime":"捕获时间:Sun, 23 Apr 2017 09:42:35 ",
            "resourcename":"资源名：超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿",
            "resourcetype":"视频文件",
            "classfystandard":"色情",
            "labeltype":ramdonlabelclasspicker.pick()
        }
    ];
    $scope.noderecord = [
        {
            "ip":"114.117.194.0",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"114.117.194.0",
            "belonging":"北京市",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "antinum":"14",
            "pornnum":"21",
            "vionum":"12",
            "feature":["韩国少女情怀","叙利亚战争","恐怖袭击"]
        },
        {
            "ip":"114.117.194.1",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"114.117.194.1",
            "belonging":"江苏南京市",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "antinum":"14",
            "pornnum":"221",
            "vionum":"152",
            "feature":["韩国少女情怀","伊拉克","恐怖袭击"]
        },
        {
            "ip":"114.117.194.2",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"114.117.194.2",
            "belonging":"日本",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "antinum":"5",
            "pornnum":"25",
            "vionum":"452",
            "feature":["法轮功","叙利亚战争","恐怖袭击"]
        }
        ];
    $scope.realtimeNonLiveRecord=[
        {
            "id":"resource-001",
            "ip":"114.117.194.0",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "title":"114.117.194.0",
            "belonging":"四川成都市",
            "capturetime":"Sun, 23 Apr 2017 09:42:35 GMT",
            "filename":"超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜",
            "filetype":["视频文件"],
            "classification":["色情"]
        },
        {
            "recordtype":"nonlive",
            "id":"resource-002",
            "ip":"114.117.194.0",
            "src":"../images/infobar/text_lines_51.658703071672px_1205974_easyicon.net.png",
            "title":"114.117.194.0",
            "belonging":"江苏南京市",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "filename":"www.henduofuli.net发布，每日更新 | 韩国WINTV女主播 大尺度视讯 按姓名分类 [127G大合集 磁力链接]",
            "filetype":["文本文件","种子文件"],
            "classification":["色情"]
        },
        {
            "id":"resource-003",
            "ip":"113.44.15.105",
            "src":"../images/infobar/text_lines_51.658703071672px_1205974_easyicon.net.png",
            "title":"113.44.15.105",
            "belonging":"意大利",
            "capturetime":"Sat, 23 Apr 2017 09:41:35 GMT",
            "filename":"成年コミック) [雑誌] [アンソロジー] 月刊Web男の娘・れくしょんッ！S Vol.04 [DL版].zip",
            "filetype":["压缩图片文件","种子文件"],
            "classification":["色情"]
        },
        {
            "id":"resource-004",
            "ip":"113.44.15.105",
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "title":"113.44.15.105",
            "belonging":"俄罗斯",
            "capturetime":"Sun, 23 Apr 2017 09:41:35 GMT",
            "filename":"青草_20160131A本资源群347491671由我爱主播网整理发布.mp4",
            "filetype":["视频mp4文件","种子文件"],
            "classification":["色情"]
        }
    ];
    $scope.realtimeLiveRecord=[
        {
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"

        },
        {
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"

        },
        {
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"

        },
        {
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"

        }
    ];
    $scope.liveRecord = [
        {
            "liveId":"live-001",
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"
        },
        {
            "liveId":"live-001",
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"
        },
        {
            "liveId":"live-001",
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"
        },
        {
            "liveId":"live-001",
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"
        },
        {
            "liveId":"live-001",
            "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
            "title":"斗鱼专业色情主播",
            "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
            "platform":"斗鱼tv",
            "number":"10092",
            "livetype":"色情"
        }
    ];

    //rolling module
    var stop = undefined;
    $scope.startRolling =  function () {
        $scope.stratRollingFlag = true;
        //Prevent starting a new roll
        if(angular.isDefined(stop))
            return;
         stop= $interval(function () {
            var noneliveItem = {
                "recordtype":"nonlive",
                "id":"resource-002",
                "ip":"114.117.194.0",
                "src":"../images/infobar/text_lines_51.658703071672px_1205974_easyicon.net.png",
                "title":"114.117.194.0",
                "belonging":"江苏南京市",
                "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
                "filename":"www.henduofuli.net发布，每日更新 | 韩国WINTV女主播 大尺度视讯 按姓名分类 [127G大合集 磁力链接]",
                "filetype":["文本文件","种子文件"],
                "classification":["色情"]
            };
            var liveItem = {
                "src":"../images/harmfulinfo/porn_128px_1075595_easyicon.net.png",
                "title":"斗鱼专业色情主播",
                "capturetime":"Sun, 23 Apr 2017 09:44:35 GMT",
                "platform":"斗鱼tv",
                "number":"10092",
                "livetype":"色情"
            };
            if($scope.realtimeTypeFlag=='nonlive'){
                //Insert an record into the first place of the array
                $scope.realtimeNonLiveRecord.splice(0,0,noneliveItem);
            }else {
                //Insert an record into the first place of the array
                $scope.realtimeLiveRecord.splice(0,0,liveItem);
            }
        },5000);
    }
    $interval(function () {
        $scope.badResourceNum +=1;
        $scope.badNodeNum +=1;
        $scope.badLiveNum +=1;
        },1000);
    $scope.stopRolling = function () {
        $scope.stratRollingFlag = false;
        if(angular.isDefined(stop)){
            $interval.cancel(stop);
            stop = undefined;
        }
    };

    $scope.labels=[
        {"class":"label label-default animated fadeIn",
            "content":"label1"},
        {"class":"label label-danger animated fadeIn",
            "content":"label2"},
        {"class":"label label-success animated fadeIn",
            "content":"label3"
        }
    ];
    $scope.addlabel = function () {
        $scope.labels.push(
            {"class":"label label-primary animated fadeIn",
                "content":"label4"
            }
        );
    };

    $scope.records=[
        {
            "src":"../images/pie_chart_128px_1207526_easyicon.net.png",
            "title":"图像",
            "content":"This is the data info to check to the chart trends in the Story Network!",
            "btn":"查看"
        }, {
            "src":"../images/target_128px_1207541_easyicon.net.png",
            "title":"文本",
            "content":"This is the data info to check to the chart trends in the Story Network!",
            "btn":"查看"
        }, {

            "src":"../images/hotspot_128px_1114554_easyicon.net.png",
            "title":"视频",
            "content":"This is the data info to check to the chart trends in the Story Network!",
            "btn":"查看"
        }];
    $scope.sliderecords=[
        {
            "class":"second-slide img-responsive",
            "alt":"Second Slide",
            "src":"../images/bg-gardahaus.jpg",
            "title":"Real Time Image",
            "content":"Note: If you re viewing this page via a '<'code'>'file://'<'/code'>'URL, the 'next' and 'previous' Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.",
            "btn":"View Detail"
        },{
            "class":"third-slide img-responsive",
            "alt":"Third Slide",
            "src":"../images/bg-moveon.jpg",
            "title":"Real Time Image",
            "content":"Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
            "btn":"View Detail"
        }
    ];
    //Zone Picker
    $scope.zonePicker = function (zone) {
        $scope.pZone =zone;
    };
    //button style reverse module
    $scope.boption1 =true;
    $scope.boption2 =true;
    $scope.boption3 =true;
    $scope.boption4 =true;
    $scope.boption5 =true;
    $scope.boption6 =true;
    $scope.stratRollingFlag = false;
    $scope.breverse1 = function () {
        if($scope.boption1){
            $scope.boption1 = false;
        }else{
            $scope.boption1 = true;
        }
    };
    $scope.breverse2 = function () {
        if($scope.boption2){
            $scope.boption2 = false;
        }else{
            $scope.boption2 = true;
        }
    };
    $scope.breverse3 = function () {
        if($scope.boption3){
            $scope.boption3 = false;
        }else{
            $scope.boption3 = true;
        }
    };
    $scope.breverse4 = function () {
        if($scope.boption4){
            $scope.boption4 = false;
        }else{
            $scope.boption4 = true;
        }
    };
    $scope.breverse5 = function () {
        if($scope.boption5){
            $scope.boption5 = false;
        }else{
            $scope.boption5 = true;
        }
    };
    $scope.breverse6 = function () {
        if($scope.boption6){
            $scope.boption6 = false;
        }else{
            $scope.boption6 = true;
        }
    };
    //Live show Deatail
    $scope.showDetail= function () {
        $("#myModal").modal();
    }
    $scope.showLiveDetail = function () {
        $("#myModal2").modal();
    }
});