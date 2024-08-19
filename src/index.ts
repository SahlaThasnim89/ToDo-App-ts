import express,{Application,Request,Response,NextFunction}from 'express';
import path from 'path';
import router from './route/route'

const app:Application=express();


app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/static',express.static(path.join(__dirname,'../public')))

app.use('/',router)

app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    console.error(err.stack);
    res.status(500).send('something wrong')
})

app.listen(4000,()=>{
    console.log(`http://localhost:4000`);
    
})