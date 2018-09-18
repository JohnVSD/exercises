
var json = [
    {
        "id": "1",
        "name": "家用电器",
        "chindren": [
            {
                "id": "4",
                "name": "大家电",
                "chindren": [
                    {
                        "id": "7",
                        "name": "空调",
                        "chindren": [
                            { "id": "15", "pid": "7", "name": "海尔空调" },
                            { "id": "16", "pid": "7", "name": "美的空调" }
                        ]
                    },
                    {
                        "id": "8",
                        "name": "冰箱"
                    },
                    {
                        "id": "9",
                        "name": "洗衣机"
                    },
                    {
                        "id": "10",
                        "name": "热水器"
                    }
                ]
            },
            {
                "id": "5",
                "name": "生活电器",
                "chindren": [
                    { "id": "19", "name": "加湿器" },
                    { "id": "20", "name": "电熨斗" }
                ]
            }
        ]
    },
    {
        "id": "2",
        "name": "服饰",
        "chindren": [
            { "id": "13", "name": "男装" },
            { "id": "14", "name": "女装" }
        ]
    },
    {
        "id": "3",
        "name": "化妆",
        "chindren": [
            { "id": "11", "name": "面部护理" },
            { "id": "12", "name": "口腔护理" }
        ]
    }
]

function tree(data) {
    // if( data.chindren ){
    //   return data
    // }

    for (var i in data) {
        var item = data[i]
        // console.log(item)
        // if (!item.chindren){ 
        // console.log("=========")
        // console.log( item.id )
        // console.log( item.name )
        // return item 
        // }
        console.log(item.id, item.name)
        // console.log( item.name )
        tree(item.chindren)
    }
}

tree(json)