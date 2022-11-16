import { Action, ActionReducer } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListState } from './shopping-list-store.interface';
import * as ShoppingListActions from './shopping-list.action';

const initialState: ShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const updatedIngredient = {
        ...state.ingredients[state.editedIngredientIndex],
        ...action.payload,
      };
      const existingIngredients = [...state.ingredients];
      existingIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: existingIngredients,
        editedIngredientIndex:-1,
        editedIngredient:null
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      let ingredients = [...state.ingredients];
      ingredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients,
        editedIngredientIndex:-1,
        editedIngredient:null
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredientIndex: -1,
        editedIngredient: null,
      };
    default:
      return state;
  }
}
