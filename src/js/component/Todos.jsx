import React, { useState, useEffect } from "react";

const Todos = () => {
  const [todos, setTodos] = useState();

  const url = 'https://jsonplaceholder.typicode.com/todos';
  const requestOptions = { method: 'GET' };
  const fetchApi = async () => {
    const response = await fetch(url, requestOptions);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container">
      <h3>Consumiendo API</h3>
      <p className="alert alert-primary">Fuente: {url}</p>
      <ul className="list-group list-group-flush">
        { !todos ? 'Cargando los datos desde la url ...' :
            todos.map((todo, index) => {
                return <li key={index} className="list-group-item">
                  {todo.id} - {todo.title} - user_{todo.userId} - {todo.completed ? "Terminada" : "Pendiente"}
                </li>
            })
        }
      </ul>
    </div>
  );
}

export default Todos;