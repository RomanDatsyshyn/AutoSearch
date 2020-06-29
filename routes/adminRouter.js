const router = require('express').Router();

const { authController, adminController } = require('../controller');
const { authMiddleware, userMiddleware } = require('../middlewares');

router.post('/auth/drv-login', authController.authAdmin);
router.post('/auth/logout', authController.logoutUser);
router.post(
  '/auth/refresh',
  authMiddleware.checkAdminRefreshTokenMiddleware,
  authMiddleware.getUserFromRefreshToken,
  authController.refreshToken
);

router.use(authMiddleware.checkAdminTokenMiddleware);
router.use('/users/:user_id', userMiddleware.checkIsUserPresetMiddleware);

router.put('/users/:user_id/block', adminController.blockUser);
router.put('/users/:user_id/unblock', adminController.unblockUser);

module.exports = router;
