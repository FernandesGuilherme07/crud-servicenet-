import React, { useState, useRef } from "react";

import  { Cad } from './styled'

const API = process.env.REACT_APP_API;

 export const Users = () => {
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

  let [Users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editing) {
      const res = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          contact,
          cep,
          nation,
          state,
          city,
          district,
          street,
          number,
        }),
      });
      await res.json();
    } else {
      const res = await fetch(`${API}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          contact,
          cep,
          nation,
          state,
          city,
          district,
          street,
          number,
        }),
      });
      const data = await res.json();
      console.log(data);
      setEditing(false);
      setId("");
    }
    await getUsers();

    setName("");
    setEmail("");
    setPassword("");
    setContact("");
    setCep("");
    setNation("");
    setState("");
    setCity("");
    setDistrict("");
    setStreet("");
    setNumber("");
    nameInput.current.focus();
  };

  const getUsers = async () => {
    const res = await fetch(`${API}/users`);
    const data = await res.json();
    setUsers(data);
  };



  return (
    <Cad>
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="card card-body">
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              placeholder="Nome"
              ref={nameInput}
              autoFocus
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="form-control"
              placeholder="senha"
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              onChange={(e) => setContact(e.target.value)}
              value={contact}
              className="form-control"
              placeholder="contato"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setCep(e.target.value)}
              value={cep}
              className="form-control"
              placeholder=" cep"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setNation(e.target.value)}
              value={nation}
              className="form-control"
              placeholder="País"
            />

          </div>
          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              value={state}
              className="form-control"
              placeholder="UF"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className="form-control"
              placeholder="cidade"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setDistrict(e.target.value)}
              value={district}
              className="form-control"
              placeholder="Bairro"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setCep(e.target.value)}
              value={street}
              className="form-control"
              placeholder="logradouro"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              className="form-control"
              placeholder="número"
            />
          </div> 
          <button className="btn btn-primary btn-block">
            {editing ? "Update" : "Create"}
          </button>
         </form>
            </div>
    </Cad>
)

}