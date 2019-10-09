var mongoose = require('mongoose');

mongoose.connect(process.env.BE_MONGO_DB_PATH, {});
