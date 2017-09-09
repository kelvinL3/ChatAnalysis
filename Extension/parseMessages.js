function parse() {
	var threads = document.getElementsByClassName("thread");
	for(var i = 0; i < threads.length; i++)
	{
	   threads.item(i).childNodes[1].textContent //names of the participants

	   var messages = threads.item(i).getElementsByClassName("message"); //get all the messages

   		var person = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("user")
   		var date = messages.item(0).getElementsByClassName("message_header").getElementsByClassName("meta")
   		
   		var averageTime = 0;
   		var numberOfMessages = 1;
   		var previousDate = date;
	   for (var j = 1; j < messages.length; j++){
	   		var person = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("user")
	   		var date = messages.item(j).getElementsByClassName("message_header").getElementsByClassName("meta")
	   		numberOfMessages++;
	   		averageTime=(averageTime*(numberOfMessages-1)+date-previousDate


	   		previousDate = date
	    }
	}
}