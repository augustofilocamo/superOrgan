/*
  Copyright 2020 Studio427 Audio & Augusto Filocamo
  
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

const var arrNotePhase = [[21, -4.92881], [22, -4.92881], [23, -4.92881], [24, 0], [25, -4.92881], [26, -4.92881], [27, -4.92881], [28, -4.92881], [29, -4.92881], [30, -4.92881], [31, -4.92881], [32, -4.92881], [33, -4.92881], [34, -4.92881], [35, -4.92881], [36, -4.92881], [37, -4.92881], [38, -4.92881], [39, -4.92881], [40, -4.92881], [41, -4.92881], [42, -4.92881], [43, -4.92881], [44, -4.92881], [45, -4.92881], [46, -4.92881], [47, -4.92881], [48, -4.92881], [49, -4.92881], [50, -4.92881], [51, -4.92881], [52, -4.92881], [53, -4.92881], [54, -4.92881], [55, -4.92881], [56, -4.92881], [57, -4.92881], [58, -4.92881], [59, -4.92881], [60, -4.92881], [61, -4.92881], [62, -4.92881], [63, -4.92881], [64, -4.92881], [65, -4.92881], [66, -4.92881], [67, -4.92881], [68, -4.92881], [69, -4.92881], [70, -4.92881], [71, -4.92881], [72, -4.92881], [73, -4.92881], [74, -4.92881], [75, -4.92881], [76, -4.92881], [77, -4.92881], [78, -4.92881], [79, -4.92881], [80, -4.92881], [81, -4.92881], [82, -4.92881], [83, -4.92881], [84, -4.92881], [85, -4.92881], [86, -4.92881], [87, -4.92881], [88, -4.92881], [89, -4.92881], [90, -4.92881], [91, -4.92881], [92, -4.92881], [93, -4.92881], [94, -4.92881], [95, -4.92881], [96, -4.92881], [97, -4.92881], [98, -4.92881], [99, -4.92881], [100, -4.92881], [101, -4.92881], [102, -4.92881], [103, -4.92881], [104, -4.92881], [105, -4.92881], [106, -4.92881], [107, -4.92881], [108, -4.92881], [109, -4.92881], [110, -4.92881], [111, -4.92881], [112, -4.92881], [113, -4.92881], [114, -4.92881], [115, -4.92881], [116, -4.92881], [117, -4.92881], [118, -4.92881], [119, -4.92881], [120, -4.92881], [121, -4.92881], [122, -4.92881], [123, -4.92881], [124, -4.92881], [125, -4.92881], [126, -4.92881], [127, -4.92881], [128, -4.92881], [129, -4.92881], [130, -4.92881], [131, -4.92881], [132, -4.92881], [133, -4.92881], [134, -4.92881], [135, -4.92881], [136, -4.92881], [137, -4.92881], [138, -4.92881], ]
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
 