import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:procces.env.DB_HOST,
        dialect:procces.env.DB_DIALECT,
        port:3007

    }

);

export const initDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('Conexión a MySQL establecida');
        await sequelize.sync();
    } catch (error){
        console.error('Error al conectar a la base de datos',error);
    }
};
export default sequelize;
    
