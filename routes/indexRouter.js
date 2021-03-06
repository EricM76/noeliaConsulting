const { Router } = require('express');

const router = Router();

const { 
    renderHome,
    renderProductsMain,
    renderReservesMain,
    renderDetailProduct,
    renderDetailService
} = require('../controllers/indexController');

// renderizar el home
router.get('/', renderHome);

// renderizar vista de productos
router.get('/products', renderProductsMain);
// renderizar vista de detalle de producto
router.get('/products/detalle/:id', renderDetailProduct);

// rencerizar vista de servicios
router.get('/reservas', renderReservesMain);
//renderiza vista de detalle de servicio
router.get('/services/detalle/:id', renderDetailService);

module.exports = router;