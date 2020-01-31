import mongoose from 'mongoose';

const uri = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true
  },
  err => {
    if (err) {
      throw new Error(err.message);
    }
    console.log('Successfully connected to', uri);
  }
);

export default mongoose;
