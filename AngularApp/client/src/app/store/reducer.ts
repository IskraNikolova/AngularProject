import { combineReducers } from 'redux';
import { IAppState } from './app.state';

import { adminReducer } from './admin/admin.reducer';
import { usersReducer } from './users/users.reducer';
import { coreReducer } from './core/core.reducer';
import { statsReducer } from './stats/stats.reducer';
import { productsReducer } from './products/products.reducer';

export const reducer = combineReducers<IAppState>({
    admin: adminReducer,
    core: coreReducer,
    users: usersReducer,
    stats: statsReducer,
    products: productsReducer
});