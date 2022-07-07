

const { Schema, model } = require("mongoose");

const itemmasterSchema = new Schema(
  {
    code: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: String, required: true },
    
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = model("itemmaster", itemmasterSchema);
