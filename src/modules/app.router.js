import { connectDB } from '../../DB/Connection.js';
import authRouter from './auth/auth.router.js';
import blogRouter from './blog/blog.router.js';
import userRouter from './user/user.router.js';
import cors from 'cors';

export const initApp = (app,express)=>{
    connectDB();
    app.use(cors());
    app.use(express.json());
    const corsOptions = {
        origin: function (origin, callback) {
            const allowedOrigins = ['http://localhost:5173', 'http://localhost:5173/'];
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        optionsSuccessStatus: 200 
    };   
    
    app.use(cors(corsOptions));
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