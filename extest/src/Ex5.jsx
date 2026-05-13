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

fetchUser(3).then(
        user => console.log(user)
);
    
// (1초 후) { id: 3, name: "유저3", age: 23 }

fetchUser(-1).catch(err => console.log(err));
// (1초 후) "유효하지 않은 ID"

function Ex5() {

   return (
        <>
           
        </>
    )
}

export default Ex5;