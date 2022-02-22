// Built in modules :OS,PATH,HTTP,FS

// OS 
const os=require('os')

// info about current user 
const user=os.userInfo()
console.log(user)

// method returns the sysytem uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

// object 
const currentOS={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()

}
console.log(currentOS)



