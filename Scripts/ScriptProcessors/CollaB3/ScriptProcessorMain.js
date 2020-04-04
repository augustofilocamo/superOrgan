Content.setHeight(600);
Content.setWidth(720);

const var c = [24, 24, 48, 60, 72, 84, 96];

//Table processor setup
const var pitchTable = [];
const var gainTable = [];
const var decayTable = [];

const var pitchValues = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01];
const var gainValues = [-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748];

const var NUM_ELEMENTS = 9;

for (i = 0; i < NUM_ELEMENTS; i++)
{
  pitchTable[i] = Synth.getTableProcessor("NotenumberPitchMain" + (i + 1));
  pitchTable[i].reset(1);
  pitchTable[i].setTablePoint(1, 0, 0, 1, 0.5);
    
  gainTable[i] = Synth.getTableProcessor("NotenumberGainMain" + (i + 1));
  gainTable[i].reset(1);
  gainTable[i].setTablePoint(1, 0, 0, 1, 0.5);

  decayTable[i] = Synth.getTableProcessor("NotenumberDecayMain" + (i + 1));
  decayTable[i].reset(1);
  decayTable[i].setTablePoint(1, 0, 0, 1, 0.5);
  
  
  for (j = 0; j < c.length; j++)
  {
    pitchTable[i].addTablePoint(1, 1/128*c[j], 1);
    gainTable[i].addTablePoint(1, 1/128*c[j], 1);
    decayTable[i].addTablePoint(1, 1/128*c[j], 1);
  
  
    pitchTable[i].setTablePoint(1, j, 1/128*c[j], pitchValues[i]*0.5+0.5, 0.5);
    gainTable[i].setTablePoint(1, j, 1/128*c[j], Engine.getGainFactorForDecibels(gainValues[j][i]), 0.5);
    decayTable[i].setTablePoint(1, j, 1/128*c[j], 1, 0.5);
  }
}

