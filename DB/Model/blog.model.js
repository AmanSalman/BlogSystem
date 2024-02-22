import {sequelize} from '../Connection.js';
import { Sequelize, DataTypes } from 'sequelize';
import UserModel from './user.model.js';


const BlogModel = sequelize.define('BlogModel',{
    title:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false,
    }
}, 
{
    timestamps:true
});

export default BlogModel; 