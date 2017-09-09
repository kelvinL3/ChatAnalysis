function parse() {
	var threads = document.getElementsByClassName("thread");
	for(var i = 0; i < threads.length; i++)
	{
	    var names = threads.item(i).childNodes[1].textContent //names of the participants
	    var person1 = names.substring(0,names.indexOf(','));
	    var person2 = names.substring(names.indexOf(',')+1);

	    var messages = threads.item(i).getElementsByClassName("message"); //get all the messages

   		
   		var averageTime = 0;
   		var numberOfJumps = 0;
   		var previousDate = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("meta")
   		var previousPerson = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("user")
   		
	    for (var j = 1; j < messages.length; j++){
	   		var person = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("user")
	   		var date = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("meta")
	   		

	   		if ((person === person1)&&(previousPerson === person2)) {
		   		numberOfJumps++;
		   		averageTime=(averageTime*(numberOfJumps)+(parseDate(date) - parseDate(previousDate))/(numberOfJumps+1)
		   	} else if () {

		   	}

	   		previousDate = date
	    }
	}
}