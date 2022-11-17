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

const var arrNotePhase = [[21, -0.932454], [22, -0.932454], [23, -0.932454], [24, 0], [25, -0.932454], [26, -0.932454], [27, -0.932454], [28, -0.932454], [29, -0.932454], [30, -0.932454], [31, -0.932454], [32, -0.932454], [33, -0.932454], [34, -0.932454], [35, -0.932454], [36, -0.932454], [37, -0.932454], [38, -0.932454], [39, -0.932454], [40, -0.932454], [41, -0.932454], [42, -0.932454], [43, -0.932454], [44, -0.932454], [45, -0.932454], [46, -0.932454], [47, -0.932454], [48, -0.932454], [49, -0.932454], [50, -0.932454], [51, -0.932454], [52, -0.932454], [53, -0.932454], [54, -0.932454], [55, -0.932454], [56, -0.932454], [57, -0.932454], [58, -0.932454], [59, -0.932454], [60, -0.932454], [61, -0.932454], [62, -0.932454], [63, -0.932454], [64, -0.932454], [65, -0.932454], [66, -0.932454], [67, -0.932454], [68, -0.932454], [69, -0.932454], [70, -0.932454], [71, -0.932454], [72, -0.932454], [73, -0.932454], [74, -0.932454], [75, -0.932454], [76, -0.932454], [77, -0.932454], [78, -0.932454], [79, -0.932454], [80, -0.932454], [81, -0.932454], [82, -0.932454], [83, -0.932454], [84, -0.932454], [85, -0.932454], [86, -0.932454], [87, -0.932454], [88, -0.932454], [89, -0.932454], [90, -0.932454], [91, -0.932454], [92, -0.932454], [93, -0.932454], [94, -0.932454], [95, -0.932454], [96, -0.932454], [97, -0.932454], [98, -0.932454], [99, -0.932454], [100, -0.932454], [101, -0.932454], [102, -0.932454], [103, -0.932454], [104, -0.932454], [105, -0.932454], [106, -0.932454], [107, -0.932454], [108, -0.932454], [109, -0.932454], [110, -0.932454], [111, -0.932454], [112, -0.932454], [113, -0.932454], [114, -0.932454], [115, -0.932454], [116, -0.932454], [117, -0.932454], [118, -0.932454], [119, -0.932454], [120, -0.932454], [121, -0.932454], [122, -0.932454], [123, -0.932454], [124, -0.932454], [125, -0.932454], [126, -0.932454], [127, -0.932454], [128, -0.932454], [129, -0.932454], [130, -0.932454], [131, -0.932454], [132, -0.932454], [133, -0.932454], [134, -0.932454], [135, -0.932454], [136, -0.932454], [137, -0.932454], [138, -0.932454], ]
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
 