import mongoose from "mongoose";

const userShema = mongoose.Schema({
atributo1:{
    type: String,
    require: true,
    trim: true
},
atributo2:{
    type: Number,
    require: true,
    trim: true
}
},{
timestamps: true 

});

const Personas = mongoose.model("Personas", userShema);
export default Personas;