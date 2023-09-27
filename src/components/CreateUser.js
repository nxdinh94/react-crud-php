import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function CreateUser() {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState();


    const handleChange = (event) => {
        const name = event.target.name;
        console.log(name);
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));

    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(inputs !== ''){
            axios.post('http://localhost/api/user/save', inputs)
            .then(function(res){
                console.log(res.data);
                navigate('/');
            });
        }else {
            return;
        }
           
        
        // axios.post('http://localhost/api/', inputs);
    }

    return ( 
        <div>
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing='10' >
                    <tbody>
                        <tr>
                            <th><label>Name: </label></th>
                            <td><input 
                                    type="text" 
                                    name="name"
                                    onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th><label>Email: </label></th>
                            <td><input 
                                    type="text" 
                                    name="email"
                                    onChange={handleChange}/></td>
                        </tr>
                        <tr>
                            <th><label>Mobile: </label></th>
                            <td><input 
                                    type="text" 
                                    name="mobile"
                                    onChange={handleChange}/></td>
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

export default CreateUser;