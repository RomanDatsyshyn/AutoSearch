const router = require('express').Router();

const { carController } = require('../controller');
const { authMiddleware, carMiddleware } = require('../middlewares');

router.post(
  '/add',
  carMiddleware.CheckIsUserDataNotEmpty,
  carMiddleware.CheckIsCarDataNotEmpty,
  carMiddleware.CheckIsUserPresent,
  carMiddleware.authCreatedUser,
  carController.addCarWithoutAuth
);

router.post(
  '/',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.addCar
);

router.get('/search', carController.getCarsByParams);

router.use('/:car_id', carMiddleware.checkIsCarPresent);

router.get('/:car_id', carController.getCarById);
router.put(
  '/:car_id/desc',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.editCarDesc
);
router.put(
  '/:car_id/price',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.editCarPrice
);
router.delete(
  '/:car_id/delete',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.deleteCar
);
router.put(
  '/:car_id/favorite',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.addCarToFavorite
);
router.put(
  '/:car_id/unfavorite',
  authMiddleware.checkAccessTokenMiddleware,
  authMiddleware.getUserFromToken,
  carController.removeCarFromFavorite
);

module.exports = router;
