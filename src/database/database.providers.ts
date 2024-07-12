import { Sequelize } from 'sequelize-typescript';
import { Country } from 'src/countries/countries.model';
import { Pool } from 'src/pools/pools.model';
import { PurchaseToken } from 'src/purchase-token/purchase-token.model';
import { Tag } from 'src/tags/tags.model';
import { User } from 'src/users/users.model';


const port = Number(process.env.DB_PORT);
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: port,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });
      sequelize.addModels([
        User,
        Pool,
        Country,
        PurchaseToken,
        Tag,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];