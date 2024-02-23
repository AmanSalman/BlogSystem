import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_Blogsystem', 'freedb_AmanSalman', 'Fa&%f6X5Utj98fs', {
    host: 'sql.freedb.tech',
    port:'3306',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
  });

  export const connectDB = async ()=>{
    try{
        return await sequelize.sync({alter: true,force: true});
    } catch (error){
        console.log(`error in connectDB: ${error}`);
    }
    
  }

  export const testDBConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
