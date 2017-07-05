var $ = require('jquery'),
    GoTop = require('./com/GoTop.js'),
    SliderShow = require('./com/SliderShow.js'),
    WaterFull = require('./com/WaterFull.js');

var $sliderShowContainer = $('.wrap');
// var imgHeight = $sliderShowContainer.height();
// var imgWidth = $sliderShowContainer.width();
// var imgCount = 1080;
// var imgSrc = `https://unsplash.it/${imgWidth}/${imgHeight}/?image=${imgCount}`
var imgList = $sliderShowContainer.find('img');
console.log('imgList', imgList);
console.log('imgList[0]', $(imgList[0]));
$(imgList[0]).load(function() {
    //列表里的第一张图片加载完毕之后，为了得到图片的宽高
    new SliderShow($('.wrap'));
})

// for(var i = 0;i<imgList.length;i++){
//     var img = imgList
// }

new GoTop($('body'));

let $container = $('.portfolio-list'),
    $targetNode = $('.portfolio-list>li'),
    $loadMoreButton = $('.load-more'),
    WaterFullImage = $targetNode.find('img');

$(WaterFullImage[0]).load(function() {
    //初始列表里的第一张图片加载完毕后开始瀑布流布局
    new WaterFull($container, $targetNode, $loadMoreButton);
})