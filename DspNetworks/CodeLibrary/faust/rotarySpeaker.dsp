import("stdfaust.lib");


//// params
// amp
amp_drive = hslider("[0]Amp drive", 0.1, 0, 1, 0.01) : si.smoo;
// crossover
xver_freq = hslider("[1]Crossover freq (Hz)", 800, 200, 8000, 0.01) : si.smoo;
// bass
bass_speed = hslider("[00]Bass speed (RPM)", 30, 5, 500, 0.01) : si.smoo;
bass_am_depth = hslider("[1]Bass AM depth", 1, 0, 10, 0.01) : si.smoo;
// treble
treble_speed = hslider("[00]Treble speed (RPM)", 35, 5, 500, 0.01) : si.smoo;
treble_radius = hslider("[1]Treble radius (cm)", 19, 5, 30, 0.01) : si.smoo;
treble_mics = hslider("[2]Mics distance (deg)", 90, 0, 180, 0.01) : si.smoo;
treble_am_depth = hslider("[3]Treble AM depth", 1, 0, 10, 0.01) : si.smoo;
treble_lpf_freq = hslider("[4]Treble LPF center freq (Hz)", 1500, 500, 3000, 0.01) : si.smoo;
treble_lpf_depth = hslider("[5]Treble LPF depth (oct.)", 1, 0, 4, 0.01) : si.smoo;
treble_horn_freq = hslider("[6]Horn resonance freq (Hz)", 2000, 1000, 3000, 0.01) : si.smoo;
// mix
bass_mix = hslider("[999]Bass mix (%)", 100, 0, 100, 0.01) : si.smoo;
treble_mix = hslider("[999]Treble mix (%)", 100, 0, 100, 0.01) : si.smoo;


//// modules
// phasor
rotation(bpm) = os.lf_saw(bpm / 60) : *(ma.PI);
// tube amplifier
amplifier(g) = ef.cubicnl_nodc(g, 0.1);
// passive crossover
crossover(fc) = _ <: high,low
with {
  high = fi.highpass(2, fc) : fi.highpass(2, fc);
  low = fi.lowpass(2, fc) : fi.lowpass(2, fc);
};
// source-listener distance
distance(radius, theta) = sqrt(x_dist*x_dist + y_dist*y_dist)
with {
	x_dist = radius + radius*cos(theta);
	y_dist = radius + radius*sin(theta);
};
// doppler simulation based on delay lines
doppler(radius, theta) = de.fdelay(10000, distance_hat)
with {
  distance_hat = distance(radius, theta) : /(100)  : /(343) : *(ma.SR);
};
// amplitude modulation
am(radius, theta, depth) = *(gain)
with {
  gain = pow(10, ((norm_level*depth)/20))
  with {
    // signal level, normalized in range +/- 1
    norm_level = (sqrt(2) - (distance(radius, theta) / radius));
  };
};
// variable low pass filter
lpf(radius, theta, freq, depth) = fi.lowpass(2, fc)
with {
  fc = freq * pow(2, depth * norm_level)
  with {
    norm_level = (sqrt(2) - (distance(radius, theta) / radius));
  };
};
// horn frequency response
horn(f) = peak
with {
  peak = fi.peak_eq(10, f, 4000);
};


//// signal routing and UI
bass_theta_view = hbargraph("[01]Bass rotation angle", -1*ma.PI, ma.PI);
bass_theta = rotation(bass_speed) : bass_theta_view;
bass = crossover(200) : (*(-1) : am(1, bass_theta, bass_am_depth)),_ : + :  *(bass_mix/100);
bass_group = vgroup("[0]Bass channel", bass);

treble_theta_view = hbargraph("[01]Treble rotation angle", -1*ma.PI, ma.PI);
treble_theta = rotation(treble_speed) : treble_theta_view;
treble_channel(radius, theta) = doppler(radius, theta) :  am(radius, theta, treble_am_depth) : lpf(radius, theta, treble_lpf_freq, treble_lpf_depth) : horn(treble_horn_freq) : *(treble_mix/100);
treble_channel_group(radius, theta) = vgroup("[1]Treble channels", treble_channel(radius, theta));
treble_theta_l = treble_theta - (treble_mics / 360 * ma.PI);
treble_theta_r = treble_theta + (treble_mics / 360 * ma.PI);
treble = _ <: treble_channel_group(treble_radius, treble_theta_l),treble_channel_group(treble_radius, treble_theta_r);

xver_signals_group = hgroup("[2]Signal channels", treble,(bass_group <: _,_));

//// process
process = amplifier(amp_drive) : crossover(xver_freq) : xver_signals_group :> _,_;