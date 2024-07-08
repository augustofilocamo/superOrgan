/*
  Copyright 2020 Studio427 Audio, Augusto Filocamo & David Healey
  
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

const var c0 = 24;
const var c5 = 84;
const var c7 = 108;

//Table processor setup
const var LeakageTablePitch = [];
const var LeakageTableGain = [];
const var LeakageTableDecay = [];

const var pitchValues = [-0.14, 0.08, 0.42, 0.03, -0.01, -0.01, -0.3, 0.27, -0.22, 0.0, -0.01, -0.01, -0.22, 0.3, 0.47, 0.02, 0.27, 0.5, -0.18, 0.17, 0.23, -0.37, 0.02, -0.42, -0.2, 0.2, 0.0, 0.02, 0.01, -0.32, -0.15, 0.1, 0.14, 0.3, 0.48, 0.02];
const var gainValues = [-65.65553002340269, -57.34603507251584, -61.60131349375541, -63.99271171092607, -54.2561521011908, -65.11118294352175, -55.93705679997991, -65.27210182934999, -63.11358844336857, -54.04850997317509, -63.97287265439557, -64.81527285783417, -57.34456341380761, -55.82757241331564, -55.10777869886815, -46.66224929650301, -59.41679030378832, -64.1979858382881, -55.57286300410028, -51.84970058229023, -58.97008076387864, -62.44444394607019, -53.78859758224492, -57.60630616351899, -54.40821230925522, -65.60470927032058, -61.01180949881162, -67.15270817325668, -65.13545080051611, -67.72128288002013, -62.27220491861594, -57.53191891132965, -61.16714808803087, -63.50521194335386, -69.00591125883166, -66.88093173894606];

const var NUM_ELEMENTS = 36;

for (i = 0; i < NUM_ELEMENTS; i++)
{
  LeakageTablePitch[i] = Synth.getTableProcessor("NotenumberPitchLeakage" + (i+1));
  LeakageTablePitch[i].reset(1);
  LeakageTablePitch[i].addTablePoint(1, (1/128)*c0, 1);
  LeakageTablePitch[i].addTablePoint(1, (1/128)*c5, 1);
  LeakageTablePitch[i].addTablePoint(1, (1/128)*c7, 1);
  LeakageTablePitch[i].setTablePoint(1, 0, ((1/128)*c0), pitchValues[i] * 0.5 + 0.5, 0.5);
  LeakageTablePitch[i].setTablePoint(1, 1, ((1/128)*c0), pitchValues[i] * 0.5 + 0.5, 0.5);
  LeakageTablePitch[i].setTablePoint(1, 2, ((1/128)*c5), pitchValues[i] * 0.5 + 0.5, 0.5);
  LeakageTablePitch[i].setTablePoint(1, 3, ((1/128)*c7), pitchValues[i] * 0.5 + 0.5, 0.5);
  
  LeakageTableGain[i] = Synth.getTableProcessor("NotenumberGainLeakage" + (i+1));
  LeakageTableGain[i].reset(1);
  LeakageTableGain[i].addTablePoint(1, (1/128)*c0, 1);
  LeakageTableGain[i].addTablePoint(1, (1/128)*c5, 1);
  LeakageTableGain[i].addTablePoint(1, (1/128)*c7, 1);
  LeakageTableGain[i].setTablePoint(1, 0, ((1/128)*c0), Engine.getGainFactorForDecibels(gainValues[i]), 0.5);
  LeakageTableGain[i].setTablePoint(1, 1, ((1/128)*c0), Engine.getGainFactorForDecibels(gainValues[i]), 0.5);
  LeakageTableGain[i].setTablePoint(1, 2, ((1/128)*c5), Engine.getGainFactorForDecibels(gainValues[i]), 0.5);
  LeakageTableGain[i].setTablePoint(1, 3, ((1/128)*c7), Engine.getGainFactorForDecibels(gainValues[i]), 0.5);
  
  LeakageTableDecay[i] = Synth.getTableProcessor("NotenumberDecayLeakage" + (i+1));
  LeakageTableDecay[i].reset(1);
  LeakageTableDecay[i].addTablePoint(1, (1/128)*c0, 1);
  LeakageTableDecay[i].addTablePoint(1, (1/128)*c5, 1);
  LeakageTableDecay[i].addTablePoint(1, (1/128)*c7, 1);
  LeakageTableDecay[i].setTablePoint(1, 0, (1/128)*c0, 1, 0.5);
  LeakageTableDecay[i].setTablePoint(1, 1, (1/128)*c0, 1, 0.5);
  LeakageTableDecay[i].setTablePoint(1, 2, (1/128)*c5, 1, 0.5);
  LeakageTableDecay[i].setTablePoint(1, 3, (1/128)*c7, 1, 0.5);
}

//GUI
const var sliPartialFreq = [[],[],[]];
const var sliPartialAmp = [[],[],[]];
const var sliPartialDecay = [[],[],[]];

for (i = 0; i < NUM_ELEMENTS; i++)
{
  sliPartialFreq[0][i] = Content.getComponent("LeakageC0Partial" + (i + 1) + "FreqSlider");
  sliPartialFreq[0][i].setControlCallback(onsliPartialFreqControl);
  sliPartialAmp[0][i] = Content.getComponent("LeakageC0Partial" + (i + 1) + "AmpSlider");
  sliPartialAmp[0][i].setControlCallback(onsliPartialAmpControl);
  sliPartialDecay[0][i] = Content.getComponent("LeakageC0Partial" + (i + 1) + "DecaySlider");
  sliPartialDecay[0][i].setControlCallback(onsliPartialDecayControl);
  
  sliPartialFreq[1][i] = Content.getComponent("LeakageC5Partial" + (i + 1) + "FreqSlider");
  sliPartialFreq[1][i].setControlCallback(onsliPartialFreqControl);
  sliPartialAmp[1][i] = Content.getComponent("LeakageC5Partial" + (i + 1) + "AmpSlider");
  sliPartialAmp[1][i].setControlCallback(onsliPartialAmpControl);
  sliPartialDecay[1][i] = Content.getComponent("LeakageC5Partial" + (i + 1) + "DecaySlider");
  sliPartialDecay[1][i].setControlCallback(onsliPartialDecayControl);
  
  sliPartialFreq[2][i] = Content.getComponent("LeakageC7Partial" + (i + 1) + "FreqSlider");
  sliPartialFreq[2][i].setControlCallback(onsliPartialFreqControl);
  sliPartialAmp[2][i] = Content.getComponent("LeakageC7Partial" + (i + 1) + "AmpSlider");
  sliPartialAmp[2][i].setControlCallback(onsliPartialAmpControl);
  sliPartialDecay[2][i] = Content.getComponent("LeakageC7Partial" + (i + 1) + "DecaySlider");
  sliPartialDecay[2][i].setControlCallback(onsliPartialDecayControl);
}

inline function getIndex(component, arr)
{
  if (arr[0].indexOf(component) != -1)
    return arr[0].indexOf(component);
  else if (arr[1].indexOf(component) != -1)
    return arr[1].indexOf(component);
  else
    return arr[2].indexOf(component);  
}

inline function onsliPartialFreqControl(component, value)
{ 
  local idx = getIndex(component, sliPartialFreq);
  local table = LeakageTablePitch[idx];
  
  table.setTablePoint(1, 0, (1/128)*c0, sliPartialFreq[0][idx].getValue()*0.5+0.5, 0.5);
  table.setTablePoint(1, 1, (1/128)*c0, sliPartialFreq[0][idx].getValue()*0.5+0.5, 0.5);
  table.setTablePoint(1, 2, (1/128)*c5, sliPartialFreq[1][idx].getValue()*0.5+0.5, 0.5);
  table.setTablePoint(1, 3, (1/128)*c7, sliPartialFreq[2][idx].getValue()*0.5+0.5, 0.5); 
}

inline function onsliPartialAmpControl(component, value)
{
  local idx = getIndex(component, sliPartialAmp);
  local table = LeakageTableGain[idx];
  
  table.setTablePoint(1, 0, ((1/128)*c0), Engine.getGainFactorForDecibels(sliPartialAmp[0][idx].getValue()), 0.5);
  table.setTablePoint(1, 1, ((1/128)*c0), Engine.getGainFactorForDecibels(sliPartialAmp[0][idx].getValue()), 0.5);
  table.setTablePoint(1, 2, ((1/128)*c5), Engine.getGainFactorForDecibels(sliPartialAmp[1][idx].getValue()), 0.5);
  table.setTablePoint(1, 3, ((1/128)*c7), Engine.getGainFactorForDecibels(sliPartialAmp[2][idx].getValue()), 0.5);
  
}

inline function onsliPartialDecayControl(component, value)
{
  local idx = getIndex(component, sliPartialDecay);
  local table = LeakageTableDecay[idx];
  
  table.setTablePoint(1, 0, ((1/128)*c0), (sliPartialDecay[0][idx].getValue()/20000), 0.5);
  table.setTablePoint(1, 1, ((1/128)*c0), (sliPartialDecay[0][idx].getValue()/20000), 0.5);
  table.setTablePoint(1, 2, ((1/128)*c5), (sliPartialDecay[1][idx].getValue()/20000), 0.5);
  table.setTablePoint(1, 3, ((1/128)*c7), (sliPartialDecay[2][idx].getValue()/20000), 0.5);
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
 