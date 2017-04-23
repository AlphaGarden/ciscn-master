/**
 * Created by garden on 17-4-11.
 */
app.controller("navController",function ($scope) {
    //logresponse default value is false
    $scope.logresponse = false;
    $scope.sidebarflag = true;
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