/**
 * file that defines the schema for mongoose
 */
module.exports = mongoose => {
    const coquital = mongoose.model(
        "coquital",
        mongoose.Schema(
            {
                item: String,
                price: String,
                published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return coquital;
  };