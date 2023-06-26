const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
    print(process.cwd())
}

function date(print) {
    print(date())
}

function echo(print) {
    print(args)
}

function ls(print) {
    fs.readdir('.', (error, files) => {throw error});
    print(toString(fs));
}

function cat(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {});
    if(!fs.readFile) throw error;
    print(data);
}

function head(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {});
    if(!fs.readFile) throw error;
    print(data);
}

function tail(print, args) {
    fs.readFile(args, 'utf-8', (error, data) => {});
    if(!fs.readFile) throw error;
    print(data);
}

function curl(print, args) {
    request(args, (error, response) => {});
    print(response);
}

module.exports = {};
