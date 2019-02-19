var _ = require('underscore');  // underscore 모듈을 사용할거다~
var arr = [3, 6, 9, 1, 12];

console.log(arr[0]);
console.log(_.first(arr));
console.log(arr[arr.length -1]);

console.log(_.last(arr));

console.log(_.initial(arr));