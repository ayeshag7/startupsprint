<<<<<<< HEAD
// routes/userRoutes.js
=======
// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
>>>>>>> 50a3b3fe5d2982f46a8b02163c5353d9808888e8
