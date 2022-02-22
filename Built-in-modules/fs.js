// synchronous approach /Blocking code

const {readFileSync,writeFileSync}=require('fs')
 //console.log('Start')
// reads a file in the system
// takes two parameters namely:path and character encoding 
const first=readFileSync('./modules/Content/first.txt','utf8')
const second=readFileSync('./modules/Content/second.txt','utf8')
const third =readFileSync('./modules/Content/result-sync.txt','utf-8')
console.log(first)
console.log(second)
console.log(third)

//console.log('Done with the task')
// method that is used to create and write into a file in the system 
// takes in two parameters :path of the file and the content that is to be written in the file 
// To append to the file rather than to overwrite the file ,add a third parameter which is an object

writeFileSync('./modules/Content/result-sync.txt',`Here is the result of the readFileSync: ${first},${second}`,{flag:'a'})
// this will append the content to the file

// console.log('Starting the next task')

// the above tasks might be time consuming and the downside is that JS is is executing the code synchronously (line by line ) tus this may cause the application to crash in the case that one of the users takes alot of time in performing one of this functions thus the need to use asynchromous functions




// asynchronous approach /Non-blocking code
const {readFile,writeFile}=require('fs')

// we need to provide a callback -run the callback after we are done executing some function
// takes three parameters :path of the file, utf encoding and the callback function
// the callback has also two parameters :err and result
// console.log('start')
readFile('./modules/Content/first.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return null
    }
   const first=result
    readFile('./modules/Content/second.txt','utf8',(err,result)=>{
        if (err) {
            console.log(err)
            return null
        }
        const second=result
 writeFile(
        './modules/Content/result-async.txt',
        `Here is the result of the readFileSync: ${first},${second} ` ,
        (err,result)=>{
            if (err) {
                console.log(err)
                return null
            }
            console.log(result)
//console.log('Done with this task')
        }
    )
    }
   )
})
//console.log('Starting the next task')


// The setup above leads to a callback hell
// The result will be undefined since we,re not retuning anything,however the result-async will be written
//since it asynchronous ,the task is of-loaded and then we continue with the code 


//to avoid the callback hell :Use promises or the async and await




