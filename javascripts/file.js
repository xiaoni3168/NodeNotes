function OpenFile(path) {
	$.ajax({
		type: 'GET',
		url: './javascripts/test.json',
		dataType: 'json',
		success: function(rs) {
			console.log(rs.length);
		},
		error: function() {
			console.log('error');
		}
	});
}
OpenFile('');