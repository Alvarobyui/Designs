const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let myItem = input.value;
    if (input.value != "") {
        const listItem = document.createElement('li');
        const listBtn = document.createElement('button');
        const listText = document.createElement("ul")
        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        listBtn.onclick = function(e) {
        list.removeChild(listItem);
   
    }
    }
    

    input.focus();
})