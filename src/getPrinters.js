var printer = require("printer"),
    util = require('util');
//console.log("installed printers:\n"+util.inspect(printer.getPrinters(), {colors:true, depth:10}));

console.log(JSON.parse(JSON.stringify(printer.getPrinters())));