const var gainValues = [
[-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
[-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
[-20.67641416562552, -18.93866173223266, -15.19126167564296, -14.48875175084129, -15.51794084550422, -20.87876469171594, -16.1734393841863, -18.85086215127489, -27.73911289465748],
[],
[],
[],
[],
[],
[],
];


const var pitchValues = [
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01],
[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01],
[0.0, 0.0, 0.0, 0.0, -0.01, -0.01, -0.01, -0.01, -0.01],
[],
[],
[],
[],
[],
[],
];


 




MainC3tablePitch1.setTablePoint(1, 3, ((1/128)*60), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-12.89997816718672);
MainC3tableGain1.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay1.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch2.setTablePoint(1, 3, ((1/128)*60), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-11.39840209281069);
MainC3tableGain2.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay2.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch3.setTablePoint(1, 3, ((1/128)*60), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-19.28324353528122);
MainC3tableGain3.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay3.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch4.setTablePoint(1, 3, ((1/128)*60), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-24.3989850433577);
MainC3tableGain4.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay4.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch5.setTablePoint(1, 3, ((1/128)*60), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-18.86838171011073);
MainC3tableGain5.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay5.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch6.setTablePoint(1, 3, ((1/128)*60), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-27.7436026021824);
MainC3tableGain6.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay6.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch7.setTablePoint(1, 3, ((1/128)*60), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-18.03695890703257);
MainC3tableGain7.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay7.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch8.setTablePoint(1, 3, ((1/128)*60), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-18.09214908297419);
MainC3tableGain8.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay8.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC3tablePitch9.setTablePoint(1, 3, ((1/128)*60), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-20.98400190727972);
MainC3tableGain9.setTablePoint(1, 3, ((1/128)*60), (dValue/1), 0.5);
MainC3tableDecay9.setTablePoint(1, 3, ((1/128)*60), (20000/20000), 0.5);
MainC4tablePitch1.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain1.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay1.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch2.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain2.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay2.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch3.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain3.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay3.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch4.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain4.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay4.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch5.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain5.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay5.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch6.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain6.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay6.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch7.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain7.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay7.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch8.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain8.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay8.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch9.addTablePoint(1, ((1/128)*72), 1);
MainC4tableGain9.addTablePoint(1, ((1/128)*72), 1);
MainC4tableDecay9.addTablePoint(1, ((1/128)*72), 1);
MainC4tablePitch1.setTablePoint(1, 4, ((1/128)*72), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-7.871125803134614);
MainC4tableGain1.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay1.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch2.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-24.39813470002278);
MainC4tableGain2.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay2.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch3.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-18.86563718456);
MainC4tableGain3.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay3.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch4.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-27.75411589884567);
MainC4tableGain4.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay4.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch5.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-17.63258883995008);
MainC4tableGain5.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay5.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch6.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-21.2434759630638);
MainC4tableGain6.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay6.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch7.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-19.99097136885125);
MainC4tableGain7.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay7.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch8.setTablePoint(1, 4, ((1/128)*72), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-21.11436471022381);
MainC4tableGain8.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay8.setTablePoint(1, 4, ((1/128)*72), (20000/20000), 0.5);
MainC4tablePitch9.setTablePoint(1, 4, ((1/128)*72), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC4tableGain9.setTablePoint(1, 4, ((1/128)*72), (dValue/1), 0.5);
MainC4tableDecay9.setTablePoint(1, 4, ((1/128)*72), (0/20000), 0.5);
MainC5tablePitch1.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain1.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay1.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch2.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain2.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay2.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch3.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain3.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay3.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch4.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain4.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay4.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch5.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain5.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay5.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch6.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain6.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay6.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch7.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain7.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay7.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch8.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain8.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay8.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch9.addTablePoint(1, ((1/128)*84), 1);
MainC5tableGain9.addTablePoint(1, ((1/128)*84), 1);
MainC5tableDecay9.addTablePoint(1, ((1/128)*84), 1);
MainC5tablePitch1.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-17.17075367959463);
MainC5tableGain1.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay1.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch2.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-24.23743895941055);
MainC5tableGain2.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay2.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch3.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-14.53932603651013);
MainC5tableGain3.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay3.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch4.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-24.12887165809773);
MainC5tableGain4.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay4.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch5.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-20.65106242663677);
MainC5tableGain5.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay5.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch6.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-27.52670453094928);
MainC5tableGain6.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay6.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch7.setTablePoint(1, 5, ((1/128)*84), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-35.05354871539289);
MainC5tableGain7.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay7.setTablePoint(1, 5, ((1/128)*84), (20000/20000), 0.5);
MainC5tablePitch8.setTablePoint(1, 5, ((1/128)*84), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC5tableGain8.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay8.setTablePoint(1, 5, ((1/128)*84), (0/20000), 0.5);
MainC5tablePitch9.setTablePoint(1, 5, ((1/128)*84), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC5tableGain9.setTablePoint(1, 5, ((1/128)*84), (dValue/1), 0.5);
MainC5tableDecay9.setTablePoint(1, 5, ((1/128)*84), (0/20000), 0.5);
MainC6tablePitch1.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain1.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay1.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch2.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain2.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay2.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch3.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain3.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay3.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch4.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain4.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay4.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch5.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain5.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay5.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch6.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain6.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay6.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch7.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain7.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay7.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch8.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain8.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay8.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch9.addTablePoint(1, ((1/128)*96), 1);
MainC6tableGain9.addTablePoint(1, ((1/128)*96), 1);
MainC6tableDecay9.addTablePoint(1, ((1/128)*96), 1);
MainC6tablePitch1.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-20.51049383775148);
MainC6tableGain1.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay1.setTablePoint(1, 6, ((1/128)*96), (20000/20000), 0.5);
MainC6tablePitch2.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-13.68600772392169);
MainC6tableGain2.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay2.setTablePoint(1, 6, ((1/128)*96), (20000/20000), 0.5);
MainC6tablePitch3.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-13.24251223755025);
MainC6tableGain3.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay3.setTablePoint(1, 6, ((1/128)*96), (20000/20000), 0.5);
MainC6tablePitch4.setTablePoint(1, 6, ((1/128)*96), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-25.77239371179522);
MainC6tableGain4.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay4.setTablePoint(1, 6, ((1/128)*96), (20000/20000), 0.5);
MainC6tablePitch5.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC6tableGain5.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay5.setTablePoint(1, 6, ((1/128)*96), (0/20000), 0.5);
MainC6tablePitch6.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC6tableGain6.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay6.setTablePoint(1, 6, ((1/128)*96), (0/20000), 0.5);
MainC6tablePitch7.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC6tableGain7.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay7.setTablePoint(1, 6, ((1/128)*96), (0/20000), 0.5);
MainC6tablePitch8.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC6tableGain8.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay8.setTablePoint(1, 6, ((1/128)*96), (0/20000), 0.5);
MainC6tablePitch9.setTablePoint(1, 6, ((1/128)*96), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC6tableGain9.setTablePoint(1, 6, ((1/128)*96), (dValue/1), 0.5);
MainC6tableDecay9.setTablePoint(1, 6, ((1/128)*96), (0/20000), 0.5);
MainC7tablePitch1.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain1.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay1.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch2.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain2.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay2.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch3.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain3.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay3.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch4.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain4.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay4.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch5.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain5.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay5.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch6.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain6.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay6.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch7.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain7.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay7.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch8.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain8.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay8.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch9.addTablePoint(1, ((1/128)*108), 1);
MainC7tableGain9.addTablePoint(1, ((1/128)*108), 1);
MainC7tableDecay9.addTablePoint(1, ((1/128)*108), 1);
MainC7tablePitch1.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-20.51049383775148);
MainC7tableGain1.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay1.setTablePoint(1, 7, ((1/128)*108), (20000/20000), 0.5);
MainC7tablePitch2.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-13.68600772392169);
MainC7tableGain2.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay2.setTablePoint(1, 7, ((1/128)*108), (20000/20000), 0.5);
MainC7tablePitch3.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-13.24251223755025);
MainC7tableGain3.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay3.setTablePoint(1, 7, ((1/128)*108), (20000/20000), 0.5);
MainC7tablePitch4.setTablePoint(1, 7, ((1/128)*108), (-0.01*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-25.77239371179522);
MainC7tableGain4.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay4.setTablePoint(1, 7, ((1/128)*108), (20000/20000), 0.5);
MainC7tablePitch5.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC7tableGain5.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay5.setTablePoint(1, 7, ((1/128)*108), (0/20000), 0.5);
MainC7tablePitch6.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC7tableGain6.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay6.setTablePoint(1, 7, ((1/128)*108), (0/20000), 0.5);
MainC7tablePitch7.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC7tableGain7.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay7.setTablePoint(1, 7, ((1/128)*108), (0/20000), 0.5);
MainC7tablePitch8.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC7tableGain8.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay8.setTablePoint(1, 7, ((1/128)*108), (0/20000), 0.5);
MainC7tablePitch9.setTablePoint(1, 7, ((1/128)*108), (0.0*0.5+0.5), 0.5);
var dValue = Engine.getGainFactorForDecibels(-100.0);
MainC7tableGain9.setTablePoint(1, 7, ((1/128)*108), (dValue/1), 0.5);
MainC7tableDecay9.setTablePoint(1, 7, ((1/128)*108), (0/20000), 0.5);

inline function onMainC0Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial1FreqSlider").setControlCallback(onMainC0Partial1FreqSliderControl);

inline function onMainC0Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial1AmpSlider").setControlCallback(onMainC0Partial1AmpSliderControl);

inline function onMainC0Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial1DecaySlider").setControlCallback(onMainC0Partial1DecaySliderControl);

inline function onMainC0Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial2FreqSlider").setControlCallback(onMainC0Partial2FreqSliderControl);

inline function onMainC0Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial2AmpSlider").setControlCallback(onMainC0Partial2AmpSliderControl);

inline function onMainC0Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial2DecaySlider").setControlCallback(onMainC0Partial2DecaySliderControl);

inline function onMainC0Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial3FreqSlider").setControlCallback(onMainC0Partial3FreqSliderControl);

inline function onMainC0Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial3AmpSlider").setControlCallback(onMainC0Partial3AmpSliderControl);

inline function onMainC0Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial3DecaySlider").setControlCallback(onMainC0Partial3DecaySliderControl);

inline function onMainC0Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial4FreqSlider").setControlCallback(onMainC0Partial4FreqSliderControl);

inline function onMainC0Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial4AmpSlider").setControlCallback(onMainC0Partial4AmpSliderControl);

inline function onMainC0Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial4DecaySlider").setControlCallback(onMainC0Partial4DecaySliderControl);

inline function onMainC0Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial5FreqSlider").setControlCallback(onMainC0Partial5FreqSliderControl);

inline function onMainC0Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial5AmpSlider").setControlCallback(onMainC0Partial5AmpSliderControl);

inline function onMainC0Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial5DecaySlider").setControlCallback(onMainC0Partial5DecaySliderControl);

inline function onMainC0Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial6FreqSlider").setControlCallback(onMainC0Partial6FreqSliderControl);

inline function onMainC0Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial6AmpSlider").setControlCallback(onMainC0Partial6AmpSliderControl);

inline function onMainC0Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial6DecaySlider").setControlCallback(onMainC0Partial6DecaySliderControl);

inline function onMainC0Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial7FreqSlider").setControlCallback(onMainC0Partial7FreqSliderControl);

inline function onMainC0Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial7AmpSlider").setControlCallback(onMainC0Partial7AmpSliderControl);

inline function onMainC0Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial7DecaySlider").setControlCallback(onMainC0Partial7DecaySliderControl);

inline function onMainC0Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial8FreqSlider").setControlCallback(onMainC0Partial8FreqSliderControl);

inline function onMainC0Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial8AmpSlider").setControlCallback(onMainC0Partial8AmpSliderControl);

inline function onMainC0Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial8DecaySlider").setControlCallback(onMainC0Partial8DecaySliderControl);

inline function onMainC0Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 1, ((1/128)*24), (value*0.5+0.5), 0.5);
    pitch.setTablePoint(1, 0, ((1/128)*24), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC0Partial9FreqSlider").setControlCallback(onMainC0Partial9FreqSliderControl);

inline function onMainC0Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 1, ((1/128)*24), dValue/1, 0.5);
    ampGain.setTablePoint(1, 0, ((1/128)*24), dValue/1, 0.5);
};
Content.getComponent("MainC0Partial9AmpSlider").setControlCallback(onMainC0Partial9AmpSliderControl);

