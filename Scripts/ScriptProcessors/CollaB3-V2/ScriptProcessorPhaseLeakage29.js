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

const var arrNotePhase = [[21, -3.1572], [22, -3.1572], [23, -3.1572], [24, 0], [25, -3.1572], [26, -3.1572], [27, -3.1572], [28, -3.1572], [29, -3.1572], [30, -3.1572], [31, -3.1572], [32, -3.1572], [33, -3.1572], [34, -3.1572], [35, -3.1572], [36, -3.1572], [37, -3.1572], [38, -3.1572], [39, -3.1572], [40, -3.1572], [41, -3.1572], [42, -3.1572], [43, -3.1572], [44, -3.1572], [45, -3.1572], [46, -3.1572], [47, -3.1572], [48, -3.1572], [49, -3.1572], [50, -3.1572], [51, -3.1572], [52, -3.1572], [53, -3.1572], [54, -3.1572], [55, -3.1572], [56, -3.1572], [57, -3.1572], [58, -3.1572], [59, -3.1572], [60, -3.1572], [61, -3.1572], [62, -3.1572], [63, -3.1572], [64, -3.1572], [65, -3.1572], [66, -3.1572], [67, -3.1572], [68, -3.1572], [69, -3.1572], [70, -3.1572], [71, -3.1572], [72, -3.1572], [73, -3.1572], [74, -3.1572], [75, -3.1572], [76, -3.1572], [77, -3.1572], [78, -3.1572], [79, -3.1572], [80, -3.1572], [81, -3.1572], [82, -3.1572], [83, -3.1572], [84, -3.1572], [85, -3.1572], [86, -3.1572], [87, -3.1572], [88, -3.1572], [89, -3.1572], [90, -3.1572], [91, -3.1572], [92, -3.1572], [93, -3.1572], [94, -3.1572], [95, -3.1572], [96, -3.1572], [97, -3.1572], [98, -3.1572], [99, -3.1572], [100, -3.1572], [101, -3.1572], [102, -3.1572], [103, -3.1572], [104, -3.1572], [105, -3.1572], [106, -3.1572], [107, -3.1572], [108, -3.1572], [109, -3.1572], [110, -3.1572], [111, -3.1572], [112, -3.1572], [113, -3.1572], [114, -3.1572], [115, -3.1572], [116, -3.1572], [117, -3.1572], [118, -3.1572], [119, -3.1572], [120, -3.1572], [121, -3.1572], [122, -3.1572], [123, -3.1572], [124, -3.1572], [125, -3.1572], [126, -3.1572], [127, -3.1572], [128, -3.1572], [129, -3.1572], [130, -3.1572], [131, -3.1572], [132, -3.1572], [133, -3.1572], [134, -3.1572], [135, -3.1572], [136, -3.1572], [137, -3.1572], [138, -3.1572], ]
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
 