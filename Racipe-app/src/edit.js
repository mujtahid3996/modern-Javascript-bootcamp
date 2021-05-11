import { initializeEditPage, generateLastEdited } from './views'
import { updateRecipe, removeRecipe } from './recipe'

const titleElement = document.querySelector('#Recipe-title')
const bodyElement = document.querySelector('#Recipe-body')
const removeElement = document.querySelector('#remove-recipe')
const dateElement = document.querySelector('#last-edited')
const recipeId = location.hash.substring(1)

initializeEditPage(recipeId)

titleElement.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        title: e.target.value
    })
    dateElement.textContent = generateLastEdited(recipe.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    const recipe = updateRecipe(recipeId, {
        body: e.target.value
    })
    dateElement.textContent = generateLastEdited(recipe.updatedAt)
})

removeElement.addEventListener('click', (e) => {
    removeRecipe(recipeId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'Recipes') {
        initializeEditPage(recipeId)
    }
})