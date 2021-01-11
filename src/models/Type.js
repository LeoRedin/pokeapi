import mongoose from 'mongoose'

const { Schema } = mongoose

const typeSchema = new Schema({
  _id: mongoose.ObjectId,
  name: String,
})

export const Type = mongoose.model('Type', typeSchema)

// export { Types }
