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

const var arrNotePhase = [[21, -1.203193], [22, -1.203193], [23, -1.203193], [24, 0], [25, -1.203193], [26, -1.203193], [27, -1.203193], [28, -1.203193], [29, -1.203193], [30, -1.203193], [31, -1.203193], [32, -1.203193], [33, -1.203193], [34, -1.203193], [35, -1.203193], [36, -1.203193], [37, -1.203193], [38, -1.203193], [39, -1.203193], [40, -1.203193], [41, -1.203193], [42, -1.203193], [43, -1.203193], [44, -1.203193], [45, -1.203193], [46, -1.203193], [47, -1.203193], [48, -1.203193], [49, -1.203193], [50, -1.203193], [51, -1.203193], [52, -1.203193], [53, -1.203193], [54, -1.203193], [55, -1.203193], [56, -1.203193], [57, -1.203193], [58, -1.203193], [59, -1.203193], [60, -1.203193], [61, -1.203193], [62, -1.203193], [63, -1.203193], [64, -1.203193], [65, -1.203193], [66, -1.203193], [67, -1.203193], [68, -1.203193], [69, -1.203193], [70, -1.203193], [71, -1.203193], [72, -1.203193], [73, -1.203193], [74, -1.203193], [75, -1.203193], [76, -1.203193], [77, -1.203193], [78, -1.203193], [79, -1.203193], [80, -1.203193], [81, -1.203193], [82, -1.203193], [83, -1.203193], [84, -1.203193], [85, -1.203193], [86, -1.203193], [87, -1.203193], [88, -1.203193], [89, -1.203193], [90, -1.203193], [91, -1.203193], [92, -1.203193], [93, -1.203193], [94, -1.203193], [95, -1.203193], [96, -1.203193], [97, -1.203193], [98, -1.203193], [99, -1.203193], [100, -1.203193], [101, -1.203193], [102, -1.203193], [103, -1.203193], [104, -1.203193], [105, -1.203193], [106, -1.203193], [107, -1.203193], [108, -1.203193], [109, -1.203193], [110, -1.203193], [111, -1.203193], [112, -1.203193], [113, -1.203193], [114, -1.203193], [115, -1.203193], [116, -1.203193], [117, -1.203193], [118, -1.203193], [119, -1.203193], [120, -1.203193], [121, -1.203193], [122, -1.203193], [123, -1.203193], [124, -1.203193], [125, -1.203193], [126, -1.203193], [127, -1.203193], [128, -1.203193], [129, -1.203193], [130, -1.203193], [131, -1.203193], [132, -1.203193], [133, -1.203193], [134, -1.203193], [135, -1.203193], [136, -1.203193], [137, -1.203193], [138, -1.203193], ]
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
 