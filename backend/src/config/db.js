import { Sequelize } from 'sequelize';

// Create Sequelize instance
const sequelize = new Sequelize('helmets_and_gears', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test connection
export const connection = async () =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}