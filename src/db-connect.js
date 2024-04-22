const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://molsze17:OxtFQHAYis4a000B@bigguy.shgnmtz.mongodb.net/?retryWrites=true&w=majority&appName=bigguy";


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
  
const client = new MongoClient(uri);  
const database=client.db('PhoneStore');
  //console.log(n);
  try{
    const users=database.collection('customers');

    const query={firstname: n};
    const user = await users.find(query).toArray();
    //name=JSON.stringify(user);
    //console.log(user);
    return(user);
  }catch(err){
    console.log(err);
    throw(err);
  }
  finally{
    //await users.close();
    //console.log(name);
    console.log('sent');
    
    await client.close();
    
    
  }

}

//exports.find_by_name=find_by_name;

async function add_to_db(n){
  const client = new MongoClient(uri);  
  const database=client.db('PhoneStore');
  try{
    const users=database.collection('customers');
    const myobj={title:n.title,firstname:n.firstname,surname:n.surname,mobile:n.mobile,email:n.email,addresses:n.addr};
    users.insertOne(myobj,function(err,res){
      if(err) throw err;
    });
  }catch(err){
    console.log(err);
    throw(err);
  }finally{
    console.log('added');
    await client.close();
  }
}

//add_to_db({title:"ms",firstname:"Angela",surname:"Dreake",mobile:"123123123",email:"adrake@mail.c",addresses:"[]"});
//exports.add_to_db=add_to_db;

async function update_user(n){
  const client = new MongoClient(uri);  
  const database=client.db('PhoneStore');
  try{
    const users=database.collection("customers");
    const myobj={};
    if(n.title){myobj.title=n.title;}
    if(n.email){myobj.email=n.email;}
    if(n.mobile){myobj.mobile=n.mobile;}
    const query={surname:n.query};
    const newobj={$set:myobj};
    users.updateOne(query,newobj,function(err,res){
      if(err) throw err;
    });
  }catch(err){
    console.log(err);
    throw(err);
  }finally{
    console.log('updated');
    await client.close();
  }
  }
//update_user({query:"Smith",mobile:"777999000",title:null,email:null,});
//find_by_name("John");
module.exports={find_by_name,add_to_db,update_user};
