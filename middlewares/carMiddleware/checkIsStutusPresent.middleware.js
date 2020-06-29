module.exports = async (req, res, next) => {
  const { status_id } = req.body;

  const status = await carService.getStatusById(status_id);

  if (!status) {
    return next(res.status(404).json({ error: `Status not found` }));
  }

  next();
};
