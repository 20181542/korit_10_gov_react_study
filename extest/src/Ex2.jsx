
function checkPositive(num) {
    return new Promise((resolve, reject) => {
        if (num >= 0) {
            resolve("양수입니다: " + num);
        } else {
            reject("음수입니다: " + num);
        }
    });
}

checkPositive(5).then(msg => console.log(msg));   // "양수입니다: 5"
checkPositive(-3).catch(err => console.log(err));  // "음수입니다: -3"



function EX1() {

   return (
        <>
           
        </>
    )
}

export default EX1;