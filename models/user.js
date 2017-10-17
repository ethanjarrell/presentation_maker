const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    validate: {
      isAsync: true,
      validator: function(value, isValid) {
        const self = this;
        return self.constructor.findOne({ username: value}).exec(function(err, user){
          if(err){
            throw err;
          }
          else if(user) {
            if(self.id === user.id) {
              return isValid(true);
            }
            return isValid(false);
          }
          else{
            return isValid(true);
          }
        })
      },
      message: 'The Username is already taken!'
    },
  },
  password: {
    type: String,
  },
})
userSchema.plugin(timestamps);
const User = mongoose.model('User', userSchema);

module.exports = User;
