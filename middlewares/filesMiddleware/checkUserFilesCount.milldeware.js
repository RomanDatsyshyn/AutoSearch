module.exports = (req, res, next) => {
  const photos = req.photos;
  const docs = req.docs;

  if (docs.length) {
    return next(
      res.status(404).json({ error: `You can't upload documents to user` })
    );
  }

  if (photos.length > 1) {
    return next(
      res.status(404).json({ error: `You can upload just one photo` })
    );
  }

  next();
};
