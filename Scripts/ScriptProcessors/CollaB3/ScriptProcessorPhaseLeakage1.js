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

const var arrNotePhase = [[21, -2.53366], [22, -2.53366], [23, -2.53366], [24, 0], [25, -2.53366], [26, -2.53366], [27, -2.53366], [28, -2.53366], [29, -2.53366], [30, -2.53366], [31, -2.53366], [32, -2.53366], [33, -2.53366], [34, -2.53366], [35, -2.53366], [36, -2.53366], [37, -2.53366], [38, -2.53366], [39, -2.53366], [40, -2.53366], [41, -2.53366], [42, -2.53366], [43, -2.53366], [44, -2.53366], [45, -2.53366], [46, -2.53366], [47, -2.53366], [48, -2.53366], [49, -2.53366], [50, -2.53366], [51, -2.53366], [52, -2.53366], [53, -2.53366], [54, -2.53366], [55, -2.53366], [56, -2.53366], [57, -2.53366], [58, -2.53366], [59, -2.53366], [60, -2.53366], [61, -2.53366], [62, -2.53366], [63, -2.53366], [64, -2.53366], [65, -2.53366], [66, -2.53366], [67, -2.53366], [68, -2.53366], [69, -2.53366], [70, -2.53366], [71, -2.53366], [72, -2.53366], [73, -2.53366], [74, -2.53366], [75, -2.53366], [76, -2.53366], [77, -2.53366], [78, -2.53366], [79, -2.53366], [80, -2.53366], [81, -2.53366], [82, -2.53366], [83, -2.53366], [84, -2.53366], [85, -2.53366], [86, -2.53366], [87, -2.53366], [88, -2.53366], [89, -2.53366], [90, -2.53366], [91, -2.53366], [92, -2.53366], [93, -2.53366], [94, -2.53366], [95, -2.53366], [96, -2.53366], [97, -2.53366], [98, -2.53366], [99, -2.53366], [100, -2.53366], [101, -2.53366], [102, -2.53366], [103, -2.53366], [104, -2.53366], [105, -2.53366], [106, -2.53366], [107, -2.53366], [108, -2.53366], [109, -2.53366], [110, -2.53366], [111, -2.53366], [112, -2.53366], [113, -2.53366], [114, -2.53366], [115, -2.53366], [116, -2.53366], [117, -2.53366], [118, -2.53366], [119, -2.53366], [120, -2.53366], [121, -2.53366], [122, -2.53366], [123, -2.53366], [124, -2.53366], [125, -2.53366], [126, -2.53366], [127, -2.53366], [128, -2.53366], [129, -2.53366], [130, -2.53366], [131, -2.53366], [132, -2.53366], [133, -2.53366], [134, -2.53366], [135, -2.53366], [136, -2.53366], [137, -2.53366], [138, -2.53366], ]
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
 