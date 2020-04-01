
//! ================================================================= Perc Switch

const var percHarmKnob = Content.getComponent("percHarmKnob");
const var perc2nd = Synth.getChildSynth("perc2nd");
const var perc3rd = Synth.getChildSynth("perc3rd");


inline function onpercHarmKnobControl(component, value)
{
    switch (value){
        
        case 0:
            perc2nd.setAttribute(perc2nd.Gain, 0);
            perc3rd.setAttribute(perc3rd.Gain, 0.07);
            break;
            
        case 1:
            perc2nd.setAttribute(perc2nd.Gain, 0);
            perc3rd.setAttribute(perc3rd.Gain, 0);
            break;
            
        case 2:
            perc2nd.setAttribute(perc2nd.Gain, 0.07);
            perc3rd.setAttribute(perc3rd.Gain, 0);
            break;
    }
};
percHarmKnob.setControlCallback(onpercHarmKnobControl);

