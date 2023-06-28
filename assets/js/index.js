$(document).ready(function(){
	var records;
	var url = 'https://belhekarvipul.github.io/CRUD/';
	
	fetch(url + "assets/data.json").then((res) => { return res.json(); }).then((data) => {records = data;});
		
	$("#btnTest").click(function(){
		$("#tblAllData tbody tr").remove();
		
		$.each(records, function( index, value ) {
			$('#tblAllData > tbody:last-child')
				.append('<tr>' +
					'<td>' + value.srno + '</td>' +
					'<td>' + value.fname + '</td>' +
					'<td>' + value.lname + '</td>' +
					'<td>' + value.address + '</td>' +
					'<td>' + value.dob + '</td>' +
					'<td>' + value.status + '</td></tr>');
		});
	});
});