
import BlogModel from "../../../DB/Model/blog.model.js";
import UserModel from "../../../DB/Model/user.model.js";

export const GetUser = async (req,res)=>{
    try {
        const users = await UserModel.findAll({
            include:BlogModel
        });
        return res.json({message:'User success', users});
    } catch (error) {
        return res.json({message:'error', error});
    }
} 