inline function onMainC0Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 1, ((1/128)*24), (value/20000), 0.5);
    decayTime.setTablePoint(1, 0, ((1/128)*24), (value/20000), 0.5);
};
Content.getComponent("MainC0Partial9DecaySlider").setControlCallback(onMainC0Partial9DecaySliderControl);

inline function onMainC2Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial1FreqSlider").setControlCallback(onMainC2Partial1FreqSliderControl);

inline function onMainC2Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial1AmpSlider").setControlCallback(onMainC2Partial1AmpSliderControl);

inline function onMainC2Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial1DecaySlider").setControlCallback(onMainC2Partial1DecaySliderControl);

inline function onMainC2Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial2FreqSlider").setControlCallback(onMainC2Partial2FreqSliderControl);

inline function onMainC2Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial2AmpSlider").setControlCallback(onMainC2Partial2AmpSliderControl);

inline function onMainC2Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial2DecaySlider").setControlCallback(onMainC2Partial2DecaySliderControl);

inline function onMainC2Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial3FreqSlider").setControlCallback(onMainC2Partial3FreqSliderControl);

inline function onMainC2Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial3AmpSlider").setControlCallback(onMainC2Partial3AmpSliderControl);

inline function onMainC2Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial3DecaySlider").setControlCallback(onMainC2Partial3DecaySliderControl);

