import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../users/users.entity';
import { Vendor } from '../../vendor/vendor.entity';
import { Work } from '../../works/works.entity';
import { WorkSteps } from '../../work-steps/work-steps.entity';
import { WorkProducts } from '../../work-products/work-products.entity';
import { Products } from '../../products/products.entity';
import { QaulityControl } from '../../quality-control/quality-control.entity';
import { Images } from '../../images/images.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV as any) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);

      sequelize.addModels([
        User,
        Vendor,
        Work,
        WorkSteps,
        WorkProducts,
        Products,
        QaulityControl,
        Images,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
