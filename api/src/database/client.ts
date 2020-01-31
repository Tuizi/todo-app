import mongoose from 'mongoose';

const auth = `${process.env.DB_USER}:${process.env.DB_PASS}`;
const database = `${process.env.DB_HOST}/${process.env.DB_NAME}`;
const uri = `mongodb://${auth}@${database}`;

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
