var $ = require('jquery')

function WaterFull($container, $targetNode, $loadMoreButton) {
    this.$container = $container;
    this.$targetNode = $targetNode;
    this.$loadMoreButton = $loadMoreButton;
    this.col_height_array = [];
    this.node_width;
    this.col_num;
    this.is_data_arrivel = true;
    this.cur_page = 1;
    this.per_page_count = 5;
    this.init();
    this.bind();
}
WaterFull.prototype = {
    init: function() {
        var _this = this;
        this.computed_size();
        $.each(_this.$targetNode, function(index, $node) {
            console.log('$node', $node);
            _this.water_fall($($node));
        })
    },
    bind: function() {
        var _this = this
        this.$loadMoreButton.on('click', function() {
            _this.get_data(function(news_data) {
                console.log(news_data);
                _this.is_data_arrivel = true;

                $.each(news_data, function(index, news) {
                    var $node = _this.render_node(news);
                    console.log('渲染好的', $node);
                    $node.find('img').load(function() {
                        console.log('img is load');
                        _this.$container.append($node);
                        console.log($node, 'loaded...');
                        _this.water_fall($node);
                    });
                });
            });
            is_data_arrivel = false;
        })
    },
    computed_size: function() {
        var _this = this;
        this.node_width = this.$targetNode.outerWidth(true);
        console.log('this.node_width', this.node_width);
        this.col_num = parseInt(this.$targetNode.parent().width() / this.node_width);
        this.col_height_array = [];
        for (let i = 0; i < this.col_num; i++) {
            _this.col_height_array[i] = 0;
        }
    },
    water_fall: function($node) {
        var _this = this;

        var min_number = Math.min.apply(null, this.col_height_array);
        console.log('min_number', min_number);
        var index = this.col_height_array.indexOf(min_number);
        console.log('index', index);
        $node.css({
            left: index * _this.node_width,
            top: min_number
        });
        this.col_height_array[index] = this.col_height_array[index] + $node.outerHeight(true);

        _this.$container.height(Math.max.apply(null, _this.col_height_array));
        console.log('col_height_array', this.col_height_array);
        console.log('瀑布流布局了');
    },
    get_data: function(callback) {
        var _this = this;
        $.ajax({
            url: 'http://platform.sina.com.cn/slide/album_tech',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: {
                app_key: '1271687855',
                num: _this.per_page_count,
                page: _this.cur_page
            }
        }).done(function(respones) {
            if (respones && respones.status && respones.status.code === '0') {
                callback(respones.data);
                _this.cur_page++;
            } else {
                console.log('erro')
            }
        });
    },
    render_node: function(data) {
        let temple = `<li>
                    <div class="cover">
                        <a class="cover-plus icon-plus" href="${data.url}"></a>
                        <img src="${data.img_url}" alt="">
                    </div>
                    <h5>${data.short_name}</h5>
                    <p>${data.short_intro}</p>
                	</li>`;
        return $(temple);
    }
}
module.exports = WaterFull;