inline function onMainC2Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial4FreqSlider").setControlCallback(onMainC2Partial4FreqSliderControl);

inline function onMainC2Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial4AmpSlider").setControlCallback(onMainC2Partial4AmpSliderControl);

inline function onMainC2Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial4DecaySlider").setControlCallback(onMainC2Partial4DecaySliderControl);

inline function onMainC2Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial5FreqSlider").setControlCallback(onMainC2Partial5FreqSliderControl);

inline function onMainC2Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial5AmpSlider").setControlCallback(onMainC2Partial5AmpSliderControl);

inline function onMainC2Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial5DecaySlider").setControlCallback(onMainC2Partial5DecaySliderControl);

inline function onMainC2Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial6FreqSlider").setControlCallback(onMainC2Partial6FreqSliderControl);

inline function onMainC2Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial6AmpSlider").setControlCallback(onMainC2Partial6AmpSliderControl);

inline function onMainC2Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial6DecaySlider").setControlCallback(onMainC2Partial6DecaySliderControl);

inline function onMainC2Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial7FreqSlider").setControlCallback(onMainC2Partial7FreqSliderControl);

inline function onMainC2Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial7AmpSlider").setControlCallback(onMainC2Partial7AmpSliderControl);

inline function onMainC2Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial7DecaySlider").setControlCallback(onMainC2Partial7DecaySliderControl);

inline function onMainC2Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial8FreqSlider").setControlCallback(onMainC2Partial8FreqSliderControl);

inline function onMainC2Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial8AmpSlider").setControlCallback(onMainC2Partial8AmpSliderControl);

inline function onMainC2Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial8DecaySlider").setControlCallback(onMainC2Partial8DecaySliderControl);

inline function onMainC2Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 2, ((1/128)*48), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC2Partial9FreqSlider").setControlCallback(onMainC2Partial9FreqSliderControl);

