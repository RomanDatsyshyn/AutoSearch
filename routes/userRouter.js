const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware } = require('../middlewares');

router.post('/', userController.createUser);
router.delete(
  '/delete',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  userController.deleteUser
);
router.put(
  '/edit',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  userController.changePassword
);
router.get(
  '/',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  userController.getUser
);

module.exports = router;
