async function fetchUser(id) {
    return { id, name: `유저${id}` };
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

fetchAllUsers([1, 2, 3]).then(users => console.log(users));
// [{ id:1, name:"유저1", ... }, { id:2, ... }, { id:3, ... }]


function Ex11() {

   return (
        <>
           
        </>
    )
}

export default Ex11;