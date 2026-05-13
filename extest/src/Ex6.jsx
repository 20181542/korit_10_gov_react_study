
function fetchA() { return new Promise(res => setTimeout(() => res("A 데이터"), 1000)); }
function fetchB() { return new Promise(res => setTimeout(() => res("B 데이터"), 2000)); }
function fetchC() { return new Promise(res => setTimeout(() => res("C 데이터"), 1500)); }

// Promise.all을 사용하여 3개 동시 실행
// 모든 결과를 배열로 출력
// 총 소요 시간: 약 2초 (가장 느린 것 기준)

// 출력: ["A 데이터", "B 데이터", "C 데이터"]
const arr = await Promise.all([fetchA(), fetchB(), fetchC()]);

console.log(arr);

function Ex6() {

   return (
        <>
           
        </>
    )
}

export default Ex6;