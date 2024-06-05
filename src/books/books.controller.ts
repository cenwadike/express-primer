import {Express, Request, Response, NextFunction} from "express";

function getBookHandler(req:Request, res:Response, next: NextFunction) {
    console.log(res.locals.name);

    res.send(res.locals.name);
}

export default getBookHandler;