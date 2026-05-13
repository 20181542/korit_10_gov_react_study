function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId <= 0) {
                reject("유효하지 않은 ID");
            } else {
                resolve({ id: userId, name: "유저" + userId, age: 20 + userId });
            }
        }, 1000);
    });
}

async function getUser() {
    try {
        const user = await fetchUser(-1);
        console.log(user);
    } catch {
        console.log("완료")
    }

    const user = await fetchUser(-1);
    console.log(user);
    // fetchUser(-1) 호출
    // 에러 발생 시 "에러: 유효하지 않은 ID" 출력
    // 성공/실패 상관없이 "완료" 출력
}
getUser();

function Ex9() {

    return (
        <>

        </>
    )
}

export default Ex9;