// PATH
const path=require('path')

// separator property that returns a platform specific operator
console.log(path.sep)

// join() that joins a sequence of path segments using platform specific  separator and returns a normalized resulting path
const filePath=path.join('/Content','/subfolder','/test.txt')

console.log(filePath)

// accessing the base file in a path in our case: test.txt
console.log(path.basename(filePath))

// resolve() -returns an absolute path 
const absolute=path.resolve(__dirname,'Content','subfolder','test.txt')
console.log(absolute)