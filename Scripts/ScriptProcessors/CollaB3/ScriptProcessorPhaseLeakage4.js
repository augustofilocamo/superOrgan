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

const var arrNotePhase = [[21, -0.72948], [22, -0.72948], [23, -0.72948], [24, 0], [25, -0.72948], [26, -0.72948], [27, -0.72948], [28, -0.72948], [29, -0.72948], [30, -0.72948], [31, -0.72948], [32, -0.72948], [33, -0.72948], [34, -0.72948], [35, -0.72948], [36, -0.72948], [37, -0.72948], [38, -0.72948], [39, -0.72948], [40, -0.72948], [41, -0.72948], [42, -0.72948], [43, -0.72948], [44, -0.72948], [45, -0.72948], [46, -0.72948], [47, -0.72948], [48, -0.72948], [49, -0.72948], [50, -0.72948], [51, -0.72948], [52, -0.72948], [53, -0.72948], [54, -0.72948], [55, -0.72948], [56, -0.72948], [57, -0.72948], [58, -0.72948], [59, -0.72948], [60, -0.72948], [61, -0.72948], [62, -0.72948], [63, -0.72948], [64, -0.72948], [65, -0.72948], [66, -0.72948], [67, -0.72948], [68, -0.72948], [69, -0.72948], [70, -0.72948], [71, -0.72948], [72, -0.72948], [73, -0.72948], [74, -0.72948], [75, -0.72948], [76, -0.72948], [77, -0.72948], [78, -0.72948], [79, -0.72948], [80, -0.72948], [81, -0.72948], [82, -0.72948], [83, -0.72948], [84, -0.72948], [85, -0.72948], [86, -0.72948], [87, -0.72948], [88, -0.72948], [89, -0.72948], [90, -0.72948], [91, -0.72948], [92, -0.72948], [93, -0.72948], [94, -0.72948], [95, -0.72948], [96, -0.72948], [97, -0.72948], [98, -0.72948], [99, -0.72948], [100, -0.72948], [101, -0.72948], [102, -0.72948], [103, -0.72948], [104, -0.72948], [105, -0.72948], [106, -0.72948], [107, -0.72948], [108, -0.72948], [109, -0.72948], [110, -0.72948], [111, -0.72948], [112, -0.72948], [113, -0.72948], [114, -0.72948], [115, -0.72948], [116, -0.72948], [117, -0.72948], [118, -0.72948], [119, -0.72948], [120, -0.72948], [121, -0.72948], [122, -0.72948], [123, -0.72948], [124, -0.72948], [125, -0.72948], [126, -0.72948], [127, -0.72948], [128, -0.72948], [129, -0.72948], [130, -0.72948], [131, -0.72948], [132, -0.72948], [133, -0.72948], [134, -0.72948], [135, -0.72948], [136, -0.72948], [137, -0.72948], [138, -0.72948], ]
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
 