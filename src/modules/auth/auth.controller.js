import UserModel from "../../../DB/Model/user.model.js";

export const GetAuth = (req,res)=>{
    return res.json({message:'Auth success'});
}

export const register = async (req,res)=>{
    try {
        const {email, password, name, age } = req.body;
        const user = await UserModel.create({ email, password, name, age});  
        return res.json({message:'success',user});
        
    } catch (error) {
        if(error.original?.errno == 1062){
            return res.json({message:'email is already in use'});
        }
        return res.json({message:'error',error:error.stack});
    }
}

export const login = async (req,res) =>{
    try {
       const {email,password} = req.body;
       const userCheck = await UserModel.findAll({
        attributes: ['id','name'] ,
        where:{ email,password}
       }
       )
       if (!userCheck) {
        return res.json({ message: 'email or password are wrong' });
    } 
    return res.json({ message: "success", user:userCheck});
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const destroy = async (req, res) => {
    const {id} = req.params;
    const user = await UserModel.destroy({
        where:{
            id
        }
    });

    if(!user){
        return res.json({message:"user not found"});
    } 
    return res.json({message:"success", user});

}

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // Assuming UserModel is your Sequelize model
        const user= await UserModel.update({name}, {where:{id}});
        if (!user) {
            return res.json({ message: "User not found" });
        }
        return res.json({ message: "Success", user:name });
    } catch (error) {
        return res.json({ message: "Error", error: error.stack });
    }
};
