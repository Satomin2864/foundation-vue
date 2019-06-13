var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue.js!',
        list: ["りんご", "ゴリラ", "ラッパ"],
        count: 0,
        show: true,
        methods: {
            handleClick: function(event) {
                alert(event.target)
            }
        }
    }
})