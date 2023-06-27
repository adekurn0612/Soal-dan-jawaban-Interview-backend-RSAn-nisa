import bcrypt from "bcrypt"
import models  from "../models/init-models.js";

const CreateUserAdmin = async(req , res)=>{
    try {
        console.log(req.body)
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(req.body.password,salt);
        const result = await models.user_admin.create({
            username : req.body.username,
            password: passHash,
            userrole : req.body.userrole
        });
        console.log(passHash)
        res.status(202).send(result)
    }catch(e){
        res.status(400).send(e.message)
    }
}

export default {
    CreateUserAdmin
}