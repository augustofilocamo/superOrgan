/*
  Copyright 2020 Studio427 Audio, Augusto Filocamo, & David Healey
  
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

Content.setHeight(600);
Content.setWidth(720);

const var c = [24, 24, 48, 60, 72, 84, 96, 108];

const var gainValues = [
  [-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
  [-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
  [-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
  [-12.89997816718672, -11.39840209281069, -19.28324353528122, -24.3989850433577, -18.86838171011073, -27.7436026021824, -18.03695890703257, -18.09214908297419, -20.98400190727972],
  [-7.871125803134614, -24.39813470002278, -18.86563718456, -27.75411589884567, -17.63258883995008, -21.2434759630638, -19.99097136885125, -21.11436471022381, -100.0],
  [-17.17075367959463, -24.23743895941055, -14.53932603651013, -24.12887165809773, -20.65106242663677, -27.52670453094928, -35.05354871539289, -100.0, -100.0],
  [-20.51049383775148, -13.68600772392169, -13.24251223755025, -25.77239371179522, -100.0, -100.0, -100.0, -100.0, -100.0],
  [-20.51049383775148, -13.68600772392169, -13.24251223755025, -25.77239371179522, -100.0, -100.0, -100.0, -100.0, -100.0]
];

const var pitchValues = [
  [0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01],
  [0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01],
  [0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01],
  [-0.01, -0.01, -0.01, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.0, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, 0.0],
  [-0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, 0.0, 0.0],
  [0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0],
  [0.0, 0.0, 0.0, -0.01, 0.0, 0.0, 0.0, 0.0, 0.0]
];

//Table processor setup
const var pitchTable = [];
const var gainTable = [];
const var decayTable = [];

const var NUM_ELEMENTS = 9;

for (i = 0; i < NUM_ELEMENTS; i++)
{
  pitchTable[i] = Synth.getTableProcessor("NotenumberPitchMain" + (i + 1));
  pitchTable[i].reset(1);
    
  gainTable[i] = Synth.getTableProcessor("NotenumberGainMain" + (i + 1));
  gainTable[i].reset(1);

  decayTable[i] = Synth.getTableProcessor("NotenumberDecayMain" + (i + 1));
  decayTable[i].reset(1);

  for (j = 0; j < c.length; j++)
  {
    pitchTable[i].addTablePoint(1, 1/128*c[j], 1);
    gainTable[i].addTablePoint(1, 1/128*c[j], 1);
    decayTable[i].addTablePoint(1, 1/128*c[j], 1);  
  
    pitchTable[i].setTablePoint(1, j, 1/128*c[j], pitchValues[j][i]*0.5+0.5, 0.5);
    gainTable[i].setTablePoint(1, j, 1/128*c[j], Engine.getGainFactorForDecibels(gainValues[j][i]), 0.5);
    decayTable[i].setTablePoint(1, j, 1/128*c[j], 1, 0.5);
  }
}

//GUI
const var sliPitch = [[],[],[],[],[],[],[],[]];
const var sliGain = [[],[],[],[],[],[],[],[]];
const var sliDecay = [[],[],[],[],[],[],[],[]];

const var componentNames = ["C0", "C0", "C2", "C3", "C4", "C5", "C6", "C7"];

for (i = 0; i < NUM_ELEMENTS; i++)
{
  for (j = 0; j < c.length; j++)
  {
    sliPitch[j][i] = Content.getComponent("Main" + componentNames[j] + "Partial" + (i + 1) + "FreqSlider");    
    sliGain[j][i] = Content.getComponent("Main" + componentNames[j] + "Partial" + (i + 1) + "AmpSlider");
    sliDecay[j][i] = Content.getComponent("Main" + componentNames[j] + "Partial" + (i + 1) + "DecaySlider");
   
    if (j == 1) continue;
    
    sliPitch[j][i].setControlCallback(onsliPitchControl);
    sliGain[j][i].setControlCallback(onsliGainControl);
    sliDecay[j][i].setControlCallback(onsliDecayControl);    
  }
}
 
inline function getIndex(component, arr)
{
  local i;

  for (i = 0; i < arr.length; i++)
  {
    if (arr[i].indexOf(component) != -1)
      return arr[i].indexOf(component);
  }
}

inline function onsliPitchControl(component, value)
{ 
  local i;
  local idx = getIndex(component, sliPitch);
  local table = pitchTable[idx];
    
  for (i = 0; i < c.length; i++)
  {  
    table.setTablePoint(1, i, 1/128*c[i], sliPitch[i][idx].getValue()*0.5+0.5, 0.5);  
  }
}

inline function onsliGainControl(component, value)
{
  local i;
  local idx = getIndex(component, sliGain);
  local table = gainTable[idx];
    
  for (i = 0; i < c.length; i++)
  {
    table.setTablePoint(1, i, 1/128*c[i], Engine.getGainFactorForDecibels(sliGain[i][idx].getValue()), 0.5);  
  }  
}

inline function onsliDecayControl(component, value)
{
  local i;
  local idx = getIndex(component, sliDecay);
  local table = decayTable[idx];
    
  for (i = 0; i < c.length; i++)
  {
    table.setTablePoint(1, i, 1/128*c[i], sliDecay[i][idx].getValue()/20000, 0.5);  
  }
}

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
 