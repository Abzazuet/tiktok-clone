import mongoose from "mongoose";

// Create schema
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});
// Collection inside the database (Collection of tiktok, with the given datastructure)
export default mongoose.model("tiktokVideos", tiktokSchema);
