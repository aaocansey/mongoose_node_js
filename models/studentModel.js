// const stdDb = require("./DB/db");

const mongoose = require('mongoose');
const {Schema} = mongoose;

const stdSchema = new mongoose.Schema({
    name:String,
    stdId:Number,
    email:String
});

const StdModel = mongoose.model("students", stdSchema);


// class StdModel {
//     constructor({ name, stdId, email }) {
//       this.name = name;
//       this.stdId = stdId;
//       this.email = email;
//     }
  
//     save() {
//       stdDb.push(this);
//       return this;
//     }
  
//     static all() {
//       return stdDb;
//     }
  
//     static updateStdData(updateInfo) {
//       stdDb = stdDb.map((std) => {
//         if (std.name === updateInfo.name) {
//           return { ...std, ...updateInfo };
//         }
//         return std;
//       });
//     }
  
//     static deleteStd(stdInfo) {
//       let deletedStd = null;
//       stdDb = stdDb.filter((std) => {
//         if (std.name !== stdInfo.name) {
//           return true;
//         }
  
//         deletedStd = std;
  
//         return false;
//       });
//     }
//   }
  
  module.exports = StdModel;