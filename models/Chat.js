const{ model, Schema} = require('mongoose');

// username to be removed as of new requirements

const userSchema = new Schema({ 
    userId:{
       type : Schema.Types.ObjectId,
       ref: 'users'
    },
    body : String
    },
    {
        timestamps: true
    });

module.exports = model('Chat', userSchema);