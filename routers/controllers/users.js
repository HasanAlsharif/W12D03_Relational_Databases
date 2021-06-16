const db = require('../../db/models/db/db') 
const usersModel = require('./../../db/models/users');
const bcrypt = require('bcrypt');

const createNewAuthor = async (req, res) => {
	console.log(req.body);
	let { firstName, lastName, age, country, email, password, role_id } = req.body;
	// role_id >>> 1 = admin , 2 = user
	email = email.toLowerCase();
	password = await bcrypt.hash(password, 10);
	console.log(email,password);
	const query = `INSERT INTO users (firstName, lastName, age, country, email, password, role_id) VALUE (?,?,?,?,?,?,?)`;
	const arr = [firstName, lastName, age, country, email, password, role_id];

	db.query(query,arr,(err, result) => {
	  if (err) throw err;
	  console.log('RESULT: ', result);
	  res.json(result)
	});
	
};

module.exports = {
	createNewAuthor,
};


