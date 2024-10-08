export class CommerceController {
    constructor(
        commerceService
    ) {
        this.commerceServices = commerceService;
    };

    get = async (req, res) => {
        try {
            const commerces = await this.commerceServices.get();
            res.status(200).json(commerces);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const commerce = await this.commerceServices.getById(id);
            res.status(200).json(commerce);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    create = async (req, res) => {
        try {
            const commerce = req.body;
            const newCommerce = await this.commerceServices.create(commerce);
            res.status(201).json(newCommerce);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    update = async (req, res) => {
        try {
            const { id } = req.params;
            const commerce = req.body;
            const updatedCommerce = await this.commerceServices.update(id, commerce);
            res.status(200).json(updatedCommerce);
        } catch (error) {
            res.status(500).json(error);
        }
    };

    delete = async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCommerce = await this.CommerceServices.delete(id);
            res.status(200).json(deletedCommerce);
        } catch (error) {
            res.status(500).json(error);
        }
    };
};