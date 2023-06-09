import React from "react";
import { useMeals, MealsList } from "../meals";
import { useIngredients, IngredientsList } from "../ingredients";
import { Link } from "react-router-dom";


export const HomePage = () => {
    const { meals, isLoading: isLoadingMeals, setMeals } = useMeals();
    const { ingredients, isLoading: isLoadingIngredients, setIngredients } = useIngredients();


    const onDeleteMeal = async(id) => {
        const response = await fetch('/meals/'+id, {method:"delete"});
        const updatedMeals = await response.json();
        setMeals(updatedMeals);
    }

    const onDeleteIngredient = async(name) => {
        const response = await fetch("/ingredients/"+name, {method:"delete"});
        const updatedIngredients = await response.json();
        setIngredients(updatedIngredients);
    }

    return (
        <div className="page-container">
            <div className="column">
                <MealsList
                    meals = {meals} 
                    isLoading = {isLoadingMeals}
                    onDelete={onDeleteMeal}/>
            </div>
            <div className="column">
                <IngredientsList 
                    isLoading={isLoadingIngredients}
                    ingredients={ingredients}
                    onDelete={onDeleteIngredient} />
                <Link to="/shopping-list">
                <button className="shopping-list-button list-container full-width">
                    Generate shopping list
                </button>
                </Link>
            </div>
        </div>
    );
}


// To run everything in app open mongosh, in server run server, in app run the application