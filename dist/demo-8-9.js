'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//DEMO-1
//即时调用函数表达式（IIFE）
/*
    自己打印出自己被调用的次数，而且次数不会被篡改；
    变量count被安全的隐藏在IIFE中
 */

var fx = function () {
    var count = 0;
    //此处一定是返回一个函数，如此，f才可以是个函数
    return function () {
        console.log('I have been called ' + ++count + ' time(s).');
    };
}();
//被调用共3次
fx();
fx();
fx();

//DEMO-2
//函数提升
//类似于var声明的变量，函数声明也会被提升至他们作用域的顶部
f(); //打印"f"
function f() {
    console.log('f');
}
//赋给变量的函数表达式不会被提升，他们的作用域规则跟变量的一样的
// ft();   //执行出错，ft不是一个函数
// let  ft = function (){
//     console.log('F');
// }

//DEMO-2
//maps
var u1 = { name: 'Cynthia' };
var u2 = { name: 'Jackson' };
var u3 = { name: 'Olive' };
var u4 = { name: 'James' };
//创建一个map对象
//不认识Map()导致转不成es5格式，尚未解决
var userRoles = new Map();
//使用set（）方法把user赋给role
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');
//或者直接创建
//const userRoles = new Map([[u1,User1],[u2,User2],[u3,'Admin3']]);

//链式调用set（）方法
// userRoles.set(u1,'User')
//     .set(u2,'User')
//     .set(u3,'Admin');
console.log(userRoles.get(u2)); //获取u2对应的值
console.log(userRoles.size); //返回map中元素的个数
//entries()可以以数组的方式，获取键值对
//用for...of循环来迭代
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = userRoles.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var u = _step.value;

        console.log(u.name);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = userRoles.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var r = _step2.value;

        console.log(r);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = userRoles.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var ur = _step3.value;

        console.log(ur[0].name + ':' + ur[1]);
    } //这里通过解构让迭代更自然
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
    for (var _iterator4 = userRoles.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            _u = _step4$value[0],
            _r = _step4$value[1];

        console.log(_u.name + ':' + _r);
    } //DEMO-3
    //Weak maps,用它来存储对象实例中的私有key
    //这个对象里边包含了两个方法
} catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
        }
    } finally {
        if (_didIteratorError4) {
            throw _iteratorError4;
        }
    }
}

var SecretHolder = function () {
    var secrets = new WeakMap();
    return function () {
        function _class() {
            _classCallCheck(this, _class);
        }

        _createClass(_class, [{
            key: 'setSecret',
            value: function setSecret(secret) {
                secrets.set(this, secret);
            }
        }, {
            key: 'getSecret',
            value: function getSecret(secret) {
                return secrets.get(this);
            }
        }]);

        return _class;
    }();
}();
var a = new SecretHolder();
var b = new SecretHolder();
a.setSecret('secret A');
b.setSecret('secret B');
console.log(a.getSecret());
console.log(b.getSecret());

//DEMo-4
//set : 不允许重复数据的集合
var roles = new Set();
//想添加一个user role，可以用add（）方法
roles.add('User')
//如果想把这个user变成管理员，可以继续调用add()方法
.add('Admin');
//set 也有 size 属性
console.log(roles.size);
//set 的优美之处在于，不需要在添加元素的时候检查set中是否已经有这个元素了。
//如果添加早已存在于set中的值，设么都不会发生
roles.add('User');
console.log(roles.size);
//删除role，用delete()方法，如果返回true则表示这个role咋set中，否则返回false
console.log(roles.delete('Admin'));
console.log(roles.delete('Admin'));

//DEMO-5
//异常处理和调用栈
//IIFE避免了外界访问此 IIFE 中的变量，而且又不会污染全局作用域
(function () {

    function a() {
        console.log('a:calling bx');
        b();
        console.log('a:done');
    }
    function b() {
        console.log('b:calling c');
        c();
        console.log('b:done');
    }
    function c() {
        console.log('c:throwing error');
        throw new Error('cx error');
        console.log('c:done');
    }
    function d() {
        console.log('d:calling cx');
        c();
        console.log('d:done');
    }
    try {
        a();
    } catch (err) {
        console.log(err.stack);
    }
    try {
        d();
    } catch (err) {
        console.log(err.stack);
    }
})();

//DEMO-6
//迭代器和生成器
(function () {
    var _marked = /*#__PURE__*/regeneratorRuntime.mark(rainbow);

    var book = ['I', 'Love', 'You'];
    //Object.values()返回一个数组，其元素是在对象上找到的可枚举属性值。
    //属性的顺序与通过手动循环对象的属性值所给出的顺序相同。
    var it = book.values();
    var current = it.next();
    while (!current.done) {
        console.log(current.value);
        current = it.next();
    }

    //迭代协议
    //:如果一个类提供了一个符号方法Symbol.iterator，这个方法返回一个具有
    // 迭代行为的对象，那么这个类就是可迭代的

    var Log = function () {
        function Log() {
            _classCallCheck(this, Log);

            this.message = [];
        }

        _createClass(Log, [{
            key: 'add',
            value: function add(message) {
                this.message.push({ message: message, timestamp: Date.now() });
            }
        }, {
            key: Symbol.iterator,
            value: function value() {
                return this.message.values();
            }
        }]);

        return Log;
    }();

    var log = new Log();
    log.add('I');
    log.add('Love');
    log.add('You');
    log.add('too~~');
    //像数组一样迭代
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = log[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var entry = _step5.value;

            console.log(entry.message + ' @ ' + entry.timestamp);
        }

        //可以编写自己的迭代器
        //斐波那契数列
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    var FibonacciSequence = function () {
        function FibonacciSequence() {
            _classCallCheck(this, FibonacciSequence);
        }

        _createClass(FibonacciSequence, [{
            key: Symbol.iterator,
            value: function value() {
                var a = 0,
                    b = 1;
                return {
                    next: function next() {
                        var rval = { value: b, done: false };
                        b += a;
                        a = rval.value;
                        return rval;
                    }
                };
            }
        }]);

        return FibonacciSequence;
    }();

    var fib = new FibonacciSequence();
    var i = 0;
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = fib[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var n = _step6.value;

            console.log(n);
            if (++i > 9) break;
        }

        //生成器
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                _iterator6.return();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    function rainbow() {
        return regeneratorRuntime.wrap(function rainbow$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return 'red';

                    case 2:
                        _context.next = 4;
                        return 'orange';

                    case 4:
                        _context.next = 6;
                        return 'yellow';

                    case 6:
                        _context.next = 8;
                        return 'green';

                    case 8:
                        _context.next = 10;
                        return 'blue';

                    case 10:
                        _context.next = 12;
                        return 'indigo';

                    case 12:
                        _context.next = 14;
                        return 'violet';

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _marked, this);
    }
    //rainbow生成器返回了一个迭代器，所以也可以对它使用for...of循环
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
        for (var _iterator7 = rainbow()[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var color = _step7.value;

            console.log(color);
        }
    } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                _iterator7.return();
            }
        } finally {
            if (_didIteratorError7) {
                throw _iteratorError7;
            }
        }
    }
})();

//DEMO-7
//IIFEs和异步代码
//计时器结果却让人失望
//var i;

var _loop = function _loop(i) {
    setTimeout(function () {
        console.log(i === 0 ? 'go!' : i);
    }, (5 - i) * 1000);
};

for (var i = 5; i >= 0; i--) {
    _loop(i);
}