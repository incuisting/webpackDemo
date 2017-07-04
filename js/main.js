requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        com: '../com'
    }
});
requirejs(['jquery', 'com/GoTop', 'com/Slidershow', 'com/WaterFull'], function($, GoTop, SliderShow, WaterFull) {

    var $sliderShowContainer = $('.wrap');
    // var imgHeight = $sliderShowContainer.height();
    // var imgWidth = $sliderShowContainer.width();
    // var imgCount = 1080;
    // var imgSrc = `https://unsplash.it/${imgWidth}/${imgHeight}/?image=${imgCount}`
    var imgList = $sliderShowContainer.find('img');
    console.log('imgList', imgList);
    console.log('imgList[0]', $(imgList[0]));
    $(imgList[0]).load(function() {
        new SliderShow($('.wrap'));
    })

    // for(var i = 0;i<imgList.length;i++){
    //     var img = imgList
    // }

    new GoTop($('body'));

    let $container = $('.portfolio-list'),
        $targetNode = $('.portfolio-list>li'),
        $loadMoreButton = $('.load-more');
    new WaterFull($container, $targetNode, $loadMoreButton);
});