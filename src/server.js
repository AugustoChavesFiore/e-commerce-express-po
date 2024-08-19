import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export class Server {
    #app = express();
    #serverListener;
    #port;
    #publicPath;
    #routes;

    constructor(options) {
        const { port, routes, public_path = 'public' } = options;
        this.#port = port;
        this.#publicPath = public_path;
        this.#routes = routes;
    }

    async start() {
        //* Middlewares
        this.#app.use(express.json());
        this.#app.use(express.urlencoded({ extended: true }));
        this.#app.use(morgan('dev'));
        this.#app.use(cors());
        this.#app.use(express.static('public'));

        //* Public Folder
        this.#app.use(express.static(this.#publicPath));

        //* Routes
        this.#app.use(this.#routes);

        this.#serverListener = this.#app.listen(this.#port, () => {
            console.log(`Server running on port ${this.#port}`);
        });

    }

    close() {
        this.#serverListener?.close();
    }

}
