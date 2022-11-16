import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from '../auth/store/auth-store.interface';
import { authReducer } from '../auth/store/auth.reducer';
import { ShoppingListState } from '../shopping-list/store/shopping-list-store.interface';
import { shoppingListReducer } from '../shopping-list/store/shopping-list.reducer';

export interface AppState {
  shoppingList: ShoppingListState;
  auth: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
};
