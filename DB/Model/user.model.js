import {sequelize} from '../Connection.js';
import { Sequelize, DataTypes } from 'sequelize';
import BlogModel from './blog.model.js';

const UserModel  =sequelize.define('User', {
    name :{
        type:DataTypes.STRING(100),
        allowNull:false, 
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false, 
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false, 
    },
    confirmEmail:{
        type:DataTypes.BOOLEAN,
        defaultValue:false, 
    },
    age:{
        type:DataTypes.INTEGER,
    }
    
},
{
        timestamps:true,
    })

    UserModel.hasMany(BlogModel);
    BlogModel.belongsTo(UserModel, {
        foreignKey:'UserId'
    });

export default UserModel; 
  