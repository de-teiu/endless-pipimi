window.onload = function () {
    var count = 0;

    var app = new Vue({
        el: '#app',
        data: {
            head: "",
            data: [],
        },
        created: function () {
        },
        methods: {
            loadMore: function () {

                for (var i = 0, j = 100; i < j; i++) {
                    this.data.push({ value: "|| ||" });
                }
            }
        }
    });
};