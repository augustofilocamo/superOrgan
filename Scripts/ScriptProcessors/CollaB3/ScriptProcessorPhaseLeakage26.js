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

const var arrNotePhase = [[21, -0.584417], [22, -0.584417], [23, -0.584417], [24, 0], [25, -0.584417], [26, -0.584417], [27, -0.584417], [28, -0.584417], [29, -0.584417], [30, -0.584417], [31, -0.584417], [32, -0.584417], [33, -0.584417], [34, -0.584417], [35, -0.584417], [36, -0.584417], [37, -0.584417], [38, -0.584417], [39, -0.584417], [40, -0.584417], [41, -0.584417], [42, -0.584417], [43, -0.584417], [44, -0.584417], [45, -0.584417], [46, -0.584417], [47, -0.584417], [48, -0.584417], [49, -0.584417], [50, -0.584417], [51, -0.584417], [52, -0.584417], [53, -0.584417], [54, -0.584417], [55, -0.584417], [56, -0.584417], [57, -0.584417], [58, -0.584417], [59, -0.584417], [60, -0.584417], [61, -0.584417], [62, -0.584417], [63, -0.584417], [64, -0.584417], [65, -0.584417], [66, -0.584417], [67, -0.584417], [68, -0.584417], [69, -0.584417], [70, -0.584417], [71, -0.584417], [72, -0.584417], [73, -0.584417], [74, -0.584417], [75, -0.584417], [76, -0.584417], [77, -0.584417], [78, -0.584417], [79, -0.584417], [80, -0.584417], [81, -0.584417], [82, -0.584417], [83, -0.584417], [84, -0.584417], [85, -0.584417], [86, -0.584417], [87, -0.584417], [88, -0.584417], [89, -0.584417], [90, -0.584417], [91, -0.584417], [92, -0.584417], [93, -0.584417], [94, -0.584417], [95, -0.584417], [96, -0.584417], [97, -0.584417], [98, -0.584417], [99, -0.584417], [100, -0.584417], [101, -0.584417], [102, -0.584417], [103, -0.584417], [104, -0.584417], [105, -0.584417], [106, -0.584417], [107, -0.584417], [108, -0.584417], [109, -0.584417], [110, -0.584417], [111, -0.584417], [112, -0.584417], [113, -0.584417], [114, -0.584417], [115, -0.584417], [116, -0.584417], [117, -0.584417], [118, -0.584417], [119, -0.584417], [120, -0.584417], [121, -0.584417], [122, -0.584417], [123, -0.584417], [124, -0.584417], [125, -0.584417], [126, -0.584417], [127, -0.584417], [128, -0.584417], [129, -0.584417], [130, -0.584417], [131, -0.584417], [132, -0.584417], [133, -0.584417], [134, -0.584417], [135, -0.584417], [136, -0.584417], [137, -0.584417], [138, -0.584417], ]
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
 