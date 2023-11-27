import { useState } from 'react'

function Forms() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name)
    console.log(password)
    console.log(`Cadastrou o Usuário`);
  }

  const [name, setName] = useState()
  const [password, setPassord] = useState()

  return (
    <div>
      <h1>Meu cadastro: </h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input 
          type="text"
          id="name"
          name="name" 
          placeholder="Digite o seu nome: " 
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha: "
            onChange={(e)=>setPassord(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" placeholder="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Forms;
