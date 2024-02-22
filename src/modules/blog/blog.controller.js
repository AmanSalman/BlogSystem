import { Op } from "sequelize";
import BlogModel from "../../../DB/Model/blog.model.js";
import UserModel from "../../../DB/Model/user.model.js";

export const GetBlog = async (req, res) =>{
    const blogs = await BlogModel.findAll({
        include:
        {model:UserModel,
        attributes:['id', 'name']},
        attributes:['Userid','id','title','body']
    });

    return res.json({message:"success", blogs});
}

export const addBlog = async (req,res)=>{
    const {title,body,UserId} = req.body;
    const blog = await BlogModel.create({title,body,UserId});
    return res.json({message:"success",blog:blog});
}
 