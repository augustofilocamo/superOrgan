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

const var arrNotePhase = [[21, 5.21868], [22, 5.21868], [23, 5.21868], [24, 0], [25, 5.21868], [26, 5.21868], [27, 5.21868], [28, 5.21868], [29, 5.21868], [30, 5.21868], [31, 5.21868], [32, 5.21868], [33, 5.21868], [34, 5.21868], [35, 5.21868], [36, 5.21868], [37, 5.21868], [38, 5.21868], [39, 5.21868], [40, 5.21868], [41, 5.21868], [42, 5.21868], [43, 5.21868], [44, 5.21868], [45, 5.21868], [46, 5.21868], [47, 5.21868], [48, 5.21868], [49, 5.21868], [50, 5.21868], [51, 5.21868], [52, 5.21868], [53, 5.21868], [54, 5.21868], [55, 5.21868], [56, 5.21868], [57, 5.21868], [58, 5.21868], [59, 5.21868], [60, 5.21868], [61, 5.21868], [62, 5.21868], [63, 5.21868], [64, 5.21868], [65, 5.21868], [66, 5.21868], [67, 5.21868], [68, 5.21868], [69, 5.21868], [70, 5.21868], [71, 5.21868], [72, 5.21868], [73, 5.21868], [74, 5.21868], [75, 5.21868], [76, 5.21868], [77, 5.21868], [78, 5.21868], [79, 5.21868], [80, 5.21868], [81, 5.21868], [82, 5.21868], [83, 5.21868], [84, 5.21868], [85, 5.21868], [86, 5.21868], [87, 5.21868], [88, 5.21868], [89, 5.21868], [90, 5.21868], [91, 5.21868], [92, 5.21868], [93, 5.21868], [94, 5.21868], [95, 5.21868], [96, 5.21868], [97, 5.21868], [98, 5.21868], [99, 5.21868], [100, 5.21868], [101, 5.21868], [102, 5.21868], [103, 5.21868], [104, 5.21868], [105, 5.21868], [106, 5.21868], [107, 5.21868], [108, 5.21868], [109, 5.21868], [110, 5.21868], [111, 5.21868], [112, 5.21868], [113, 5.21868], [114, 5.21868], [115, 5.21868], [116, 5.21868], [117, 5.21868], [118, 5.21868], [119, 5.21868], [120, 5.21868], [121, 5.21868], [122, 5.21868], [123, 5.21868], [124, 5.21868], [125, 5.21868], [126, 5.21868], [127, 5.21868], [128, 5.21868], [129, 5.21868], [130, 5.21868], [131, 5.21868], [132, 5.21868], [133, 5.21868], [134, 5.21868], [135, 5.21868], [136, 5.21868], [137, 5.21868], [138, 5.21868], ]
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
 