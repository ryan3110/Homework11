// index.js

var REST_DATA = 'api/animals';
var KEY_ENTER = 13;
var defaultItems = [

];

var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addanimal() {
    console.log("adding animal");
    //var data = document.getElementById('newanimal').value;
    var data = {
        name: "animal",
        value: document.getElementById('newanimal').value
    };
    item++;
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}
