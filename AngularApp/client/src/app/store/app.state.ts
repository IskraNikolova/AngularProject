import { IAdminState } from './admin/admin.state';
import { IUsersState } from './users/users.state';
import { ICoreState } from './core/core.state';
import { IStatsState } from './stats/stat.state';
import { IProductsState } from './products/products.state';

export interface IAppState{
    admin: IAdminState,
    users: IUsersState,
    core: ICoreState,
    stats: IStatsState,
    products: IProductsState
}