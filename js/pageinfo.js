/**
 * Created by garden on 17-4-11.
 */
app.controller("navController",function ($scope,ramdonlabelclasspicker) {
    //logresponse default value is false
    $scope.logresponse = false;
    $scope.sidebarflag = true;
    $scope.btnflag = -1;
    $scope.toggleshow= function () {
        $scope.isover= true;

    }
    $scope.togglehide = function(){
        $scope.isover = false;
    }
    $scope.dopulse = function () {
        $scope.pulseflag = true;
    }
    $scope.notpulse = function () {
        $scope.pulseflag = false;
    }
    $scope.login = function () {
        $scope.logresponse = true;
    }
    $scope.logout = function () {
        $scope.logresponse = false;
    }
    $scope.dashboard = function () {
        if($scope.sidebarflag == true){
            $scope.sidebarflag = false;
        }else{
            $scope.sidebarflag = true;
        }
    }
    $scope.btnshow = function (index) {
        $scope.btnflag = index;
        // alert($scope.btnflag);
    }
    $scope.btnhide = function () {
        $scope.btnflag = -1;//Not matching any media,so hide that button blcok
    }

    $scope.markrecord = function (index,btn) {
        alert(index+" "+btn);
    }
    $scope.resourcerecord=[
        {
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
            "src":"../images/infobar/computer_68.88583218707px_1202751_easyicon.net.png",
            "heading":"Ip地址:114.117.194.0",
            "belonging":"归属地：四川成都市",
            "capturetime":"捕获时间:Sun, 23 Apr 2017 09:42:35 ",
            "resourcename":"资源名：超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿超性感的极品露脸校花女情黑丝,援助富商拍摄淫片 极品嫩穴后入爆艹颜射吞 卧室猛干人间尤物嫩逼二奶，一天操三次都不嫌多  小女粉嫩爽滑 大连SA哥又搞了条新鲜嫩菜 舞蹈學校美騷貨插得直流白漿",
            "resourcetype":"视频文件",
            "classfystandard":"色情",
            "labeltype":ramdonlabelclasspicker.pick()
        }
    ];
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
    }

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
    ]
});