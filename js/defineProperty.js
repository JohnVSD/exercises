// defineProperty() 数据属性练习
var obj = {
	name: "王春伟",
	sayname: function () {
		console.log(this.name)
	}
}

Object.defineProperty(obj, 'name', {
	configurable: true,	// 是否可以使用delete方法删除属性  是否可配置
	enumerable: true,	 // 是否可以使用 for-in 方法获取到 key 是否可枚举
	writable: false,	// 是否可以修改属性值	是否可写
	value: "你好，王春伟"
})

obj.name = "wo不好"
console.log(obj)

// 访问器属性 getter、setter
var book = {
	_year: 2004,
	edition: 1
}

Object.defineProperty(book, 'year', {
	// configurable: false,
	get: function () {
		return this._year
	},
	set: function (value) {
		if (value > 2004) {
			this._year = value;
			this.edition += value - 2004
		}
	}
})

book.year = 2005
console.log(book)

// 读取对象属性
var descriptor = Object.getOwnPropertyDescriptor(book, 'year');
console.log(descriptor)