var $ = require('jquery')

function Slider($container) {
    this.$container = $container;
    this.init();
    this.bind();
}

Slider.prototype.init = function() {
    var $content = this.$content = this.$container.find('.content'),
        $pre = this.$pre = this.$container.find('.arrow.pre'),
        $next = this.$next = this.$container.find('.arrow.next'),
        $content_li = this.$content_li = this.$content.find('li'),
        $label = this.$label = this.$container.find('.label li'),

        img_count = this.img_count = 0,
        // $content_li.width()
        img_length = this.img_length = $content_li.length + 2,
        img_width = this.img_width = (1 / img_length) * 100 + '%';

    console.log("img_width", img_width);
    $content.append($content_li.first().clone());
    $content.prepend($content_li.last().clone());
    $content.css('height', 100 + '%')
    this.$container.find('.content li').css({
        width: img_width,
        height: 100 + '%'
    });
    $content.css({
        width: img_length * 100 + '%',
        left: -100 + '%'
    });
}

Slider.prototype.bind = function() {
    var _this = this;
    this.$pre.on('click', function() {
        _this.pre();
    });

    this.$next.on('click', function() {
        _this.next();
    });
}
Slider.prototype.pre = function() {
    var _this = this;
    this.$content.animate({
        left: '+=' + 100 + '%'
    }, function() {
        _this.img_count--;
        if (_this.img_count < 0) {
            _this.img_count = _this.$content_li.length - 1;
            _this.$content.css('left', -_this.img_length * 100 + 200 + '%');
        }
        _this.changeLabel();
    });
}
Slider.prototype.next = function() {
    var _this = this;
    _this.$content.animate({
        left: '-=' + 100 + '%'
    }, function() {
        _this.img_count++;
        if (_this.img_count > _this.$content_li.length - 1) {
            _this.img_count = 0;
            _this.$content.css('left', -100 + '%');
        }
        _this.changeLabel();
    });
}
Slider.prototype.changeLabel = function() {
    this.$label.removeClass('active')
        .eq(this.img_count)
        .addClass('active');
    console.log(1);
}

module.exports = Slider;