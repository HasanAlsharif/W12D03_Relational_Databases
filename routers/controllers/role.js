const db = require('../../db/models/db/db') 
const roleModel = require('./../../db/models/role');

const createNewRole = (req, res) => {
	console.log(req.body);
	const query = `INSERT INTO roles (role) VALUE (?)`;
	const arr = [req.body.role];

	db.query(query,arr,(err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	  res.json(result)
	});
};


const getAllRoles = (req, res) => {
	console.log(req.body);
	const query = `SELECT * FROM roles`;
	
	db.query(query,(err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	  res.json(result)
	});
};



module.exports = {
	createNewRole,
	getAllRoles
};
