async function sequential() {
    const a = await fetchA();  // 1초
    const b = await fetchB();  // 2초
    const c = await fetchC();  // 1.5초
    console.log(a, b, c);
}
// 총 소요 시간: ___초

// 방식 B: 동시 실행
async function parallel() {
    const [a, b, c] = await Promise.all([fetchA(), fetchB(), fetchC()]);
    console.log(a, b, c);
}
// 총 소요 시간: ___2초

function Ex10() {

   return (
        <>
           
        </>
    )
}

export default Ex10;