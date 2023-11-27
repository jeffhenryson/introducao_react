import Item from './Item'

function List() {
  return (

    <>
    
      <h1>Minha lista</h1>
      <ul>
        <Item marca = "Ferrari" ano_lancamento = {1985}/>
        <Item marca = "Honda" ano_lancamento = {2021}/>
        <Item marca = "Honda" ano_lancamento = {2021}/>
        <Item ano_lancamento = {2021}/>
        <Item marca = "Fiat"/>
      </ul>
    </>

  )
}

export default List;
