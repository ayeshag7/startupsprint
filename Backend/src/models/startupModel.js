const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
    facebook: { type: String, default: '' },
    instagram: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' },
    website: { type: String, default: '' },
    morelinks: { type: [String], default: [] },
  });

const startupSchema = mongoose.Schema(
  {
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 8,
    },
    profilephoto: {
      type: String,
      default: '',
      required: false,
    },
    funds: {
      type: String,
      required: true,
    },
    evaluation: {
      type: String,
      required: true,
    },
    links: {
        type: linkSchema,
        default: {},
        required: false,
      },
    status: {
      type: String,
      default: 'Active',
      required: false,
    },
  },
  { timestamps: true }
);

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;
