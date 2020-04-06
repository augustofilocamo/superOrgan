Globals.sustain = false;function onNoteOn()
{
	
}
function onNoteOff()
{
	if (Globals.sustain) {
		Message.ignoreEvent(true);
	}	
}
function onController()
{

	Console.print(Message.getControllerNumber());
	if (Message.getControllerNumber() == 64) {
    Message.setControllerValue(0);
	}    
    
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
