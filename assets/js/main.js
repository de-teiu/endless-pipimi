window.onload = function () {
    var PIPIMI_PARTS = "　　　　　　　 |i:i:ｉ|i:i:i|　　　　　　 　 　 　 |i:i:|"

    var count = 0;

    var app = new Vue({
        el: '#app',
        data: {
            head: "aaaa",
            additionalText: [],
        },
        created: function () {
            this.info = "Requesting ...";
            var rq = new XMLHttpRequest();

            rq.onload = function (vm) {
                if (this.readyState === XMLHttpRequest.DONE) {
                    if (this.status === 200) {
                        vm.head = this.responseText;
                    } else {
                        vm.head = "Error!";
                    }
                }
            }.bind(rq, this);

            rq.open("GET", "/assets/pipimi.txt");
            rq.send();

            var startBlockCount = window.parent.screen.height / 18 + 20;
            for (var i = 0, j = startBlockCount; i < j; i++) {
                this.additionalText.push({ value: PIPIMI_PARTS });
            }
        },
        methods: {
            infiniteHandler($state) {
                this.additionalText.push({ value: PIPIMI_PARTS });
                $state.loaded();
            }
        }
    });
};