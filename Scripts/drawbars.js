
//! Drawbars

const var SimpleGainMain = [Synth.getEffect("SimpleGainMain1"),
                            Synth.getEffect("SimpleGainMain2"),
                            Synth.getEffect("SimpleGainMain3"),
                            Synth.getEffect("SimpleGainMain4"),
                            Synth.getEffect("SimpleGainMain5"),
                            Synth.getEffect("SimpleGainMain6"),
                            Synth.getEffect("SimpleGainMain7"),
                            Synth.getEffect("SimpleGainMain8"),
                            Synth.getEffect("SimpleGainMain9")];

const var drawbars = [Content.getComponent("KnobDrawbar1"),
                      Content.getComponent("KnobDrawbar2"),
                      Content.getComponent("KnobDrawbar3"),
                      Content.getComponent("KnobDrawbar4"),
                      Content.getComponent("KnobDrawbar5"),
                      Content.getComponent("KnobDrawbar6"),
                      Content.getComponent("KnobDrawbar7"),
                      Content.getComponent("KnobDrawbar8"),
                      Content.getComponent("KnobDrawbar9")];

                      
// Gain lookup table
const var drawbarGains = [0, -3, -6, -9, -12, -15, -18, -21, -100];

inline function onKnobDrawbarControl(component, value)
{
    var idx  = drawbars.indexOf(component);
    var gain = drawbarGains[value];
    
	SimpleGainMain[idx].setAttribute(SimpleGainMain[idx].Gain, gain);
};
for (d in drawbars) d.setControlCallback(onKnobDrawbarControl);


