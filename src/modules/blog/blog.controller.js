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
    try {
        const {title,body,UserId} = req.body;
        const blog = await BlogModel.create({title,body,UserId});
        return res.json({message:"success",blog:blog});
    } catch (error) {
        return res.json({message:"error", error:error.stack})
    }
}

export const DeleteBlog = async (req, res)=>{
    try {
        const {id} = req.params;
        const blog = await BlogModel.destroy({
            where:{
                id:id,
            }
        });

        if(!blog){
            return res.json({message:'blog not found'});
        }
        return res.json({message:'success'});
    } catch(error) {
        return res.json({message:'error', error:error.stack});
    }
}

 export const UpdateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { body, title } = req.body;
        const blog = await BlogModel.update({ title, body },{where :{id}});
        return res.json({message:'successfully  updated!'});
    } catch (error) {
        return res.json({message:'error:', error: error.stack});
    }
 }