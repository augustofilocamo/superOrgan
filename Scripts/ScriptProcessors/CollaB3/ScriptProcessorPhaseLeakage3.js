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

const var arrNotePhase = [[21, -0.31278], [22, -0.31278], [23, -0.31278], [24, 0], [25, -0.31278], [26, -0.31278], [27, -0.31278], [28, -0.31278], [29, -0.31278], [30, -0.31278], [31, -0.31278], [32, -0.31278], [33, -0.31278], [34, -0.31278], [35, -0.31278], [36, -0.31278], [37, -0.31278], [38, -0.31278], [39, -0.31278], [40, -0.31278], [41, -0.31278], [42, -0.31278], [43, -0.31278], [44, -0.31278], [45, -0.31278], [46, -0.31278], [47, -0.31278], [48, -0.31278], [49, -0.31278], [50, -0.31278], [51, -0.31278], [52, -0.31278], [53, -0.31278], [54, -0.31278], [55, -0.31278], [56, -0.31278], [57, -0.31278], [58, -0.31278], [59, -0.31278], [60, -0.31278], [61, -0.31278], [62, -0.31278], [63, -0.31278], [64, -0.31278], [65, -0.31278], [66, -0.31278], [67, -0.31278], [68, -0.31278], [69, -0.31278], [70, -0.31278], [71, -0.31278], [72, -0.31278], [73, -0.31278], [74, -0.31278], [75, -0.31278], [76, -0.31278], [77, -0.31278], [78, -0.31278], [79, -0.31278], [80, -0.31278], [81, -0.31278], [82, -0.31278], [83, -0.31278], [84, -0.31278], [85, -0.31278], [86, -0.31278], [87, -0.31278], [88, -0.31278], [89, -0.31278], [90, -0.31278], [91, -0.31278], [92, -0.31278], [93, -0.31278], [94, -0.31278], [95, -0.31278], [96, -0.31278], [97, -0.31278], [98, -0.31278], [99, -0.31278], [100, -0.31278], [101, -0.31278], [102, -0.31278], [103, -0.31278], [104, -0.31278], [105, -0.31278], [106, -0.31278], [107, -0.31278], [108, -0.31278], [109, -0.31278], [110, -0.31278], [111, -0.31278], [112, -0.31278], [113, -0.31278], [114, -0.31278], [115, -0.31278], [116, -0.31278], [117, -0.31278], [118, -0.31278], [119, -0.31278], [120, -0.31278], [121, -0.31278], [122, -0.31278], [123, -0.31278], [124, -0.31278], [125, -0.31278], [126, -0.31278], [127, -0.31278], [128, -0.31278], [129, -0.31278], [130, -0.31278], [131, -0.31278], [132, -0.31278], [133, -0.31278], [134, -0.31278], [135, -0.31278], [136, -0.31278], [137, -0.31278], [138, -0.31278], ]
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
 