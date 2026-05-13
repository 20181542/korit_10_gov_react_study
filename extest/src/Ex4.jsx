Promise.resolve("hello")
    .then(str => str.toUpperCase())
    .then(str => {
        throw new Error("강제 에러 발생!");
    })
    .then(str => console.log("여기 실행될까?"))
    .catch(str => console.log("에러잡음: " + str.message))
    .finally(str => console.log("항상실행"))
    
    // .catch() 추가하시오
    // .finally() 추가하시오

// 출력:
// "에러 잡음: 강제 에러 발생!"
// "항상 실행!"

function Ex4() {

   return (
        <>
           
        </>
    )
}

export default Ex4;