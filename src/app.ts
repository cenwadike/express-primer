import express, {NextFunction, Request, Response} from "express";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(helmet());

const middleware = ({ name }: {name: string}) => (req: Request, res: Response, next: NextFunction) => {
    res.locals.name = name;

    next();
}

app.use(middleware({name: "Kombi"}))

routes(app);


app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})