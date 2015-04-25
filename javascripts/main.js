console.log('This would be the main JS file.');

console.log($('#codeArea').children()[0]);

var codeLen = $('#codeArea').children().length;
for(var i=0;i<codeLen;i++){
	var codeDiv = $('#codeArea').children()[i];
	var lineSpan = document.createElement('span');
	lineSpan.setAttribute('class', 'code-line-number');
	lineSpan.innerHTML = i + 1;
	codeDiv.appendChild(lineSpan);
	if(i%2 != 0) {
		codeDiv.setAttribute('class','code-line');
	}
	var arr = codeDiv.innerHTML;
	var reg = /'[\w(+-/*)]+'/g;
	arr = arr.replace(reg,'<b class="code-str">'+reg.exec(arr)+'</b>');
	codeDiv.innerHTML = arr;
}
