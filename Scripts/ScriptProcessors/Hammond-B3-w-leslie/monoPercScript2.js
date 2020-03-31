Console.clear();

reg lastTime;
function onNoteOn()
{
    if (Synth.isLegatoInterval()){
    
       if (Engine.getUptime() - lastTime > 0.025){
        
            Message.ignoreEvent(true);
            lastTime = Engine.getUptime();
       }
    }
}
function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 