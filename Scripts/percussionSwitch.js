
//! ================================================================= Perc Switch

const var percOnOffBtn = Content.getComponent("percOnOffBtn");
const var percHarmBtn  = Content.getComponent("percHarmBtn");

const var MidiMuter1 = Synth.getMidiProcessor("MidiMuter1");
const var MidiMuter2 = Synth.getMidiProcessor("MidiMuter2");

const var perc2ndGain = Synth.getEffect("perc2ndGain");
const var perc3rdGain = Synth.getEffect("perc3rdGain");



inline function onpercOnOffBtnControl(component, value)
{
	MidiMuter1.setBypassed( ! value);
	MidiMuter2.setBypassed( ! value);
};
percOnOffBtn.setControlCallback(onpercOnOffBtnControl);



inline function onpercHarmBtnControl(component, value)
{
	if (value){
	    
	    perc2ndGain.setAttribute(perc2ndGain.Gain, -23.0);
        perc3rdGain.setAttribute(perc3rdGain.Gain, -100);
	    
	} else {
	
	    perc2ndGain.setAttribute(perc2ndGain.Gain, -100);
        perc3rdGain.setAttribute(perc3rdGain.Gain, -23.0);
	}
};
percHarmBtn.setControlCallback(onpercHarmBtnControl);


