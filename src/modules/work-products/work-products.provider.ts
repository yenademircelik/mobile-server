import { WORKPRODUCTS_REPOSITORY } from '../core/constants';
import { WorkProducts } from './work-products.entity';

export const workProductsProvider = [
  {
    provide: WORKPRODUCTS_REPOSITORY,
    useValue: WorkProducts,
  },
];
