export class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }

    handleError = (error, res) => {
        console.log(`error: ${error}`);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'User already exists' });
        }
        return res.status(500).json({ error: 'Internal Server Error' });
    };

    get = async (req, res) => {
        try {
            const products = await this.productsService.getAll();
            return res.json(products);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const product = await this.productsService.getById(id);
            return res.json(product);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    create = async (req, res) => {
        try {
            const product = req.body;
            const newProduct = await this.productsService.create(product);
            return res.json(newProduct);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const product = req.body;
            const updatedProduct = await this.productsService.update(id, product);
            return res.json(updatedProduct);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            await this.productsService.delete(id);
            return res.json({ message: 'Product deleted' });
        } catch (error) {
            this.handleError(error, res);
        }
    };
}
