import { Document, Schema,model,models } from "mongoose";

export interface IEvent extends Document{
    _id: string
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id : string, name : string}; // ObjectId type, but representing as string for TypeScript
    organizer:{_id : string, firstname : string, lastname : string};
}


const EventSchema = new Schema({
    title : {type:String,require:true},
    description:{type:String},
    location:{type:String},
    createdAt:{type:Date,default:Date.now},
    imageUrl:{type:String,required:true},
    startDateTime:{type:String,required:Date.now},
    endDateTime:{type:String,required:Date.now},
    price:{type:String},
    isFree:{type:Boolean,default:false},
    url:{type:String},
    category:{type: Schema.Types.ObjectId,ref:'Category'},
    organizer:{type: Schema.Types.ObjectId,ref:'User'},
})

const Event = models.Event || model('Event',EventSchema);

export default Event;