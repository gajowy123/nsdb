const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://molsze17:OxtFQHAYis4a000B@bigguy.shgnmtz.mongodb.net/?retryWrites=true&w=majority&appName=bigguy";

const client = new MongoClient(uri);
const database=client.db('PhoneStore');

async function run() {
  try {
    const database = client.db('PhoneStore');
    const users = database.collection('customers');

    // Query for a movie that has the title 'Back to the Future'
    const query = { firstname: 'John' };
    const user = await users.find(query).toArray();
    
    console.log(user);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//run().catch(console.dir);

async function find_by_name(n){
  var name="";
  console.log(n);
  try{
    const users=database.collection('customers');

    const query={firstname: n};
    const user = await users.find(query).toArray();
    //name=JSON.stringify(user);
    console.log(user);
    return(user);
  }catch(err){
    console.log(err);
    throw(err);
  }
  finally{
    //await users.close();
    //console.log(name);
    console.log('sent');
    //await client.close();
    
    
  }

}

async function add_to_db(n){
  
}
//find_by_name("John");
module.exports=find_by_name;