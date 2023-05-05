const express = require ('express');
const morgan = require ('morgan');
const taskRoutes = require('./routes/task.routes');

const app = express();
app.use(morgan('dev'));
app.use(taskRoutes);
const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));