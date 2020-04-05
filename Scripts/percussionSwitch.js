/*
  Copyright 2020 Augusto Filocamo
  
  This file is part of CollaB3.

  CollaB3 is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  CollaB3 is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with CollaB3. If not, see <https://www.gnu.org/licenses/>.
*/

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


