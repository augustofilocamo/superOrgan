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

const var arrNotePhase = [[21, -1.1647], [22, -1.1647], [23, -1.1647], [24, 0], [25, -1.1647], [26, -1.1647], [27, -1.1647], [28, -1.1647], [29, -1.1647], [30, -1.1647], [31, -1.1647], [32, -1.1647], [33, -1.1647], [34, -1.1647], [35, -1.1647], [36, -1.1647], [37, -1.1647], [38, -1.1647], [39, -1.1647], [40, -1.1647], [41, -1.1647], [42, -1.1647], [43, -1.1647], [44, -1.1647], [45, -1.1647], [46, -1.1647], [47, -1.1647], [48, -1.1647], [49, -1.1647], [50, -1.1647], [51, -1.1647], [52, -1.1647], [53, -1.1647], [54, -1.1647], [55, -1.1647], [56, -1.1647], [57, -1.1647], [58, -1.1647], [59, -1.1647], [60, -1.1647], [61, -1.1647], [62, -1.1647], [63, -1.1647], [64, -1.1647], [65, -1.1647], [66, -1.1647], [67, -1.1647], [68, -1.1647], [69, -1.1647], [70, -1.1647], [71, -1.1647], [72, -1.1647], [73, -1.1647], [74, -1.1647], [75, -1.1647], [76, -1.1647], [77, -1.1647], [78, -1.1647], [79, -1.1647], [80, -1.1647], [81, -1.1647], [82, -1.1647], [83, -1.1647], [84, -1.1647], [85, -1.1647], [86, -1.1647], [87, -1.1647], [88, -1.1647], [89, -1.1647], [90, -1.1647], [91, -1.1647], [92, -1.1647], [93, -1.1647], [94, -1.1647], [95, -1.1647], [96, -1.1647], [97, -1.1647], [98, -1.1647], [99, -1.1647], [100, -1.1647], [101, -1.1647], [102, -1.1647], [103, -1.1647], [104, -1.1647], [105, -1.1647], [106, -1.1647], [107, -1.1647], [108, -1.1647], [109, -1.1647], [110, -1.1647], [111, -1.1647], [112, -1.1647], [113, -1.1647], [114, -1.1647], [115, -1.1647], [116, -1.1647], [117, -1.1647], [118, -1.1647], [119, -1.1647], [120, -1.1647], [121, -1.1647], [122, -1.1647], [123, -1.1647], [124, -1.1647], [125, -1.1647], [126, -1.1647], [127, -1.1647], [128, -1.1647], [129, -1.1647], [130, -1.1647], [131, -1.1647], [132, -1.1647], [133, -1.1647], [134, -1.1647], [135, -1.1647], [136, -1.1647], [137, -1.1647], [138, -1.1647], ]
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
 