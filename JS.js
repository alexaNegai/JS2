let picture_list = [];
const linkInput_elem = document.getElementById('linkInput');
const descriptionInput_elem = document.getElementById('descriptionInput');
const btn_elem = document.getElementById('btn');
const output_elem = document.getElementById('output');




function render(){
	picture_list.forEach(elem=>{
		const img_elem = document.createElement('img');
		img_elem.innerText = elem;
		output_elem.appendChild(img_elem)
	})
}




btn_elem.addEventListener('click', ()=>{
	const value = linkInput_elem.value, descriptionInput_elem.value;
	picture_list.push(value);
	render();
})
