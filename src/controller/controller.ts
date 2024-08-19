import{Request,Response,NextFunction}from 'express';


const homepage=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
        res.render('home')
    } catch (error) {
        next(error);
        
    }
}

const addTask=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    try {
       const {newTask}=req.body 
    } catch (error) {
        next(error);
        
    }
}


export{
    homepage,
    addTask
};