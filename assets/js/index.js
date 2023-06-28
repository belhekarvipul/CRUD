$(document).ready(function(){
	$("#btnTest").click(function(){
		alert("Button clicked.");
	});
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
		}
    }
    rawFile.send(null);
}

readTextFile("assets/data.json", function(text){
    //var data = JSON.parse(text);
    //console.log(data);
});