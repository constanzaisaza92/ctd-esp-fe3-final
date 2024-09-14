import React, { useState } from "react";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Form = () => {
  const [{ error, data }, setState] = useState({});

  const submit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const error = data.name.trim().length < 5 || !validateEmail(data.email);
    setState({ error, data })
    return false;
  };

  return (
    <div>
      <form onSubmit={submit}>
          <input name="name" />
          <input name="email" />
          <input type="submit" />
      </form>
        
      {data && (
        <h1 className="mensajeValidacion">
          {!error 
            ? `Gracias ${data.name}, te contactaremos cuando antes vía mail`
            : "Por favor verifique su información nuevamente"
          }
        </h1>
      )}
    </div>
  );
};

export default Form;
