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

const var arrNotePhase = [[21, -3.3897], [22, -3.3897], [23, -3.3897], [24, 0], [25, -3.3897], [26, -3.3897], [27, -3.3897], [28, -3.3897], [29, -3.3897], [30, -3.3897], [31, -3.3897], [32, -3.3897], [33, -3.3897], [34, -3.3897], [35, -3.3897], [36, -3.3897], [37, -3.3897], [38, -3.3897], [39, -3.3897], [40, -3.3897], [41, -3.3897], [42, -3.3897], [43, -3.3897], [44, -3.3897], [45, -3.3897], [46, -3.3897], [47, -3.3897], [48, -3.3897], [49, -3.3897], [50, -3.3897], [51, -3.3897], [52, -3.3897], [53, -3.3897], [54, -3.3897], [55, -3.3897], [56, -3.3897], [57, -3.3897], [58, -3.3897], [59, -3.3897], [60, -3.3897], [61, -3.3897], [62, -3.3897], [63, -3.3897], [64, -3.3897], [65, -3.3897], [66, -3.3897], [67, -3.3897], [68, -3.3897], [69, -3.3897], [70, -3.3897], [71, -3.3897], [72, -3.3897], [73, -3.3897], [74, -3.3897], [75, -3.3897], [76, -3.3897], [77, -3.3897], [78, -3.3897], [79, -3.3897], [80, -3.3897], [81, -3.3897], [82, -3.3897], [83, -3.3897], [84, -3.3897], [85, -3.3897], [86, -3.3897], [87, -3.3897], [88, -3.3897], [89, -3.3897], [90, -3.3897], [91, -3.3897], [92, -3.3897], [93, -3.3897], [94, -3.3897], [95, -3.3897], [96, -3.3897], [97, -3.3897], [98, -3.3897], [99, -3.3897], [100, -3.3897], [101, -3.3897], [102, -3.3897], [103, -3.3897], [104, -3.3897], [105, -3.3897], [106, -3.3897], [107, -3.3897], [108, -3.3897], [109, -3.3897], [110, -3.3897], [111, -3.3897], [112, -3.3897], [113, -3.3897], [114, -3.3897], [115, -3.3897], [116, -3.3897], [117, -3.3897], [118, -3.3897], [119, -3.3897], [120, -3.3897], [121, -3.3897], [122, -3.3897], [123, -3.3897], [124, -3.3897], [125, -3.3897], [126, -3.3897], [127, -3.3897], [128, -3.3897], [129, -3.3897], [130, -3.3897], [131, -3.3897], [132, -3.3897], [133, -3.3897], [134, -3.3897], [135, -3.3897], [136, -3.3897], [137, -3.3897], [138, -3.3897], ]
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
 