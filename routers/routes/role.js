const express = require('express');

//controllers
const { createNewRole , getAllRoles } = require('./../controllers/role');

const roleRouter = express.Router();

roleRouter.post('/role', createNewRole);
roleRouter.get('/role', getAllRoles);

module.exports = roleRouter;

