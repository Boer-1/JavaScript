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