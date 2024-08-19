export class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }

    #handleError = (error, res) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(`error: ${error}`);
        return res.status(500).json({ error: 'Internal Server Error' });
    };

    async get(req, res) {
        try {
            const products = await this.productsService.getProducts();
            return res.json(products);
        } catch (error) {
            this.#handleError(error, res);
        }
    }

    async getById(req, res) {
        try {
            const { id } = req.params;
            const product = await this.productsService.getProductById(id);
            return res.json(product);
        } catch (error) {
            this.#handleError(error, res);
        }
    }

    async create(req, res) {
        try {
            const product = req.body;
            const newProduct = await this.productsService.createProduct(product);
            return res.json(newProduct);
        } catch (error) {
            this.#handleError(error, res);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const product = req.body;
            const updatedProduct = await this.productsService.updateProduct(id, product);
            return res.json(updatedProduct);
        } catch (error) {
            this.#handleError(error, res);
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            await this.productsService.deleteProduct(id);
            return res.json({ message: 'Product deleted' });
        } catch (error) {
            this.#handleError(error, res);
        }
    }
}