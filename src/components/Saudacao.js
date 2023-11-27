function Saudacao({ nome }) {

    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bom? `;
    }

  return (
    <>
      <p>{gerarSaudacao(nome)}</p>
    </>
  );
}

export default Saudacao;
