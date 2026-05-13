function fetchA() { return new Promise(res => setTimeout(() => res("A 데이터"), 1000)); }
function fetchB() {
    return new Promise((res, rej) => setTimeout(() => rej("B 실패!"), 2000));
}
function fetchC() { return new Promise(res => setTimeout(() => res("C 데이터"), 1500)); }


Promise.all([fetchA(), fetchB(), fetchC()])
  .then(results => console.log(results))
  .catch(err => console.log(err));

// 출력: B 실패!
// ★ Promise.all은 하나라도 실패하면 전체 실패! catch로 빠진다.

function Ex7() {

   return (
        <>
           
        </>
    )
}

export default Ex7;