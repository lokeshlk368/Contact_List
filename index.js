const express=require('express');
const port=8005;
const path=require('path');

const app=express();
app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'));
// console.log(app);

app.use(express.urlencoded());

app.use(express.static('assets'));


var contactList=[
    {
        name:"Lokesh",
        phone:"9878483238"
    },

    {
        name:"Rakesh",
        phone:"977353247"
    },

    {
        name:"Rahul",
        phone:"9934471832"
    }
    
]

 app.get('/',function(req,res)
  {
    // console.log(__dirname);
//    res.send('<h1 style="color:red;">Cool it is running or it is</h1>');
    return res.render('home',{
    title:"This is mini contact",
    contact_list:contactList
   });
 });

 app.post('/create-contact',function(req,res)
 {
    //   return res.redirect('/practice');
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    contactList.push({
             name:req.body.name,
             phone:req.body.phone

    });
    return res.redirect('/');

 });

app.get('/practice',function(req,res){
    return res.render('practice',{
       title:"This is first Contact list"
    });
});


app.get('/delete-contact',function(req,res){
 let phone=req.query.phone;
 let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
 if(contactIndex != -1)
 {
     contactList.splice(contactIndex,1);

 }
 return res.redirect('/');
});

app.listen(port,function(err)
{
    if(err)
    {
        console.log("Error in running the server");
        return;
    }
    console.log("The server is running with port",port);

});