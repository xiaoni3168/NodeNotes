console.log('This would be the main JS file.');
var keepWord = ['function','var','for',' in '];
var Reg = {
	'codeStr': /\'[\w(-|+|/|*|\s)]+\'/g,
	'codeFunction': /function\s\(\w+(|,|\s)+\w+\)/g
}
var codeAreas = $.find('.code-area');
for(var i in codeAreas) {
	codeArea(codeAreas[i]);
}

function codeArea(codeArea) {
	var codeLen = $(codeArea).children().length;
	for(var i=0;i<codeLen;i++){
		var codeDiv = $(codeArea).children()[i];
		var lineSpan = document.createElement('span');
		lineSpan.setAttribute('class', 'code-line-number');
		lineSpan.innerHTML = i + 1;
		codeDiv.appendChild(lineSpan);
		if(i%2 != 0) {
			codeDiv.setAttribute('class','code-line');
		}
		var code = codeDiv.innerHTML;
		var codeStrArray = code.match(Reg['codeStr']);
		for(key in codeStrArray) {
			code = code.replace(codeStrArray[key], '<b class="code-str">&nbsp;'+codeStrArray[key]+'</b>');
			codeDiv.innerHTML = code;
		}
		var codeFunctionArray = code.match(Reg['codeFunction']);
		for(key in codeFunctionArray) {
			code = code.replace(codeFunctionArray[key], '<b class="code-func">&nbsp;'+codeFunctionArray[key]+'</b>');
			codeDiv.innerHTML = code;
		}
		for(keepKey in keepWord) {
			code = code.replace(keepWord[keepKey], '<b class="code-keep-word">'+keepWord[keepKey]+'</b>');
			codeDiv.innerHTML = code;
		}
	}
}
