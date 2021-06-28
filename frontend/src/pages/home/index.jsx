import React, { useState, useEffect } from 'react'

import { ContainerPage } from '../../components/main'


const API = process.env.REACT_APP_API;

export const Myclients = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [contact, setContact] = useState("");
 const [cep, setCep] = useState("");
 const [nation, setNation] = useState("");
 const [state, setState] = useState("");
 const [city, setCity] = useState("");
 const [district, setDistrict] = useState("");
 const [street, setStreet] = useState("");
 const [number, setNumber] = useState("");

 const [editing, setEditing] = useState(false);
 const [id, setId] = useState("");

 const nameInput = useRef(null);

 const handleSubmit = async (e) => {
    e.preventDefault();

    const deleteUser = async (id) => {
        const userResponse = window.confirm("Are you sure you want to delete it?");
        if (userResponse) {
          const res = await fetch(`${API}/users/${id}`, {
            method: "DELETE",
          });

      const data = await res.json();
      console.log(data);
      await getUsers();
    }
  };

  const editUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`);
    const data = await res.json();

    setEditing(true);
    setId(id);

    // Reset
    setName(data.name);
    setEmail(data.email);
    setPassword(data.password);
    setContact(data.contact);
    setCep(data.cep);
    setNation(data.nation);
    setState(data.state);
    setCity(data.city);
    setStreet(data.street);
    setNumber(data.number);
    nameInput.current.focus();
  };

  useEffect(() => {
    getUsers();
  }, []);

    return(
        <ContainerPage>
           
      <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>

              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button
                    className="btn btn-secondary btn-sm btn-block"
                    onClick={(e) => editUser(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm btn-block"
                    onClick={(e) => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContainerPage>
  );
};
        
