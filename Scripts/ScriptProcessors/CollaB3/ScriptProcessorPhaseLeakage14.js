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

const var arrNotePhase = [[21, -0.09771], [22, -0.09771], [23, -0.09771], [24, 0], [25, -0.09771], [26, -0.09771], [27, -0.09771], [28, -0.09771], [29, -0.09771], [30, -0.09771], [31, -0.09771], [32, -0.09771], [33, -0.09771], [34, -0.09771], [35, -0.09771], [36, -0.09771], [37, -0.09771], [38, -0.09771], [39, -0.09771], [40, -0.09771], [41, -0.09771], [42, -0.09771], [43, -0.09771], [44, -0.09771], [45, -0.09771], [46, -0.09771], [47, -0.09771], [48, -0.09771], [49, -0.09771], [50, -0.09771], [51, -0.09771], [52, -0.09771], [53, -0.09771], [54, -0.09771], [55, -0.09771], [56, -0.09771], [57, -0.09771], [58, -0.09771], [59, -0.09771], [60, -0.09771], [61, -0.09771], [62, -0.09771], [63, -0.09771], [64, -0.09771], [65, -0.09771], [66, -0.09771], [67, -0.09771], [68, -0.09771], [69, -0.09771], [70, -0.09771], [71, -0.09771], [72, -0.09771], [73, -0.09771], [74, -0.09771], [75, -0.09771], [76, -0.09771], [77, -0.09771], [78, -0.09771], [79, -0.09771], [80, -0.09771], [81, -0.09771], [82, -0.09771], [83, -0.09771], [84, -0.09771], [85, -0.09771], [86, -0.09771], [87, -0.09771], [88, -0.09771], [89, -0.09771], [90, -0.09771], [91, -0.09771], [92, -0.09771], [93, -0.09771], [94, -0.09771], [95, -0.09771], [96, -0.09771], [97, -0.09771], [98, -0.09771], [99, -0.09771], [100, -0.09771], [101, -0.09771], [102, -0.09771], [103, -0.09771], [104, -0.09771], [105, -0.09771], [106, -0.09771], [107, -0.09771], [108, -0.09771], [109, -0.09771], [110, -0.09771], [111, -0.09771], [112, -0.09771], [113, -0.09771], [114, -0.09771], [115, -0.09771], [116, -0.09771], [117, -0.09771], [118, -0.09771], [119, -0.09771], [120, -0.09771], [121, -0.09771], [122, -0.09771], [123, -0.09771], [124, -0.09771], [125, -0.09771], [126, -0.09771], [127, -0.09771], [128, -0.09771], [129, -0.09771], [130, -0.09771], [131, -0.09771], [132, -0.09771], [133, -0.09771], [134, -0.09771], [135, -0.09771], [136, -0.09771], [137, -0.09771], [138, -0.09771], ]
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
 