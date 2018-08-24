var ori = process.argv.slice(2)[0];

console.log("ori:", ori);

var codecStr = "flinhong.com";
var codecNum = 0;;

for(var i = 0; i < codecStr.length; i++) {
    codecNum += codecStr.charCodeAt(i);
}

console.log("codec:", codecNum);

var encoded = '';

for (var i = 0; i < ori.length; i++) {
    var ch = String.fromCharCode(ori.charCodeAt(i) ^ codecNum);
    // console.log("char: " + ori.charAt(i) + " and coded: " + ch);
    encoded += ch;
}

console.log("encoded:", encoded);

var decoded = '';

for (var i = 0; i < encoded.length; i++) {
    var ch = String.fromCharCode(encoded.charCodeAt(i) ^ codecNum);
    // console.log("char: " + ori.charAt(i) + " and coded: " + ch);
    decoded += ch;
}