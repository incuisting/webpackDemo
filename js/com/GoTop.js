var $ = require('jquery')

function GoTop(ct) {
    this.ct = ct;
    this.target = $('<button class = "gotop">^</button>');
    this.bindEvent();
    this.createNode();
}
GoTop.prototype = {
    bindEvent: function() {
        var _this = this;
        this.target.on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
    },
    createNode: function() {
        this.target.css({
            position: "fixed",
            bottom: 20,
            right: 20
        });

        this.ct.css({
            position: "relative"
        }).
        append(this.target);
    }
};

module.exports = GoTop;