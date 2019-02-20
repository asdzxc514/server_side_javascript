# Server Side Javascript 강좌
https://www.inflearn.com/course/nodejs-강좌-생활코딩


# Underscore js - Arrays
```js
var _ = require('underscore');  // underscore 모듈을 사용할거다~
var arr = [3, 6, 9, 1, 12];
```
  
`first` : 배열의 첫 번째 요소를 반환 `_.first(arr)`  
`last` : 배열의 마지막 요소를 반환 `_.last(arr)`  
`initial` : 배열의 마지막 항목을 제외한 모든 항목을 반환  `_.initial(arr)`  





# 동기(Synchronous : 동시에 일어나는)
동기는 말 그대로 동시에 일어난다는 뜻입니다.
바로 요청을 하면 시간이 얼마가 걸리던지 요청한 자리에서 결과가 주어져야 합니다.

- 요청과 결과가 한 자리에서 동시에 일어남
- A노드와 B노드 사이의 작업 처리 단위(transaction)를 동시에 맞추겠다.
- `장점` : 설계가 매우 간단하고 직관적임
- `단점` : 결과가 주어질 때 까지 아무것도 못하고 대기해야함

# 비동기(Asynchronous : 동시에 일어나지 않는)
비동기는 동시에 일어나지 않는다를 의미합니다.  
요청과 결과가 동시에 일어나지 않을거라는 약속입니다. 

- 요청한 그 자리에서 결과가 주어지지 않음
- 노드 사이의 작업 처리 단위를 동시에 맞추지 않아도 된다.
- `장점` : 결과가 주어지는데 시간이 걸리더라도 그 시간 동안 다른 작업을 할 수 있으므로 자원을 효율적으로 사용가능
- `단점` : 동기보다 복잡함

비동기는 요청이 들어와도 꿋꿋이 내가 하던 일을 한다. 들어온 요청은 맡겨버리고 "그 일 다끝나면 알려줘~" 하는 것이다.  
그러므로 **비동기는 수행되는 순서 및 시작과 끝을 알 수 없다.**  
동작방식은 메인스레드에서는 내가 하던일을 함과 동시에 요청받은 작업이 별도의 스레드에서 진행되는 거다.  
작업이 끝나면 "다 끝났어 가져가" 하며 콜백으로 알려준다. 이러한 방식에는 _델리게이트, 퓨처, 프로미스, 콜백_ 등이 있다. 


> 파일을 읽거나, 쓰기 처럼 오래걸리는 작업  
> ajax 통신작업  
> Dom의 이벤트 처리작업  
> 일정 시간 뒤에 동작을 해야 하는 작업  

```js
console.log('동기적 소스코드 시작...');

function run1(){
  console.log('run1 동작...');
}

function run2(){
  console.log('run2 동작...');
}

run1();
setTimeout(run2, 1000 * 3); // 3초 이후에 run2 함수를 실행 

console.log('동기적 소스코드 종료...');

//결과 
// "동기적 소스코드 시작..."
// "run1 동작..."
// "동기적 소스코드 종료..."
// "run2 동작..."
```

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
