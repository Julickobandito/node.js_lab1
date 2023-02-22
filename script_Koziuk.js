/*
№1: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in
a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values
that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */

const rgb = function (r,g,b) {
    const toHex = function (num) {
        let hexNum;
        if (num === 0|| num < 0) {
            hexNum = "00";
        } else if ((num > 0 && num <= 15)) {
            hexNum = "0" + num.toString(16).toUpperCase();
        }
        else if (num > 255) {
            hexNum = "FF";
        } else {
            hexNum = num.toString(16).toUpperCase();
        }
        return hexNum;
    }
    return rgbNum = toHex(r) + toHex(g) + toHex(b);
}
const rgbCall = function () {
    console.log("N1:");
    const prompt = require("prompt-sync")(); //штука для вводу в консоль
    let i = 0;
    while(i < 3) {
        const r = +prompt("Input r: ");
        const g = +prompt("Input g: ");
        const b = +prompt("Input b: ");
        let k = rgb(r,g,b);
        console.log(`-------- \n Hex-format: ${k}`);
        i++;
    }
}


/*Write a function that when given a URL as a string, parses out just the domain name and returns it as
a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "https://www.cnet.com"                -> domain name = cnet"*/
const domainName = function(url){
    const urlModule = require('url');
    const q = urlModule.parse(url, true);
    let domain = url;
    if(url.includes("http")) {
        domain = (q.host)
    }
    domain = domain.replace('www.', "")
        .split('.')[0];
    return domain;
}

const domainNameCall = function () {
    const prompt = require("prompt-sync")(); //штука для вводу в консоль
    let i = 0;
    while(i < 2) {
        console.log("N2:");
        const urlName = prompt("Input url: ");
        let m = domainName(urlName);
        console.log(`The domain name is: ${m}`);
        i++;
    }
}


const prompt = require("prompt-sync")();
Loop:
    for (let i = 0; i < 5; i++) {
        const taskNumber = prompt("Press from 0 to 5: ");
        switch (taskNumber) {
            case "0":
                break Loop;
            case "1":
                rgbCall();
                break;
            case "2":
                domainNameCall();
                break;
            default:
                console.log("Something went wrong");
        }
    }

