async function fetchAllUsersParallel(ids) {
    const promises = ids.map(id => fetchUser(id));
    const users = await Promise.all(promises);
    return users;
}
async function fetchAllUsers(ids) {
    const users = [];
   for (let i = 0; i < ids.length; i++) {
        const user = await fetchUser(ids[i]);
        users.push(user);
   }
    // for문 + await로 순차 조회
    // 각 유저를 users에 push
    return users;
}

async function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: `유저${id}` }), 1000); 
    });
}
fetchAllUsers([1, 2, 3]).then(users => console.log(users));
fetchAllUsersParallel([1, 2, 3]).then(users => console.log(users));

function Ex12() {

   return (
        <>
           
        </>
    )
}

export default Ex12;