## Nodejs
- 2009년 Ryan Dahl에 의해 **V8 엔진**으로 빌드. -> 속도가 빠름
- **event-driven 개발 방식**, **non-blocking IO 입출력** 방식 탑재. -> 성능이 좋음
- Web, Server 모두 js를 사용하기 때문에 하나의 완결된 application을 구현할 수 있다는 것이 특징.


<br>

### 1. RUN TIME
: **프로그램을 실행하는 환경**을 의미. Nodejs는 런타임 기술.
자바스크립트를 브라우저 외의 다른 환경에서도 사용할 수 있게 해주는 것.

<br>

### 2. 간단한 웹 앱 만들기
```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

![3](https://user-images.githubusercontent.com/87354210/172512438-167384ee-5fe7-477e-a4f2-753117f500f2.png)

<br>

### 3. 모듈
: 특정 기능을 하는 컴퓨터 시스템이나 프로그램의 단위.
<br>
**2. 간단한 웹 앱 만들기** 코드에서 http와 같은 것이 모듈.
<br>
http 모듈은 `http.createServer` 와 같은 메소드를 가지고 있고 각 메소드는 각자의 기능 수행.

<br>

`module.js`
```javascript
var o = require('os');
console.log(o.platform());
```

![4](https://user-images.githubusercontent.com/87354210/172513288-92daf255-9388-4ef2-beae-ca7ad0f7f93d.png)

<br>

### 4. NPM
: Node Package Manager의 약자.
"Node 계의 앱스토어".
<br>
모듈을 우리의 프로젝트에 설치, 삭제, 업그레이드, 의존성 관리 등의 manager 역할을 해줌.

ex. `npm install uglify-js` -> uglify: 코드를 minimize (압축) 시키는 모듈
<br>
만약 전역으로 설치한다면 `npm install uglify-js -g`

<br>

### 5. Dependency (의존성)
- `npm init` -> `package.json` 파일 생성.

> `package.json` 이란❓
: 패키지의 여러 정보들을 기록한 파일.

ex. `npm install underscore --save` -> dependencies 항목에 underscore 모듈이 추가됨.

<br>

![5](https://user-images.githubusercontent.com/87354210/172515168-0169fca7-7f25-4276-95cc-4c2b7e44d4b0.png)

❗[주의] 한번 의존성을 주입시켜주면 다른 곳에서도 적용이 됨.
<br>
> 💡 Dependency (의존성) 의 경우, 백엔드 로직에서 중요한 개념이기 때문에 숙지하는것이 좋다.

<br>

### 6. 동기와 비동기
**동기(Synchronous)**
- 순차적이고 직렬적 Task 수행
- 서버에 요청을 보냈을 때, 응답이 돌아와야 다음 동작 수행 가능

**비동기(Asynchronous)**
- 병렬적 Task 수행
- 서버에 요청을 보냈을 때, 응답 상태와 상관없이 다음 동작 수행 가능

> ✔️ 비동기적 방식은 동기적 방식보다 프로세스 자체는 복잡할 수 있음.   그러나 어떠한 응답이 주어질 때까지 시간이 소요된다고 했을 때 그 시간동안 다른 작업을 할 수 있기 때문에 더 효율적인 방식.

```javascript
var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'UTF8'});
console.log(data);

// Async
console.log(2);
fs.readFile('data.txt', {encoding:'UTF8'}, function(err, data) {
  console.log(data);
})
```

<br>

### 7. Express

- Express란? 
 : 서버 쪽 어플리케이션을 좀 더 쉽게 구현시켜주는 웹 프레임워크(Framework)
 
 > 💡Framework : 일정한 형태의 틀과 부품, 규약 등을 미리 제공하고 조립이 끝났을 때는 
> <br>
> 어떤 하나의 결과물이 탄생하게 되는 것
> <br>
> ex. Spring, Django, Ruby on Rails

<br>

설치
 :`npm install --save express`
 
 #### Express를 활용한 간단한 웹 앱
`app.js`

```javascript
var express = require('express');
var app = express();
app.listen(3000, function() {
    console.log('Connected 3000 port!');
});
```
- Router : `get('/')`, `get('/login')` 과 같이 알맞은 주소값을 연결시켜주는 메소드
- http 요청 메서드 : `GET, POST, PUT, DELETE`

<br>

### 8. 정적, 동적 웹 프로그래밍
- **정적 프로그래밍(Static)**
: 이미지, css, javascript 파일 등의 컨텐츠를 그대로 전달. (고정 이미지)

- **동적 프로그래밍(Dynamic)**
: 조금 더 프로그래밍적으로 접근하는 방식. 매번 새로운 내용을 표시해주고 변경도 가능.

<br>

#### 정적파일 서비스하기
`app.js`

```javascript
var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/', function(req, res){
    res.send('Hello home page');
});
app.get('/login', function(req, res){
    res.send('Login please');
});
app.listen(3000, function() {
    console.log('Connected 3000 port!');
});
```

<br>

#### 동적으로 웹 서비스하기
`app.js`

```javascript
app.get('/dynamic', function(req, res) {
    var output = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title></title>
      </head>
      <body>
        Hello Dynamic!
      </body>
    </html>`;
    res.send(output);
})
```
