const os = require("node:os");

console.log("Operative System Characteristics:");
console.log("----------------------");

console.log("Operative system Name ", os.platform());
console.log("Operative system version ", os.version());
console.log("Operative system architecture ", os.arch());
console.log("CPUs ", os.cpus());
console.log("Free memory ", os.freemem() / 1024 / 1024);
console.log("Total memory ", os.totalmem() / 1024 / 1024);
console.log("uptime", os.uptime() / 60 / 60);
