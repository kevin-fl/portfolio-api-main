const newsController = require('../controllers/news-controller');
const { authentificateJwt } = require('../middlewares/authentificate-jwt');
const bodyValidation = require('../middlewares/body-validation-middleware');
const { newsValidator } = require('../validators/news-validator');


const newsRouter = require('express').Router();

newsRouter.route('/:id([0-9]+)')
    .get(newsController.getById)
    .post(authentificateJwt( {adminRight: true}), bodyValidation(newsValidator), newsController.add )
    
    module.exports = newsRouter;