import { useState } from "react";
import EditModal from "./EditModal";




function UserListTable({users, setUsers}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editModal, setEditModal] = useState(<></>);


    const handleEditOnClick = (e) => {
        setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} users={users} setUsers={setUsers} editUserId={parseInt(e.target.value)} />)
        setModalOpen(true);
    }

    const handleDeleteOnClick = (e) => {
        const userId = parseInt(e.target.value);
        
        setUsers(users.filter(user => user.id !== userId));

    }

    const handleModalOnClose = () => {
    setModalOpen(false);
  }

    const thAndTdStyle = (width = "70px") => ({
        paddig: "0px 10px",
        // widh: width, 이렇게 써야하지만 생략이 가능하다
        width,
        height: "30px",
        border: "1px solid #dbdbdb",
        textAlign: "center",
    });

    return <>
        <table style={{ boxSizing: 'border-box', border: '1px solid #dbdbdb', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th style={thAndTdStyle()}>ID</th>
                    <th style={thAndTdStyle("140px")}>USERNAME</th>
                    <th style={thAndTdStyle("240px")}>E-MAIL</th>
                    <th style={thAndTdStyle()}></th>
                    <th style={thAndTdStyle()}></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td style={thAndTdStyle()}>{user.id}</td>
                        <td style={thAndTdStyle("140px")}>{user.username}</td>
                        <td style={thAndTdStyle("240px")}>{user.email}</td>
                        <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleEditOnClick}>수정</button>}</td>
                        <td style={thAndTdStyle()}>{<button value={user.id} onClick={handleDeleteOnClick}>삭제</button>}</td>
                    </tr>
                ))}

            </tbody>
        </table>
        { modalOpen && editModal}
    </>
}

export default UserListTable