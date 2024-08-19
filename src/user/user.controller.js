
export class UserController {

    constructor(userService) {
        this.userService = userService;
    };

    handleError = (error, res) => {

        console.log(`error: ${error}`);
        if (error.code === 11000) {
            return res.status(400).json({ error: 'User already exists' });
        }
        return res.status(500).json({ error: 'Internal Server Error' });
    };

    getUsers = async (req, res) => {
        try {
            const users = await this.userService.getUsers();
            return res.json(users);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    getUser = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await this.userService.getUser(id);
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.json(user);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    createUser = async (req, res) => {
        try {
            const user = req.body;
            const newUser = await this.userService.createUser(user);           
            return res.status(201).json(newUser);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    updateUser = async (req, res) => {
        try {
            const { id } = req.params;
            const user = req.body;
            const updatedUser = await this.userService.updateUser(id, user);
            return res.json(updatedUser);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    changeRole = async (req, res) => {
        try {
            const { id } = req.params;
            const { role } = req.body;
            const user = await this.userService.changeRole(id, role);
            if (!user) return res.status(404).json({ error: 'User not found' });
            return res.json(user);
        } catch (error) {
            this.handleError(error, res);
        }
    };

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            await this.userService.deleteUser(id);
            return res.status(204).end();
        } catch (error) {
            this.handleError(error, res);
        }
    };



};