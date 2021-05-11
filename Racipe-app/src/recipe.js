import { v4 as uuidv4 }from 'uuid'
import moment from 'moment'

let recipes =  []

//this function load recipes from localstorage
 const loadRecipes = () => {
     const recipesJSON=localStorage.getItem('Recipes')

     try {
        return recipesJSON ? JSON.parse(recipesJSON) : []
    } catch (e) {
        return []
    } 
 }
//save recipes to localstorage
const saveRecipes = () => {
    localStorage.setItem('Recipes', JSON.stringify(recipes))
}

//expose recipes 
const getRecipes = () => recipes

//create recipes
const createRecipe = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    recipes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp,
        ingredients:[]
    })
    saveRecipes()

    return id
}

// Remove a recipe from the list
const removeRecipe = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)

    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}
const sortRecipes = (sortBy) => {
    if (sortBy === 'byEdited') {
        return recipes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return recipes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return recipes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return recipes
    }
}

recipes=loadRecipes()

const updateRecipe = (id, updates) => {
    const recipe = recipes.find((recipe) => recipe.id === id)

    if (!recipe) {
        return
    }

    if (typeof updates.title === 'string') {
        recipe.title = updates.title
        recipe.updatedAt = moment().valueOf()
    }

    if (typeof updates.body === 'string') {
        recipe.body = updates.body
        recipe.updatedAt = moment().valueOf()
    }

    saveRecipes()
    return recipe
}
export {loadRecipes,getRecipes,createRecipe,removeRecipe,sortRecipes,updateRecipe}