inline function onMainC2Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 2, ((1/128)*48), dValue/1, 0.5);
};
Content.getComponent("MainC2Partial9AmpSlider").setControlCallback(onMainC2Partial9AmpSliderControl);

inline function onMainC2Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 2, ((1/128)*48), (value/20000), 0.5);
};
Content.getComponent("MainC2Partial9DecaySlider").setControlCallback(onMainC2Partial9DecaySliderControl);

inline function onMainC3Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial1FreqSlider").setControlCallback(onMainC3Partial1FreqSliderControl);

inline function onMainC3Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial1AmpSlider").setControlCallback(onMainC3Partial1AmpSliderControl);

inline function onMainC3Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial1DecaySlider").setControlCallback(onMainC3Partial1DecaySliderControl);

inline function onMainC3Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial2FreqSlider").setControlCallback(onMainC3Partial2FreqSliderControl);

inline function onMainC3Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial2AmpSlider").setControlCallback(onMainC3Partial2AmpSliderControl);

inline function onMainC3Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial2DecaySlider").setControlCallback(onMainC3Partial2DecaySliderControl);

inline function onMainC3Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial3FreqSlider").setControlCallback(onMainC3Partial3FreqSliderControl);

inline function onMainC3Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial3AmpSlider").setControlCallback(onMainC3Partial3AmpSliderControl);

inline function onMainC3Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial3DecaySlider").setControlCallback(onMainC3Partial3DecaySliderControl);

inline function onMainC3Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial4FreqSlider").setControlCallback(onMainC3Partial4FreqSliderControl);

inline function onMainC3Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial4AmpSlider").setControlCallback(onMainC3Partial4AmpSliderControl);

inline function onMainC3Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial4DecaySlider").setControlCallback(onMainC3Partial4DecaySliderControl);

inline function onMainC3Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial5FreqSlider").setControlCallback(onMainC3Partial5FreqSliderControl);

inline function onMainC3Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial5AmpSlider").setControlCallback(onMainC3Partial5AmpSliderControl);

inline function onMainC3Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial5DecaySlider").setControlCallback(onMainC3Partial5DecaySliderControl);

inline function onMainC3Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial6FreqSlider").setControlCallback(onMainC3Partial6FreqSliderControl);

inline function onMainC3Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial6AmpSlider").setControlCallback(onMainC3Partial6AmpSliderControl);

inline function onMainC3Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial6DecaySlider").setControlCallback(onMainC3Partial6DecaySliderControl);

inline function onMainC3Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial7FreqSlider").setControlCallback(onMainC3Partial7FreqSliderControl);

inline function onMainC3Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial7AmpSlider").setControlCallback(onMainC3Partial7AmpSliderControl);

inline function onMainC3Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial7DecaySlider").setControlCallback(onMainC3Partial7DecaySliderControl);

inline function onMainC3Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial8FreqSlider").setControlCallback(onMainC3Partial8FreqSliderControl);

inline function onMainC3Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial8AmpSlider").setControlCallback(onMainC3Partial8AmpSliderControl);

inline function onMainC3Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial8DecaySlider").setControlCallback(onMainC3Partial8DecaySliderControl);

inline function onMainC3Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 3, ((1/128)*60), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC3Partial9FreqSlider").setControlCallback(onMainC3Partial9FreqSliderControl);

inline function onMainC3Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 3, ((1/128)*60), dValue/1, 0.5);
};
Content.getComponent("MainC3Partial9AmpSlider").setControlCallback(onMainC3Partial9AmpSliderControl);

inline function onMainC3Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 3, ((1/128)*60), (value/20000), 0.5);
};
Content.getComponent("MainC3Partial9DecaySlider").setControlCallback(onMainC3Partial9DecaySliderControl);

inline function onMainC4Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial1FreqSlider").setControlCallback(onMainC4Partial1FreqSliderControl);

inline function onMainC4Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial1AmpSlider").setControlCallback(onMainC4Partial1AmpSliderControl);

inline function onMainC4Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial1DecaySlider").setControlCallback(onMainC4Partial1DecaySliderControl);

inline function onMainC4Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial2FreqSlider").setControlCallback(onMainC4Partial2FreqSliderControl);

inline function onMainC4Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial2AmpSlider").setControlCallback(onMainC4Partial2AmpSliderControl);

inline function onMainC4Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial2DecaySlider").setControlCallback(onMainC4Partial2DecaySliderControl);

inline function onMainC4Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial3FreqSlider").setControlCallback(onMainC4Partial3FreqSliderControl);

