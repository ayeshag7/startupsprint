const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    posttext: {
      type: String,
      required: true,
      unique: true,
    },
    postphoto: {
      type: String,
      default: '',
      required: false,
    },
    likecount: {
      type: Number,
      default: 0,
      required: false,
    },
    privacy: {
      type: String,
      default: 'Everyone',
      required: false,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
