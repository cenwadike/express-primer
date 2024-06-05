import {Express} from "express";
import getBookHandler from "./books/books.controller";
import healthCheck from "./health/health.controller";

function routes(app: Express) {
    app.get("/", healthCheck);
    app.get("/api/books/:bookId/:authorId", getBookHandler);
}

export default routes;