inline function onMainC4Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial3AmpSlider").setControlCallback(onMainC4Partial3AmpSliderControl);

inline function onMainC4Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial3DecaySlider").setControlCallback(onMainC4Partial3DecaySliderControl);

inline function onMainC4Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial4FreqSlider").setControlCallback(onMainC4Partial4FreqSliderControl);

inline function onMainC4Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial4AmpSlider").setControlCallback(onMainC4Partial4AmpSliderControl);

inline function onMainC4Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial4DecaySlider").setControlCallback(onMainC4Partial4DecaySliderControl);

inline function onMainC4Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial5FreqSlider").setControlCallback(onMainC4Partial5FreqSliderControl);

inline function onMainC4Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial5AmpSlider").setControlCallback(onMainC4Partial5AmpSliderControl);

inline function onMainC4Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial5DecaySlider").setControlCallback(onMainC4Partial5DecaySliderControl);

inline function onMainC4Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial6FreqSlider").setControlCallback(onMainC4Partial6FreqSliderControl);

inline function onMainC4Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial6AmpSlider").setControlCallback(onMainC4Partial6AmpSliderControl);

inline function onMainC4Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial6DecaySlider").setControlCallback(onMainC4Partial6DecaySliderControl);

inline function onMainC4Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial7FreqSlider").setControlCallback(onMainC4Partial7FreqSliderControl);

inline function onMainC4Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial7AmpSlider").setControlCallback(onMainC4Partial7AmpSliderControl);

inline function onMainC4Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial7DecaySlider").setControlCallback(onMainC4Partial7DecaySliderControl);

inline function onMainC4Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial8FreqSlider").setControlCallback(onMainC4Partial8FreqSliderControl);

inline function onMainC4Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial8AmpSlider").setControlCallback(onMainC4Partial8AmpSliderControl);

inline function onMainC4Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial8DecaySlider").setControlCallback(onMainC4Partial8DecaySliderControl);

inline function onMainC4Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 4, ((1/128)*72), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC4Partial9FreqSlider").setControlCallback(onMainC4Partial9FreqSliderControl);

inline function onMainC4Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 4, ((1/128)*72), dValue/1, 0.5);
};
Content.getComponent("MainC4Partial9AmpSlider").setControlCallback(onMainC4Partial9AmpSliderControl);

inline function onMainC4Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 4, ((1/128)*72), (value/20000), 0.5);
};
Content.getComponent("MainC4Partial9DecaySlider").setControlCallback(onMainC4Partial9DecaySliderControl);

inline function onMainC5Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial1FreqSlider").setControlCallback(onMainC5Partial1FreqSliderControl);

inline function onMainC5Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial1AmpSlider").setControlCallback(onMainC5Partial1AmpSliderControl);

inline function onMainC5Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial1DecaySlider").setControlCallback(onMainC5Partial1DecaySliderControl);

inline function onMainC5Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial2FreqSlider").setControlCallback(onMainC5Partial2FreqSliderControl);

inline function onMainC5Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial2AmpSlider").setControlCallback(onMainC5Partial2AmpSliderControl);

inline function onMainC5Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial2DecaySlider").setControlCallback(onMainC5Partial2DecaySliderControl);

inline function onMainC5Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial3FreqSlider").setControlCallback(onMainC5Partial3FreqSliderControl);

inline function onMainC5Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial3AmpSlider").setControlCallback(onMainC5Partial3AmpSliderControl);

inline function onMainC5Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial3DecaySlider").setControlCallback(onMainC5Partial3DecaySliderControl);

inline function onMainC5Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial4FreqSlider").setControlCallback(onMainC5Partial4FreqSliderControl);

inline function onMainC5Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial4AmpSlider").setControlCallback(onMainC5Partial4AmpSliderControl);

inline function onMainC5Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial4DecaySlider").setControlCallback(onMainC5Partial4DecaySliderControl);

inline function onMainC5Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial5FreqSlider").setControlCallback(onMainC5Partial5FreqSliderControl);

inline function onMainC5Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial5AmpSlider").setControlCallback(onMainC5Partial5AmpSliderControl);

inline function onMainC5Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial5DecaySlider").setControlCallback(onMainC5Partial5DecaySliderControl);

inline function onMainC5Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial6FreqSlider").setControlCallback(onMainC5Partial6FreqSliderControl);

inline function onMainC5Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial6AmpSlider").setControlCallback(onMainC5Partial6AmpSliderControl);

inline function onMainC5Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial6DecaySlider").setControlCallback(onMainC5Partial6DecaySliderControl);

