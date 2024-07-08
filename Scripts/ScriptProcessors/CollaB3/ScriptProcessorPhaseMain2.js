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

const var arrNotePhase = [[21, 4.34672], [22, 4.34672], [23, 4.34672], [24, 0], [25, 4.34672], [26, 4.34672], [27, 4.34672], [28, 4.34672], [29, 4.34672], [30, 4.34672], [31, 4.34672], [32, 4.34672], [33, 4.34672], [34, 4.34672], [35, 4.34672], [36, 4.34672], [37, 4.34672], [38, 4.34672], [39, 4.34672], [40, 4.34672], [41, 4.34672], [42, 4.34672], [43, 4.34672], [44, 4.34672], [45, 4.34672], [46, 4.34672], [47, 4.34672], [48, 4.34672], [49, 0.0875], [50, 0.0875], [51, 0.0875], [52, 0.0875], [53, 0.0875], [54, 0.0875], [55, 0.0875], [56, 0.0875], [57, 0.0875], [58, 0.0875], [59, 0.0875], [60, 0.0875], [61, -0.67385], [62, -0.67385], [63, -0.67385], [64, -0.67385], [65, -0.67385], [66, -0.67385], [67, -0.67385], [68, -0.67385], [69, -0.67385], [70, -0.67385], [71, -0.67385], [72, -0.67385], [73, 0.93892], [74, 0.93892], [75, 0.93892], [76, 0.93892], [77, 0.93892], [78, 0.93892], [79, 0.93892], [80, 0.93892], [81, 0.93892], [82, 0.93892], [83, 0.93892], [84, 0.93892], [85, -0.53563], [86, -0.53563], [87, -0.53563], [88, -0.53563], [89, -0.53563], [90, -0.53563], [91, -0.53563], [92, -0.53563], [93, -0.53563], [94, -0.53563], [95, -0.53563], [96, -0.53563], [97, -0.53563], [98, -0.53563], [99, -0.53563], [100, -0.53563], [101, -0.53563], [102, -0.53563], [103, -0.53563], [104, -0.53563], [105, -0.53563], [106, -0.53563], [107, -0.53563], [108, -0.53563], [109, -0.53563], [110, -0.53563], [111, -0.53563], [112, -0.53563], [113, -0.53563], [114, -0.53563], [115, -0.53563], [116, -0.53563], [117, -0.53563], [118, -0.53563], [119, -0.53563], [120, -0.53563], [121, -0.53563], [122, -0.53563], [123, -0.53563], [124, -0.53563], [125, -0.53563], [126, -0.53563], [127, -0.53563], [128, -0.53563], [129, -0.53563], [130, -0.53563], [131, -0.53563], [132, -0.53563], [133, -0.53563], [134, -0.53563], [135, -0.53563], [136, -0.53563], [137, -0.53563], [138, -0.53563], ]
function onNoteOn()
{
  local notePlayed = Message.getNoteNumber() -24;  
  Message.setStartOffset(Math.toDegrees((arrNotePhase[notePlayed][1] + (2*Math.PI))) / 360 * 2048);
  //Console.print(Math.toDegrees((arrNotePhase[notePlayed][1] + 6.28)) / 360 * 2048);
  Console.print(arrNotePhase[notePlayed][1] + 6.28);
  //Console.print(arrNotePhase[notePlayed][1]);
  //Console.print(Message.getNoteNumber() + " << midinote");
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
 