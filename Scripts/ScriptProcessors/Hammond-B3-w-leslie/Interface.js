Content.makeFrontInterface(1100, 700);



// Leslie
const var ScriptFX1 = Synth.getEffect("Script FX1");


inline function onleslieSpeedControl(component, value)
{
    switch (value){
        
        case 0:
            ScriptFX1.setAttribute(ScriptFX1.Speed, 0);
            ScriptFX1.setAttribute(ScriptFX1.BP, 0);
            break;
            
        case 1:
            ScriptFX1.setAttribute(ScriptFX1.Speed, 0);
            ScriptFX1.setAttribute(ScriptFX1.BP, 1);
            break;
            
        case 2:
            ScriptFX1.setAttribute(ScriptFX1.Speed, 1);
            ScriptFX1.setAttribute(ScriptFX1.BP, 0);
            break;
    }
};
Content.getComponent("leslieSpeed").setControlCallback(onleslieSpeedControl);
function onNoteOn()
{
	
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
 