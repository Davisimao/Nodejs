const path = require("node:path")


const fullpath = path.join(__dirname)
/* 
console.log(fullpath)
 */
const relativePath = "arquivos/cv.pfd"
/* 
const absolutepath = path.resolve(__dirname, t) */

/* console.log(absolutepath) */


const filename = path.basename(relativePath)

console.log(filename)