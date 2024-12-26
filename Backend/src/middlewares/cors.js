<<<<<<< HEAD
//Cors
=======
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization', 'Refresh-Token'],
  credentials: true
};

module.exports = cors(corsOptions);
>>>>>>> 50a3b3fe5d2982f46a8b02163c5353d9808888e8
