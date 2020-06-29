const Car = require('../../database/models/Car');

module.exports = async (req, res) => {
  try {
    const params = {
      year: {
        $lte: parseInt(req.query.maxYear) || 1000000000,
        $gte: parseInt(req.query.minYear) || 0,
      },
      km: {
        $lte: parseInt(req.query.maxKm) || 1000000000,
        $gte: parseInt(req.query.minKm) || 0,
      },
      price: {
        $lte: parseInt(req.query.maxPrice) || 1000000000,
        $gte: parseInt(req.query.minPrice) || 0,
      },
      rozhid: {
        $lte: parseInt(req.query.maxRozhid) || 500,
        $gte: parseInt(req.query.minRozhid) || 0,
      },
      engine: {
        $lte: parseInt(req.query.maxEngine) || 20,
        $gte: parseInt(req.query.minEngine) || 0,
      },
      amountOfSeats: {
        $lte: parseInt(req.query.maxSeats) || 100,
        $gte: parseInt(req.query.minSeats) || 0,
      },
      amountOfHorse: {
        $lte: parseInt(req.query.maxHorse) || 5000,
        $gte: parseInt(req.query.minHorse) || 0,
      },
    };

    if (req.query.mark) params.mark = req.query.mark;
    if (req.query.model) params.model = req.query.model;
    if (req.query.color) params.color = req.query.color;
    if (req.query.oblast) params.oblast = req.query.oblast;
    if (req.query.town) params.town = req.query.town;
    if (req.query.kpp) params.kpp = req.query.kpp;
    if (req.query.typeOfPrivod) params.typeOfPrivod = req.query.typeOfPrivod;
    if (req.query.typeOfFuel) params.typeOfFuel = req.query.typeOfFuel;

    // ------------------- Pagination ------------------- //

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await Car.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = await Car.find(params)
      .limit(limit)
      .skip(startIndex)
      .exec();

    // ------------------- End Pagination ------------------- //

    res.json(results);
    res.status(200).end();
  } catch (e) {
    res.json({
      message: e.message,
      controller: e.controller || 'getCarsByParams',
    });
  }
};
