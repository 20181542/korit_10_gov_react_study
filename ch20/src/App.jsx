
function App() {
  // resolve: 성공 , reject: 오류
  //new Promise 생성은 동기
  new Promise((resolve, reject) => {
    console.log(7);
    if (false) {
      resolve("성공데이터");
    } else {
      reject(new Error ("실패데이터"));
    }
  }).then((value) => {
    // then은 비동기
    //resolve 호출로 then이 큐에 줄을 선다
    //resolve 가 없으면 then은 호출이 안됨
    console.log(8);
    console.log(value);

  }).catch((reason) => {
    // false 이기때문에 8호출 안되고 9가 호출됨
    // catch는 reject때 호출됨
    //-----------------
    // 11호출보다 늦게 9가 호출됨 우선순위 레벨이 11보다 낮음. 위치상의 레벨이 낮은것임. catch().then()순서이면 catch가 우선순위가 높다.
    console.log(9);
    console.log(reason);
    
  });

  new Promise((resolve, reject) => {
    console.log(10);
    if (true) {
      resolve();
    } else {
      reject();
    }
  }).then(() => {
    // then은 비동기
    //resolve 호출로 then이 큐에 줄을 선다
    //resolve 가 없으면 then은 호출이 안됨
    console.log(11);

  }).catch(() => {
    // catch는 reject때 호출됨
    console.log(12);
  });


  //비동기를 쓰는 이유:
  console.log(1); // 동작하는데 10초
  console.log(2); // 동작하는데 1시간
  console.log(3); // 동작하는데 30분
  console.log(4); // 동작하는데 1초
  //console.log(4)가 실행되는데 1시간30분 11초가 걸린다

  //동기 들이우선순위가 비동기보다 높다 그래서 동기가 먼저실행된다
  setTimeout(() => {
    console.log(5);
  }, 5000);
  setTimeout(() => {
    console.log(6);
  }, 2000);

  

   return (
        <>
            홈 
        </>
    )
}

export default App;