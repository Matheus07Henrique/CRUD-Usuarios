// import './modules/fs.js';
// import './modules/http.js'

import './modules/express.js'
import dotenv from 'dotenv'
import connectDatabase from './src/database/connect.js'

dotenv.config();
connectDatabase();