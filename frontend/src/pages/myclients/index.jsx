
import React, {useEffect} from 'react'

const API = process.env.REACT_APP_API;

export default function myClients () {
    
        

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
    
        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
        nameInput.current.focus();
      };

    useEffect(() => {
        getUsers();
      }, []);
      

      return (
        <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Senha</th>
              <th>Contato</th>
              <th>Cep</th>
              <th>País</th>
              <th>UF</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Logradouro</th>
              <th>Número</th>
              <th>Operations</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.contact}</td>
                <td>{user.cep}</td>
                <td>{user.nation}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td>{user.district}</td>
                <td>{user.street}</td>
                <td>{user.number}</td>
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
      )

}