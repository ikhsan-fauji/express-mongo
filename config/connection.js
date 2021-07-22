const mongoose = require('mongoose');

class Connection {
  constructor() {
    this.url = process.env.MONGO_DB || '';
  }

  connect () {
    try {
      mongoose.connect(this.url, { useNewUrlParser: true })
      this.db = mongoose.connection;
      this.db.on('error', (error) => console.error('connection error', error));
      this.db.on('open', () => console.log('MongoDB Connected'));
    } catch (error) {
      console.error('catch', error);
    }
  }
}


module.exports = Connection;
