import { connectDB, testDBConnection } from '../../DB/Connection.js';
import authRouter from './auth/auth.router.js';
import blogRouter from './blog/blog.router.js';
import userRouter from './user/user.router.js';
import cors from 'cors';

export const initApp = (app,express)=>{
    testDBConnection();
    connectDB();
    
    app.use(express.json());
    app.use(cors());
    
    app.use('/auth', authRouter);
    app.use('/blog', blogRouter);
    app.use('/user', userRouter);
    app.use('/', (req,res)=>{
        return res.json ({message:'welcome'});
    })
    app.use('*', (req,res)=>{
        return res.json ({message:'page not found'})
    })
}