var oTotalNumber = document.querySelector('.totalNumber');
var oTotalPrice = document.querySelector('.totalPrice');
var _list = document.querySelectorAll('.list');
for(var i=0; i<_list.length; i++) {
	working(_list[i]);
}

function working(obj) {
	var oAdd = obj.querySelector('.add');
	var oReduce = obj.querySelector('.reduce');
	var oSetNumber = obj.querySelector('.setNumber');
	var oPrice = obj.querySelector('.price');
	var oNumber = obj.querySelector('.number');
	var oTotal = obj.querySelector('.total');
	var _price = oPrice.innerHTML,
	_number = oSetNumber.value,
	_total = '';

	countF();
	function countF() {
		_total = _number*(_price*100)/100;
		oNumber.innerHTML = _number;
		oTotal.innerHTML = _total;
		obj['data-total'] = _total;
		obj['data-number'] = _number;
	}

	oAdd.onclick = function() {
		if(_number < 10) {
			_number++;
			oSetNumber.value = _number;
			countF();
			totalF();
		}
	}

	oReduce.onclick = function() {
		if(_number > 1) {
			_number--;
			oSetNumber.value = _number;
			countF();
			totalF();
		}
	}

	oSetNumber.onkeyup =function() {
		_number = this.value;
		if(_number=='0' || isNaN(Number(_number)) || _number!=parseInt(_number)) {
			this.value = 1;
		} else if(_number >= 10) {
			this.value = 10;
		}
	}

	oSetNumber.onblur = function() {
		_number = this.value;
		if(!_number) {
			this.value = 1;
		}
		_number = this.value;
		countF();
		totalF();
	}
}
totalF();
function totalF() {
	var _total = 0, _number = 0;
	for(var i=0; i<_list.length; i++) {
		_number += Number(_list[i]['data-number']);
		_total = (_total*100 + Number(_list[i]['data-total'])*100)/100;
	}
	oTotalNumber.innerHTML = _number;
	oTotalPrice.innerHTML = _total;
}
