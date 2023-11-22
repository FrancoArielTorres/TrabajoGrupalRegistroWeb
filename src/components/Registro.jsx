import React, { useState } from 'react';


const Registro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmPassword: '',
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formulario.password !== formulario.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    console.log('Formulario enviado:', formulario);
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <label className="formLabel">
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
          className="formInput"
        />
      </label>
      <br />
      <label className="formLabel">
        Apellido:
        <input
          type="text"
          name="apellido"
          value={formulario.apellido}
          onChange={handleChange}
          className="formInput"
        />
      </label>
      <br />
      <label className="formLabel">
        Email:
        <input
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          className="formInput"
        />
      </label>
      <br />
      <label className="formLabel">
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={formulario.telefono}
          onChange={handleChange}
          className="formInput"
        />
      </label>
      <br />
      <label className="formLabel">
        Contraseña:
        <input
          type="password"
          name="password"
          value={formulario.password}
          onChange={handleChange}
          className="formInput"
        />
      </label>
      <br />
      <label className="formLabel">
        Confirmar Contraseña:
        <input
          type="password"
          name="confirmPassword"
          value={formulario.confirmPassword}
          onChange={handleChange}
          className="formInput"
          />
          </label>
          <br/>
          <button type="submit" className="submitButton">
            Registrarse
          </button>
        </form>
      );
    };
    
    export default Registro;
    