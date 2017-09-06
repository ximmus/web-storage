document.addEventListener('click', function(e) {
	e = e || window.event;
	var target = e.target || e.srcElement,
	text = target.textContent || text.innerText;

	newEvent(target);

}, false);

function newEvent(dataEntry){

	var eventTime = new Date().toUTCString();

	// console.log(dataEntry);

	dataEntry = eventTime + " | NODE: " + dataEntry.tagName + " | ID: " + dataEntry.id + " | CLASS: " + dataEntry.className;
	
	var eventCount = localStorage.length;
	
	localStorage.setItem( eventCount, dataEntry );

	eventCount++;
}

function displayData(){

	var eventLog = document.getElementById("event-log");

	var listItem;  

	var listContent;

	if ( eventLog.innerHTML != ''){
		eventLog.innerHTML = '';
	}

	for (i = 0; i < localStorage.length; i++){		
		
		listItem = document.createElement("li");

		listContent = document.createTextNode(localStorage[i]);

		listItem.appendChild(listContent);

		eventLog.appendChild(listItem);
	}
}

function clearData(){
	localStorage.clear();
}