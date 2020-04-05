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

const var arrNotePhase = [[21, -1.552741], [22, -1.552741], [23, -1.552741], [24, 0], [25, -1.552741], [26, -1.552741], [27, -1.552741], [28, -1.552741], [29, -1.552741], [30, -1.552741], [31, -1.552741], [32, -1.552741], [33, -1.552741], [34, -1.552741], [35, -1.552741], [36, -1.552741], [37, -1.552741], [38, -1.552741], [39, -1.552741], [40, -1.552741], [41, -1.552741], [42, -1.552741], [43, -1.552741], [44, -1.552741], [45, -1.552741], [46, -1.552741], [47, -1.552741], [48, -1.552741], [49, -1.786752], [50, -1.786752], [51, -1.786752], [52, -1.786752], [53, -1.786752], [54, -1.786752], [55, -1.786752], [56, -1.786752], [57, -1.786752], [58, -1.786752], [59, -1.786752], [60, -1.786752], [61, 0.0], [62, 0.0], [63, 0.0], [64, 0.0], [65, 0.0], [66, 0.0], [67, 0.0], [68, 0.0], [69, 0.0], [70, 0.0], [71, 0.0], [72, 0.0], [73, 0.0], [74, 0.0], [75, 0.0], [76, 0.0], [77, 0.0], [78, 0.0], [79, 0.0], [80, 0.0], [81, 0.0], [82, 0.0], [83, 0.0], [84, 0.0], [85, 0.0], [86, 0.0], [87, 0.0], [88, 0.0], [89, 0.0], [90, 0.0], [91, 0.0], [92, 0.0], [93, 0.0], [94, 0.0], [95, 0.0], [96, 0.0], [97, 0.0], [98, 0.0], [99, 0.0], [100, 0.0], [101, 0.0], [102, 0.0], [103, 0.0], [104, 0.0], [105, 0.0], [106, 0.0], [107, 0.0], [108, 0.0], [109, 0.0], [110, 0.0], [111, 0.0], [112, 0.0], [113, 0.0], [114, 0.0], [115, 0.0], [116, 0.0], [117, 0.0], [118, 0.0], [119, 0.0], [120, 0.0], [121, 0.0], [122, 0.0], [123, 0.0], [124, 0.0], [125, 0.0], [126, 0.0], [127, 0.0], [128, 0.0], [129, 0.0], [130, 0.0], [131, 0.0], [132, 0.0], [133, 0.0], [134, 0.0], [135, 0.0], [136, 0.0], [137, 0.0], [138, 0.0], ]
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
 