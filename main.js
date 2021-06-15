const express = require('express');
require('dotenv').config();
require('./db/models/db/db');

//routers
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require('./routers/routes/users');
const authRouter = require('./routers/routes/auth');
const commentsRouter = require('./routers/routes/comments');
const roleRouter = require('./routers/routes/role');

const app = express();

//built-in middleware
app.use(express.json());
//*** http://localhost:3000/
app.get("/", (req, res) => {
	console.log("GET /");
	res.status(200);
	res.json("SERVER IS WORKING");
  });
  
// router middleware
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(roleRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`server on ${PORT}`);
});
