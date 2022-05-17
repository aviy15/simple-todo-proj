const express = require('express');
const router = express.Router();
const routecontroller = require('../controllers/routecontroller')


router.get('/task/:id' , routecontroller.get_task);
router.get('/task' , routecontroller.get_tasklist);
router.post('/task' , routecontroller.post_task);
router.put('/task/:id' , routecontroller.put_task);
router.delete('/task/:id' , routecontroller.delete_task);

module.exports = router;
