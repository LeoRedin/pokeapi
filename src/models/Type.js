import mongoose from 'mongoose'

const { Schema } = mongoose

// revisar unique

const typeSchema = new Schema({
  _id: {
    type: mongoose.ObjectId,
    required: true,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hex: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
})

export const Type = mongoose.model('Type', typeSchema, 'types')

// export { Types }
