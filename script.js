
//Close User List
const close = document.querySelectorAll('.delete');
// console.log(close)
for (let i = 0 ; i < close.length; i++)
{
close[i].addEventListener('click', function(e){
	// close[i].parentElement.style.display = 'none';
	e.target.parentElement.parentElement.style.display = "none";
	// console.log(e)
});
}

// const edit = document.querySelectorAll('.icon-pencil')

// for (let i = 0; i < edit.length; i++){
// 	edit[i].addEventListener('click', function(e){
// 		// console.log (e)
// 	})
// }
function edit(){
	const e = window.event
	const editButtonWrapper = e.target.parentElement.parentElement.nextElementSibling
	editButtonWrapper.style.display = "flex"
	e.target.parentElement.parentElement.style.display = "none"
	console.log(window.event)
	console.log (editButtonWrapper)
}
