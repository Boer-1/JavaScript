/*'use strict';
//es6特性：基于块作用域的"let"声明
const sentences = [
    {subject:'JavaScript',verb:'is',object:'great'},
    {subject:'Elephants',verb:'are',object:'large'},
];
//es6特性:对象解构
function say({subject,verb,object}){
    //es6特性：模板字符串
    console.log('${subject} ${verb} ${object}');
}
//es6特性：for..of
for (let s of sentences){
    say(s);
}


 */

'use strict';

var sentences = [{ subject: 'java', verb: 'is', object: 'great' }, { subject: 'elephants', verb: 'are', object: 'large' }];

function say(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    console.log("${subject} ${verb} ${object}");
}
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
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