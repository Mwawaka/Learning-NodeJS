// HTTP module 
const http=require('http');

// method to create a server and it takes in a callback as its paramter 
// the callback function accepts two parameters which are objects : req and res
const server=http.createServer((req,res)=>{
     // request 
     console.log(req) //object req will not be logged first in the console until we refresh the browser 

     // url property tells us what address the client is requesting
        if (req.url==='/') {
            res.end('Welcome to the our Homepage.They call as the Anonymous.We are a Family')  //alternatiev of the response below
              }
              if (req.url==='/about') {
                  res.end("Welcome to the about page")
              }
              res.end(`<h1>Oops!Error encounterd</h1>`) //This will be the default response in case the user wants to access some content that is not provided for

    // response object 
    // res.write('Welcome to the our Homepage.They call as the Anonymous.We are a Family') //method writes some data to the stream
    // res.end() //method signals that no more data will be written

   
})

// must specify what port the server will be going to listening to by using the listen() method which takes the port number as the parameter
server.listen(3000)
