// Local dependancy-using only the downloaded dependancy only in a particular project
//  npm i <packageName>

// global dependancy - using it in any of the projects 
// npm install -g <packageName>

// package.json- manifest file (stores important info about project/packages)


                        // manual approach
//  create package.json in the root ,create properties etc 

                        // Automatic appraoch
// npm init 
// npm init -y (everything default)

// packages installed are stored as dependancies in the package.json as an object
// node modules contains all the dependancies for our project

// Testing out the lodash package which has been installed as a dependancy

const _=require('lodash')
// we use the underscore _ as a convention 

const items=[1,[2,[3,[4]]]]
// the flattenDeep() is a method contained in the Lodash package that returns a  normal array
const newItems=_.flattenDeep(items)
console.log(newItems)
