const Cake = ({cake}) => {

  return (

    <div>
      <p><b>Cake:</b> {cake.cakeName}</p>
      <p><b>Rating:</b> {cake.rating}</p>
      <ul>{cake.ingredients.map(ingredient => {
        return<li>{ingredient}</li>})}</ul>
      <p><b>Price:</b> £{cake.price}</p>
      <hr />

    </div>

  )
}

export default Cake;