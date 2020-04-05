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

const var arrNotePhase = [[21, 2.456737], [22, 2.456737], [23, 2.456737], [24, 0], [25, 2.456737], [26, 2.456737], [27, 2.456737], [28, 2.456737], [29, 2.456737], [30, 2.456737], [31, 2.456737], [32, 2.456737], [33, 2.456737], [34, 2.456737], [35, 2.456737], [36, 2.456737], [37, 2.456737], [38, 2.456737], [39, 2.456737], [40, 2.456737], [41, 2.456737], [42, 2.456737], [43, 2.456737], [44, 2.456737], [45, 2.456737], [46, 2.456737], [47, 2.456737], [48, 2.456737], [49, 2.456737], [50, 2.456737], [51, 2.456737], [52, 2.456737], [53, 2.456737], [54, 2.456737], [55, 2.456737], [56, 2.456737], [57, 2.456737], [58, 2.456737], [59, 2.456737], [60, 2.456737], [61, 2.456737], [62, 2.456737], [63, 2.456737], [64, 2.456737], [65, 2.456737], [66, 2.456737], [67, 2.456737], [68, 2.456737], [69, 2.456737], [70, 2.456737], [71, 2.456737], [72, 2.456737], [73, 2.456737], [74, 2.456737], [75, 2.456737], [76, 2.456737], [77, 2.456737], [78, 2.456737], [79, 2.456737], [80, 2.456737], [81, 2.456737], [82, 2.456737], [83, 2.456737], [84, 2.456737], [85, 2.456737], [86, 2.456737], [87, 2.456737], [88, 2.456737], [89, 2.456737], [90, 2.456737], [91, 2.456737], [92, 2.456737], [93, 2.456737], [94, 2.456737], [95, 2.456737], [96, 2.456737], [97, 2.456737], [98, 2.456737], [99, 2.456737], [100, 2.456737], [101, 2.456737], [102, 2.456737], [103, 2.456737], [104, 2.456737], [105, 2.456737], [106, 2.456737], [107, 2.456737], [108, 2.456737], [109, 2.456737], [110, 2.456737], [111, 2.456737], [112, 2.456737], [113, 2.456737], [114, 2.456737], [115, 2.456737], [116, 2.456737], [117, 2.456737], [118, 2.456737], [119, 2.456737], [120, 2.456737], [121, 2.456737], [122, 2.456737], [123, 2.456737], [124, 2.456737], [125, 2.456737], [126, 2.456737], [127, 2.456737], [128, 2.456737], [129, 2.456737], [130, 2.456737], [131, 2.456737], [132, 2.456737], [133, 2.456737], [134, 2.456737], [135, 2.456737], [136, 2.456737], [137, 2.456737], [138, 2.456737], ]
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
 