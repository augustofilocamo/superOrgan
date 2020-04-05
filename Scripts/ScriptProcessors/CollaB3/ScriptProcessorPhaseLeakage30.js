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

const var arrNotePhase = [[21, -2.61808], [22, -2.61808], [23, -2.61808], [24, 0], [25, -2.61808], [26, -2.61808], [27, -2.61808], [28, -2.61808], [29, -2.61808], [30, -2.61808], [31, -2.61808], [32, -2.61808], [33, -2.61808], [34, -2.61808], [35, -2.61808], [36, -2.61808], [37, -2.61808], [38, -2.61808], [39, -2.61808], [40, -2.61808], [41, -2.61808], [42, -2.61808], [43, -2.61808], [44, -2.61808], [45, -2.61808], [46, -2.61808], [47, -2.61808], [48, -2.61808], [49, -2.61808], [50, -2.61808], [51, -2.61808], [52, -2.61808], [53, -2.61808], [54, -2.61808], [55, -2.61808], [56, -2.61808], [57, -2.61808], [58, -2.61808], [59, -2.61808], [60, -2.61808], [61, -2.61808], [62, -2.61808], [63, -2.61808], [64, -2.61808], [65, -2.61808], [66, -2.61808], [67, -2.61808], [68, -2.61808], [69, -2.61808], [70, -2.61808], [71, -2.61808], [72, -2.61808], [73, -2.61808], [74, -2.61808], [75, -2.61808], [76, -2.61808], [77, -2.61808], [78, -2.61808], [79, -2.61808], [80, -2.61808], [81, -2.61808], [82, -2.61808], [83, -2.61808], [84, -2.61808], [85, -2.61808], [86, -2.61808], [87, -2.61808], [88, -2.61808], [89, -2.61808], [90, -2.61808], [91, -2.61808], [92, -2.61808], [93, -2.61808], [94, -2.61808], [95, -2.61808], [96, -2.61808], [97, -2.61808], [98, -2.61808], [99, -2.61808], [100, -2.61808], [101, -2.61808], [102, -2.61808], [103, -2.61808], [104, -2.61808], [105, -2.61808], [106, -2.61808], [107, -2.61808], [108, -2.61808], [109, -2.61808], [110, -2.61808], [111, -2.61808], [112, -2.61808], [113, -2.61808], [114, -2.61808], [115, -2.61808], [116, -2.61808], [117, -2.61808], [118, -2.61808], [119, -2.61808], [120, -2.61808], [121, -2.61808], [122, -2.61808], [123, -2.61808], [124, -2.61808], [125, -2.61808], [126, -2.61808], [127, -2.61808], [128, -2.61808], [129, -2.61808], [130, -2.61808], [131, -2.61808], [132, -2.61808], [133, -2.61808], [134, -2.61808], [135, -2.61808], [136, -2.61808], [137, -2.61808], [138, -2.61808], ]
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
 