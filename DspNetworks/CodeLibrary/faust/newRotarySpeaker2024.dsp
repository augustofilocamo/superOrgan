import("stdfaust.lib");

msec2samp = ba.sec2samp(1) / 1000;
rate = hslider("Rate", 0, 0, 7, 0.01);
depth = hslider("Depth", 50, 1, 70, 0.01);
detune = rate / 70;
gain = hslider("Drive", 1.7, 0.1, 10, 0.1);
hornRate = hslider("HornSpeed", 1, 0, 1.5, 0.001);
drumSpeed = hslider("DrumSpeed", 1, 0, 1.5, 0.001);
bassMix = hslider("BassMix", 0.4, 0, 1, 0.001);

transpose(st) = ef.transpose(20, 10, st), ef.transpose(20, 10, st);

drive(d0, d1, gain) = (1/atan(2)) * atan(2 * d0 * gain), (1/atan(2)) * atan(2 * d1 * gain);

doppler =
    de.fdelay(msec2samp, os.lf_trianglepos(rate * hornRate) * depth) * os.lf_trianglepos(rate * hornRate),
    de.fdelay(msec2samp, os.lf_trianglepos(rate * hornRate) - (os.lf_trianglepos(rate * hornRate) * msec2samp) * depth) * (1 - os.lf_trianglepos(rate * hornRate));

unisono = _ * 0.25, _ * 0.25 <: transpose(3.26 * detune), transpose(-3.26 * detune), transpose(2.09 * detune), transpose(-2.09 * detune), transpose(1.09 * detune), transpose(-1.09 * detune) :> _, _;

wires(w0, w1, w2) = w0 + w2, w1 + w2;

drum = fi.lowpass(1, 300) <: unisono : fi.resonbp(100, 1, 1), fi.resonbp(280, 0.7, 1) : _ * bassMix * (1 - os.lf_trianglepos(rate / 3 * drumSpeed)) + _ * bassMix * os.lf_trianglepos(rate / 3 * drumSpeed);

horn = fi.highpass(1, 400) <: doppler : unisono : fi.resonbp(2000, 1.2, 1), fi.resonbp(1900, 1.2, 1);

process = drive(_, _, gain) : drum, horn : wires(_, _);
