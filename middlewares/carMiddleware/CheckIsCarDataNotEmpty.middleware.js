module.exports = async (req, res, next) => {
  const {
    mark,
    model,
    obl,
    town,
    year,
    color,
    KPP,
    typeOfPrivod,
    fuel,
    engine,
    seats,
    rozhid,
    horse,
    km,
    price,
  } = req.body;

  if (
    mark == '' ||
    model == '' ||
    obl == '' ||
    town == '' ||
    year == '' ||
    color == '' ||
    KPP == '' ||
    typeOfPrivod == '' ||
    fuel == '' ||
    engine == '' ||
    seats == '' ||
    rozhid == '' ||
    horse == '' ||
    km == '' ||
    price == ''
  ) {
    return next(res.status(404).json({ error: `Fill all car fields` }));
  }

  next();
};
