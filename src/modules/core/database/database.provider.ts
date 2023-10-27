import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../users/users.entity';
import { Vendor } from 'src/modules/vendor/vendor.entity';
import { Work } from 'src/modules/works/works.entity';
import { WorkSteps } from 'src/modules/work-steps/work-steps.entity';
import { WorkProducts } from 'src/modules/work-products/work-products.entity';
import { Products } from 'src/modules/products/products.entity';
import { QaulityControl } from 'src/modules/quality-control/quality-control.entity';

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
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
