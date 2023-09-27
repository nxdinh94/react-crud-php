import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser(){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers(){
        axios.get('http://localhost/api/users/')
        .then(function(res){
            setUsers(res.data);
        });
    }

    const deleteUser = (userId) =>{
        axios.delete(`http://localhost/api/user/${userId}/delete`)
        .then(function(res){
            getUsers();
        })
    }

    return (
        <div>
            <h1>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`}
                                    style={{marginRight:'10px'}}>Edit</Link>
                                <button onClick={()=>{deleteUser(user.id)}}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        
    );
}