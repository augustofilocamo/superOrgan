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
    
	SimpleGainMain[idx].setAttribute(SimpleGainMain[idx].Gain, drawbarGains[value]);
};
for (d in drawbars) d.setControlCallback(onKnobDrawbarControl);


