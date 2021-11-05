if (process.env.NODE_ENV !== "production")
{
  require("dotenv").config();
}

module.exports={
  MOGO_URI: process.env.MONGO_URI
}
