Content.makeFrontInterface(1024, 768);

const var percHarmKnob = Content.getComponent("percHarmKnob");
const var click2nd = Synth.getChildSynth("click2nd");
const var click3rd = Synth.getChildSynth("click3rd");


inline function onpercHarmKnobControl(component, value)
{

    switch (value){
        
        case 0:
            click2nd.setAttribute(click2nd.Gain, 0);
            click3rd.setAttribute(click3rd.Gain, 0.07);
            break;
            
        case 1:
            click2nd.setAttribute(click2nd.Gain, 0);
            click3rd.setAttribute(click3rd.Gain, 0);
            break;
            
        case 2:
            click2nd.setAttribute(click2nd.Gain, 0.07);
            click3rd.setAttribute(click3rd.Gain, 0);
            break;
    }
};

Content.getComponent("percHarmKnob").setControlCallback(onpercHarmKnobControl);





// Leslie
const var Leslie = Synth.getEffect("Leslie");


inline function onleslieSpeedControl(component, value)
{
    switch (value){
        
        case 0:
            Leslie.setAttribute(Leslie.Speed, 0);
            Leslie.setAttribute(Leslie.Stop, 1);
            break;
            
        case 1:
            Leslie.setAttribute(Leslie.Speed, 0);
            Leslie.setAttribute(Leslie.Stop, 0);
            break;
            
        case 2:
            Leslie.setAttribute(Leslie.Speed, 1);
            Leslie.setAttribute(Leslie.Stop, 0);
            break;
    }
};
Content.getComponent("leslieSpeed").setControlCallback(onleslieSpeedControl);



//! =================================================================== Font Load


Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Abel-Regular.ttf", "Abel");


//! =========================================================== open close panels


const var morePanel = Content.getComponent("morePanel");
const var presetsPanel = Content.getComponent("presetsPanel");
const var settingsPanel = Content.getComponent("settingsPanel");



inline function onsettingsButtonControl(component, value)
{
    morePanel.showControl(false);
    presetsPanel.showControl(false);
    settingsPanel.showControl(value);
    Content.getComponent("moreButton").setValue(false);
    Content.getComponent("presetsButton").setValue(false);
    Content.getComponent("settingsButton").setValue(value);
}



inline function onmoreButtonControl(component, value)
{
    morePanel.showControl(value);
    presetsPanel.showControl(false);
    settingsPanel.showControl(false);
    Content.getComponent("moreButton").setValue(value);
    Content.getComponent("presetsButton").setValue(false);
    Content.getComponent("settingsButton").setValue(false);
}


inline function onpresetsButtonControl(component, value)
{
    presetsPanel.showControl(value);
    morePanel.showControl(false);
    settingsPanel.showControl(false);
    Content.getComponent("presetsButton").setValue(value);
    Content.getComponent("moreButton").setValue(false);
    Content.getComponent("settingsButton").setValue(false);
};

Content.getComponent("moreButton").setControlCallback(onmoreButtonControl);
Content.getComponent("presetsButton").setControlCallback(onpresetsButtonControl);
Content.getComponent("settingsButton").setControlCallback(onsettingsButtonControl);





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
 