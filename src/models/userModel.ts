import { addHook, DataType } from "sequelize-typescript";
import { BeforeSave } from "sequelize-typescript";
import { Hooks } from "sequelize/types/hooks";
import { db } from "../database/db";



export const UserModel = db.define('User',{
    id:{
        type:DataType.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataType.STRING,
        allowNull:false,
        unique:true
    },
    name:{
        type:DataType.STRING,
        allowNull:false
    },
    password:{
        type:DataType.STRING,
        allowNull:false
    },
    
})

