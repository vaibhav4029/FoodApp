const mongoose = require('mongoose')
const mongoURI="mongodb://goFood:9829425464@ac-k1qmylg-shard-00-00.rylocky.mongodb.net:27017,ac-k1qmylg-shard-00-01.rylocky.mongodb.net:27017,ac-k1qmylg-shard-00-02.rylocky.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-zo3n7r-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser:true},async (err,result)=>{
        if(err)
            console.log(".error..",err);
        else{
            console.log('connected succesfully mongo...');
            const fetched_data = await mongoose.connection.db.collection("food_items");
            const userData=await fetched_data.find({}).toArray(async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if(err){
                        console.log("aa gyi error")
                    }else{
                        global.food_items= data;
                        global.foodCategory= catData;
                    }
                })
            });
        }
    })
}

module.exports = mongoDB
