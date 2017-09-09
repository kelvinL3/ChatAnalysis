function parse() {
	var threads = document.getElementsByClassName("thread");
	for(var i = 0; i < threads.length; i++)
	{
	    var names = threads.item(i).childNodes[1].textContent //names of the participants
	    var person1 = names.substring(0,names.indexOf(','));
	    var person2 = names.substring(names.indexOf(',')+1);

	    var messages = threads.item(i).getElementsByClassName("message"); //get all the messages

   		
   		var averageTime1 = 0;
   		var numberOfJumps1 = 0;
   		var averageTime2 = 0;
   		var numberOfJumps2 = 0;
   		var previousDate = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("meta")
   		var previousPerson = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("user")
   		
	    for (var j = 1; j < messages.length; j++){
	   		var person = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("user")
	   		var date = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("meta")
	   		
	   		if (parseDate(date) - parseDate(previousDate)>15) {
		   		if ((person === person1)&&(previousPerson === person2)) {
			   		numberOfJumps1++;
			   		averageTime1=(averageTime1*(numberOfJumps1)+(parseDate(date) - parseDate(previousDate))/(numberOfJumps1+1)
			   	} else if () {

			   	}
			}


	   		previousDate = date
	   		previousPerson = person
	    }

	    if (averageTime1 === 0 || averageTime2 === 0) {
	    	alert("not enough data, for debugging");
	    }

	}
}