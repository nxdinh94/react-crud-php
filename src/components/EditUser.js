import { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function EditUser() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState('');

    const {id} = useParams();

    useEffect(()=>{
        getUser();
    }, [])

    function getUser(){
        axios.get(`http://localhost/api/user/${id}`)
        .then(function(res){
            setInputs(res.data[0]);
        });
    }
    const handleChange = (event) => {
        const name = event.target.name;
        
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputs !== ''){
            axios.put(`http://localhost/api/user/${id}/edit`, inputs)
            .then(function(res){
                navigate('/');
            });
        }else {
            return;
        }
           
        
        // axios.post('http://localhost/api/', inputs);
    }

    return ( 
        <div>
            <h1>Edit User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing='10' >
                    <tbody>
                        <tr>
                            <th><label>Name: </label></th>
                            <td><input 
                                    onChange={handleChange}
                                    value={inputs.name}
                                    type="text" 
                                    name="name"
                                    /></td>
                        </tr>
                        <tr>
                            <th><label>Email: </label></th>
                            <td><input 
                                    type="text" 
                                    value={inputs.email}
                                    onChange={handleChange}
                                    name="email"
                                    /></td>
                        </tr>
                        <tr>
                            <th><label>Mobile: </label></th>
                            <td><input 
                                    type="text" 
                                    value={inputs.mobile}
                                    onChange={handleChange}
                                    name="mobile"
                                    /></td>
                        </tr>
                        <tr>
                            <td align="right"><button>Save</button></td>
                        </tr>
                    </tbody>
                </table>
                
            </form>
        </div>
     );
}

export default EditUser;