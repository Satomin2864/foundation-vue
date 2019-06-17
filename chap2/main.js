var app = new Vue({
    el: '#app',
    data: {
        // オブジェクトデータ
        // message: {
        //     value: "Hello Vue.js"
        // },
        // 配列データ
        message: "Hello Vue.js",
        list: ["りんご", "ゴリラ", "ラッパ"],
        // 別のデータを使用してlistから取り出す要素を動的に
        num:1,
        scroll: 0,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        // オブジェクトでまとめると分かりやくすて便利
        classObject: {
            child: true,
            'is-active': false
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },

        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '商品1サムネイル',
            width: '200',
            height: '200'
        },
        radius: 50
    },
    mounted: function() {
        this.scroll = 100 // 要素のスクロール量を操作
    },
    methods: {
        // ボタンをクリックした時のハンドラ
        increment: function() {
            // thisを付けることで、生成されたインスタンスの値を参照できる
            this.count += 1 // 処理は再代入するだけでおk
        }
    }
})