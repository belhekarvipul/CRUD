$(document).ready(function(){
	$("#btnTest").click(function(){
		//alert("Button clicked.");	
		
		fetch("https://belhekarvipul.github.io/CRUD/assets/data.json")
        .then((res) => {
			return res.json();
			})
		.then((data) => console.log(data));
	});
});