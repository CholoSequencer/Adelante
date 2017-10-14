
/* this function exactly repeats a certain class. Borrowed*/
/*
function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}

multiplyNode(document.querySelector('.box'), 10, true)
*/

var text = "";
for (i = 2018; i > 2009; i-- ) {
	text += '<hr>\
			<div class ="row"> \
	                <div class="col-xs-4 subtitles"> \
	                    <h1>' + i + '</h1> \
	                </div>\
	                <div class="col-xs-4 subjects">\
	                    <ul style="list-style-type:none">\
	                        <li><a href="test_SM2018ABDI.html">II</a></li>\
	                        <li><a href="test_SM2018CEI.html">I</a></li>\
	                    </ul>\
	                </div>\
	                <div class="col-xs-4 subjects">\
	                    <ul style="list-style-type:none">\
	                        <li><a href="index.html">II</a></li>\
	                        <li><a href="#">I</a></li>\
	                    </ul>\
	                </div>\
	        </div>';
}
document.getElementById("exam_list").innerHTML = text;