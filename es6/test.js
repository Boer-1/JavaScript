`use strict`;
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
//我擦擦，换了重音符，他竟然好了！

const sentences = [
    {subject:`java`,verb:`is`,object:`great`},
    {subject: `elephants`,verb: `are`,object: `large`},
];

function say({subject,verb,object}){
    console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
    say(s);
}