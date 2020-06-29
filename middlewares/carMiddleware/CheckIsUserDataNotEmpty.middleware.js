module.exports = async (req, res, next) => {
  const { name, phone, password } = req.body;

  if (name == '' || phone == '' || password == '') {
    return next(res.status(404).json({ error: `Fill all user fields` }));
  }

  next();
};
