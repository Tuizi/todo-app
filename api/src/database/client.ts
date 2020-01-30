import mongoose from 'mongoose';

mongoose.connect(`mongodb://${process.ENV.DB_HOST}/${process.ENV.DB_NAME}`, {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', () => {
  throw new Error('Database error');
});
db.once('open', function() {
  // we're connected!
});

export default mongoose;
