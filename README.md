# Server Side Javascript


# Arrays
```js
var _ = require('underscore');  // underscore 모듈을 사용할거다~
var arr = [3, 6, 9, 1, 12];
```
  
`first` : 배열의 첫 번째 요소를 반환 `_.first(arr)`  
`last` : 배열의 마지막 요소를 반환 `_.last(arr)`  
`initial` : 배열의 마지막 항목을 제외한 모든 항목을 반환  `_.initial(arr)`  

# Sync 동기, Async 비동기

```js
var fs = require('fs');

// Sync
console.log(1);
var dataaa = fs.readFileSync('data.txt', {encoding: 'utf-8'});
console.log(dataaa);

// Async
console.log(2);

// readFile 실행해라~ 백쪽에 넘김,  바로 빠져나가서 다음작업을 한 후 안에 내용 실행
fs.readFile('data.txt', {encoding: 'utf-8'}, function(err, data){  
    console.log(3);
    console.log(dataaa);
});

console.log(4);  

// 결과 : 1, (data.txt 내용), 2, 4, 3, (data.txt 내용)
```

Async 비동기

시간이 10분 걸리는 작업을 동기적으로 처리하면 그 10분 동안 다른 작업을 아무것도 할 수 없고, 작업이 완료 후에 또 다른 작업을 할 수 있는데 비동기적으로 처리할 시 작업이 다 처리된 것은 아니지만 다른 시스템에 위임했기 때문에 곧바로 다른 작업을 할 수 있다.  
node.js의 **반응속도가 빠르다는 장점**은 있지만 단점 역시 존재하기 때문에 상황에 따라 적절한 SW를 사용해야 한다.
