import { sequelize } from './src/database/index.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection established.');
    
    // Add missing columns to Users table
    const queryInterface = sequelize.getQueryInterface();
    
    try {
      // Add firstName column
      await queryInterface.addColumn('Users', 'firstName', {
        type: sequelize.Sequelize.STRING,
        allowNull: true
      });
      console.log('Added firstName column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('firstName column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add lastName column
      await queryInterface.addColumn('Users', 'lastName', {
        type: sequelize.Sequelize.STRING,
        allowNull: true
      });
      console.log('Added lastName column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('lastName column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add phone column
      await queryInterface.addColumn('Users', 'phone', {
        type: sequelize.Sequelize.STRING,
        allowNull: true
      });
      console.log('Added phone column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('phone column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add isActive column
      await queryInterface.addColumn('Users', 'isActive', {
        type: sequelize.Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      });
      console.log('Added isActive column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('isActive column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add isAdmin column
      await queryInterface.addColumn('Users', 'isAdmin', {
        type: sequelize.Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      });
      console.log('Added isAdmin column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('isAdmin column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add emailVerified column
      await queryInterface.addColumn('Users', 'emailVerified', {
        type: sequelize.Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      });
      console.log('Added emailVerified column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('emailVerified column already exists');
      } else {
        throw error;
      }
    }
    
    try {
      // Add lastLoginAt column
      await queryInterface.addColumn('Users', 'lastLoginAt', {
        type: sequelize.Sequelize.DATE,
        allowNull: true
      });
      console.log('Added lastLoginAt column');
    } catch (error) {
      if (error.message.includes('already exists')) {
        console.log('lastLoginAt column already exists');
      } else {
        throw error;
      }
    }
    
    // Update existing admin users to have isAdmin = true
    try {
      await sequelize.query(
        "UPDATE \"Users\" SET \"isAdmin\" = true WHERE role = 'admin'"
      );
      console.log('Updated existing admin users to have isAdmin = true');
    } catch (error) {
      console.log('Error updating admin users:', error.message);
    }
    
    console.log('User schema update completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
})();
