'use strict'; 
exports.main_handler = async (event, context, callback) => {
    console.log("%j", event);
    console.log("%j", event);
    return "hello world"
};