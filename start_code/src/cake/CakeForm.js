import { useState} from "react";

const CakeForm = ({onCakeSubmission}) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [ingredients, setIngredients] = useState("");



const updateCakeName=(event) => {
    setName(event.target.value);
 }

const updateCakePrice=(event) => {
    setPrice(event.target.value);
 }

const updateCakeRating=(event) => {
    setRating(event.target.value);
 }

const updateCakeIngredients=(event) => {
    const ingredientsAsArray = event.target.value.split(',').map((ingredient) => ingredient);       //chatgpt; recap logic, only partially understand.
    setIngredients(ingredientsAsArray);
    console.log(ingredientsAsArray);
 }

 const handleFormSubmit=(event) => {
    event.preventDefault(); 

    const newCake = {
        cakeName: name, 
        ingredients: ingredients,
        price: price, 
        rating: rating,
        id: Date.now()
    }

    setName("");
    setIngredients("");
    setPrice("");
    setRating("")
    onCakeSubmission(newCake)
;
    console.log(newCake);

 }

 

return (

    <section>
<h2>Add your cake here:</h2>
<form onSubmit={(event) => handleFormSubmit(event)}>
                <label htmlFor="cake-input">Cake Name:</label>
                <input 
                type="text"
                id="cake-input"
                onInput={(event) => updateCakeName(event)}
                value={name}
                />
                <label htmlFor="price-input">Price:</label>
                <input 
                type="number"
                id="price-input"
                onInput={(event) => updateCakePrice(event)}
                value={price}
                />
                <label htmlFor="rating-input">Rating:</label>
                <input 
                type="number"
                id="rating-input"
                onInput={(event) => updateCakeRating(event)}
                value={rating}
                />
                <label htmlFor="ingredient-input">Enter ingredients <note>seperated by commas :</note></label>
                <input 
                type="text"
                id="ingredient-input"
                onInput={(event) => updateCakeIngredients(event)}
                value={ingredients}
                />
                <input type="submit" value="Add New User"/>
            </form>
    </section>
)

}

export default CakeForm;






