const mongoose = require('mongoose');

const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect("mongodb+srv://zafarahmad:2a2q8mOQuvJg44ll@cluster0.zffii.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { 
//     useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log(`MongoDB Connected: {conn.connection.host}`);
  // } catch (error) {
  //   console.error(error.message);
  //   process.exit(1);
  // }
  return await mongoose.connect("mongodb+srv://naman:12345@cluster1.qgh7o.mongodb.net/Online-Exam").then(() =>
    console.log(" DB Connected Successfully")).catch(() => { console.log("DB Not connected successfully") });
}


module.exports = connectDB;