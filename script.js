
//Close User List
const close = document.querySelectorAll('.close');
for (let i = 0 ; i < close.length; i++)
{
close[i].addEventListener('click', function(e){
	// close[i].parentElement.style.display = 'none';
	e.target.parentElement.style.display = "none";
});
}
