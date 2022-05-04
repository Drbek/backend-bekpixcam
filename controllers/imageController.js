const ImageU = require('../models/imageModel')
const jwt = require('jsonwebtoken');
exports.uploaderImage = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    const img = new ImageU({
        urlImage: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        userId: userId,
        date_created: new Date(),
        date_updated: new Date()
    });
    img.save()
    .then(() => res.status(201).json({ message: 'Image enregistré !' }))
    .catch(error => res.status(400).json({ error }));
    
}