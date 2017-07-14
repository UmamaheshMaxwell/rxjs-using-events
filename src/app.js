import $ from 'jquery';
import Rx from 'rxjs/Rx';

const btn = $('#btnClick');
const txtbox = $('#txtName');
const outputDiv = $('#outputDiv');


const btnStream$ = Rx.Observable.fromEvent(btn, 'click');
btnStream$.subscribe(
	(event) =>{
		console.log(event.target.innerHTML)
	},
	(error) =>{
		console.log(error)
	},
	() => {
		console.log()
	}
)

const txtboxStream$ = Rx.Observable.fromEvent(txtbox, 'keyup');
txtboxStream$.subscribe(
	(event) =>{
		console.log(event.target.value);
		outputDiv.append(event.target.value);
	},
	(error) =>{
		console.log(error)
	},
	() =>{
		console.log('completed')
	}
)

const moveStream$ =Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(
	(event) => {
		outputDiv.html('<h1> X:' + event.clientX + ' Y : '+ event.clientY + '</h1>')
	},
	(error) => {
		console.log(error)
	},
	() => {
		console.log('completed')
	}
)




