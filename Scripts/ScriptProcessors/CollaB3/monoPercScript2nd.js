reg lastTime2;
function onNoteOn()
{
    if (Synth.isLegatoInterval()){
    
       if (Engine.getUptime() - lastTime2 > 0.5){
        
            Message.ignoreEvent(true);
            lastTime2 = Engine.getUptime();
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
 