inline function onMainC5Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial7FreqSlider").setControlCallback(onMainC5Partial7FreqSliderControl);

inline function onMainC5Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial7AmpSlider").setControlCallback(onMainC5Partial7AmpSliderControl);

inline function onMainC5Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial7DecaySlider").setControlCallback(onMainC5Partial7DecaySliderControl);

inline function onMainC5Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial8FreqSlider").setControlCallback(onMainC5Partial8FreqSliderControl);

inline function onMainC5Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial8AmpSlider").setControlCallback(onMainC5Partial8AmpSliderControl);

inline function onMainC5Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial8DecaySlider").setControlCallback(onMainC5Partial8DecaySliderControl);

inline function onMainC5Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 5, ((1/128)*84), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC5Partial9FreqSlider").setControlCallback(onMainC5Partial9FreqSliderControl);

inline function onMainC5Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 5, ((1/128)*84), dValue/1, 0.5);
};
Content.getComponent("MainC5Partial9AmpSlider").setControlCallback(onMainC5Partial9AmpSliderControl);

inline function onMainC5Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 5, ((1/128)*84), (value/20000), 0.5);
};
Content.getComponent("MainC5Partial9DecaySlider").setControlCallback(onMainC5Partial9DecaySliderControl);

inline function onMainC6Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial1FreqSlider").setControlCallback(onMainC6Partial1FreqSliderControl);

inline function onMainC6Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial1AmpSlider").setControlCallback(onMainC6Partial1AmpSliderControl);

inline function onMainC6Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial1DecaySlider").setControlCallback(onMainC6Partial1DecaySliderControl);

inline function onMainC6Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial2FreqSlider").setControlCallback(onMainC6Partial2FreqSliderControl);

inline function onMainC6Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial2AmpSlider").setControlCallback(onMainC6Partial2AmpSliderControl);

inline function onMainC6Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial2DecaySlider").setControlCallback(onMainC6Partial2DecaySliderControl);

inline function onMainC6Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial3FreqSlider").setControlCallback(onMainC6Partial3FreqSliderControl);

inline function onMainC6Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial3AmpSlider").setControlCallback(onMainC6Partial3AmpSliderControl);

inline function onMainC6Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial3DecaySlider").setControlCallback(onMainC6Partial3DecaySliderControl);

inline function onMainC6Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial4FreqSlider").setControlCallback(onMainC6Partial4FreqSliderControl);

inline function onMainC6Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial4AmpSlider").setControlCallback(onMainC6Partial4AmpSliderControl);

inline function onMainC6Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial4DecaySlider").setControlCallback(onMainC6Partial4DecaySliderControl);

inline function onMainC6Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial5FreqSlider").setControlCallback(onMainC6Partial5FreqSliderControl);

inline function onMainC6Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial5AmpSlider").setControlCallback(onMainC6Partial5AmpSliderControl);

inline function onMainC6Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial5DecaySlider").setControlCallback(onMainC6Partial5DecaySliderControl);

inline function onMainC6Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial6FreqSlider").setControlCallback(onMainC6Partial6FreqSliderControl);

inline function onMainC6Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial6AmpSlider").setControlCallback(onMainC6Partial6AmpSliderControl);

inline function onMainC6Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial6DecaySlider").setControlCallback(onMainC6Partial6DecaySliderControl);

inline function onMainC6Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial7FreqSlider").setControlCallback(onMainC6Partial7FreqSliderControl);

inline function onMainC6Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial7AmpSlider").setControlCallback(onMainC6Partial7AmpSliderControl);

inline function onMainC6Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial7DecaySlider").setControlCallback(onMainC6Partial7DecaySliderControl);

inline function onMainC6Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial8FreqSlider").setControlCallback(onMainC6Partial8FreqSliderControl);

inline function onMainC6Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial8AmpSlider").setControlCallback(onMainC6Partial8AmpSliderControl);

inline function onMainC6Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial8DecaySlider").setControlCallback(onMainC6Partial8DecaySliderControl);

inline function onMainC6Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 6, ((1/128)*96), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC6Partial9FreqSlider").setControlCallback(onMainC6Partial9FreqSliderControl);

inline function onMainC6Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 6, ((1/128)*96), dValue/1, 0.5);
};
Content.getComponent("MainC6Partial9AmpSlider").setControlCallback(onMainC6Partial9AmpSliderControl);

inline function onMainC6Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 6, ((1/128)*96), (value/20000), 0.5);
};
Content.getComponent("MainC6Partial9DecaySlider").setControlCallback(onMainC6Partial9DecaySliderControl);

