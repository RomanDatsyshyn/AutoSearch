const { FILES_CHECK } = require('../../constant');

module.exports = (req, res, next) => {
  req.photos = [];
  req.docs = [];

  if (!req.files) {
    next();
  }

  const files = Object.values(req.files);

  for (let i = 0; i < files.length; i++) {
    const { mimetype, size, name } = files[i];

    if (FILES_CHECK.PHOTO_MIMETYPES.includes(mimetype)) {
      if (FILES_CHECK.MAX_PHOTO_SIZE < size) {
        return next(
          res.status(400).json({
            error: `Max file size is ${
              FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)
            }mb`,
          })
        );
      }

      req.photos.push(files[i]);
    } else if (FILES_CHECK.DOC_MIMETYPES.includes(mimetype)) {
      if (FILES_CHECK.MAX_DOC_SIZE < size) {
        return next(
          res.status(400).json({
            error: `Max file size is ${
              FILES_CHECK.MAX_PHOTO_SIZE / (1024 * 1024)
            }mb`,
          })
        );
      }

      req.docs.push(files[i]);
    } else {
      return next(res.status(400).json({ error: `File ${name} is not valid` }));
    }
  }
  next();
};