inline function onMainC7Partial1FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain1");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial1FreqSlider").setControlCallback(onMainC7Partial1FreqSliderControl);

inline function onMainC7Partial1AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain1");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial1AmpSlider").setControlCallback(onMainC7Partial1AmpSliderControl);

inline function onMainC7Partial1DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain1");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial1DecaySlider").setControlCallback(onMainC7Partial1DecaySliderControl);

inline function onMainC7Partial2FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain2");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial2FreqSlider").setControlCallback(onMainC7Partial2FreqSliderControl);

inline function onMainC7Partial2AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain2");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial2AmpSlider").setControlCallback(onMainC7Partial2AmpSliderControl);

inline function onMainC7Partial2DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain2");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial2DecaySlider").setControlCallback(onMainC7Partial2DecaySliderControl);

inline function onMainC7Partial3FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain3");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial3FreqSlider").setControlCallback(onMainC7Partial3FreqSliderControl);

inline function onMainC7Partial3AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain3");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial3AmpSlider").setControlCallback(onMainC7Partial3AmpSliderControl);

inline function onMainC7Partial3DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain3");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial3DecaySlider").setControlCallback(onMainC7Partial3DecaySliderControl);

inline function onMainC7Partial4FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain4");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial4FreqSlider").setControlCallback(onMainC7Partial4FreqSliderControl);

inline function onMainC7Partial4AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain4");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial4AmpSlider").setControlCallback(onMainC7Partial4AmpSliderControl);

inline function onMainC7Partial4DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain4");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial4DecaySlider").setControlCallback(onMainC7Partial4DecaySliderControl);

inline function onMainC7Partial5FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain5");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial5FreqSlider").setControlCallback(onMainC7Partial5FreqSliderControl);

inline function onMainC7Partial5AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain5");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial5AmpSlider").setControlCallback(onMainC7Partial5AmpSliderControl);

inline function onMainC7Partial5DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain5");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial5DecaySlider").setControlCallback(onMainC7Partial5DecaySliderControl);

inline function onMainC7Partial6FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain6");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial6FreqSlider").setControlCallback(onMainC7Partial6FreqSliderControl);

inline function onMainC7Partial6AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain6");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial6AmpSlider").setControlCallback(onMainC7Partial6AmpSliderControl);

inline function onMainC7Partial6DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain6");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial6DecaySlider").setControlCallback(onMainC7Partial6DecaySliderControl);

inline function onMainC7Partial7FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain7");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial7FreqSlider").setControlCallback(onMainC7Partial7FreqSliderControl);

inline function onMainC7Partial7AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain7");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial7AmpSlider").setControlCallback(onMainC7Partial7AmpSliderControl);

inline function onMainC7Partial7DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain7");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial7DecaySlider").setControlCallback(onMainC7Partial7DecaySliderControl);

inline function onMainC7Partial8FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain8");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial8FreqSlider").setControlCallback(onMainC7Partial8FreqSliderControl);

inline function onMainC7Partial8AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain8");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial8AmpSlider").setControlCallback(onMainC7Partial8AmpSliderControl);

inline function onMainC7Partial8DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain8");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial8DecaySlider").setControlCallback(onMainC7Partial8DecaySliderControl);

inline function onMainC7Partial9FreqSliderControl(component, value)
{
    local pitch = Synth.getTableProcessor("NotenumberPitchMain9");
    pitch.setTablePoint(1, 7, ((1/128)*108), (value*0.5+0.5), 0.5);
};
Content.getComponent("MainC7Partial9FreqSlider").setControlCallback(onMainC7Partial9FreqSliderControl);

inline function onMainC7Partial9AmpSliderControl(component, value)
{
    local ampGain = Synth.getTableProcessor("NotenumberGainMain9");
    local dValue = Engine.getGainFactorForDecibels(value);
    ampGain.setTablePoint(1, 7, ((1/128)*108), dValue/1, 0.5);
};
Content.getComponent("MainC7Partial9AmpSlider").setControlCallback(onMainC7Partial9AmpSliderControl);

inline function onMainC7Partial9DecaySliderControl(component, value)
{
    local decayTime = Synth.getTableProcessor("NotenumberDecayMain9");
    decayTime.setTablePoint(1, 7, ((1/128)*108), (value/20000), 0.5);
};
Content.getComponent("MainC7Partial9DecaySlider").setControlCallback(onMainC7Partial9DecaySliderControl);


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
 