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

const var arrNotePhase = [[21, 2.834511], [22, 2.834511], [23, 2.834511], [24, 0], [25, 2.834511], [26, 2.834511], [27, 2.834511], [28, 2.834511], [29, 2.834511], [30, 2.834511], [31, 2.834511], [32, 2.834511], [33, 2.834511], [34, 2.834511], [35, 2.834511], [36, 2.834511], [37, 2.834511], [38, 2.834511], [39, 2.834511], [40, 2.834511], [41, 2.834511], [42, 2.834511], [43, 2.834511], [44, 2.834511], [45, 2.834511], [46, 2.834511], [47, 2.834511], [48, 2.834511], [49, 2.834511], [50, 2.834511], [51, 2.834511], [52, 2.834511], [53, 2.834511], [54, 2.834511], [55, 2.834511], [56, 2.834511], [57, 2.834511], [58, 2.834511], [59, 2.834511], [60, 2.834511], [61, 2.834511], [62, 2.834511], [63, 2.834511], [64, 2.834511], [65, 2.834511], [66, 2.834511], [67, 2.834511], [68, 2.834511], [69, 2.834511], [70, 2.834511], [71, 2.834511], [72, 2.834511], [73, 2.834511], [74, 2.834511], [75, 2.834511], [76, 2.834511], [77, 2.834511], [78, 2.834511], [79, 2.834511], [80, 2.834511], [81, 2.834511], [82, 2.834511], [83, 2.834511], [84, 2.834511], [85, 2.834511], [86, 2.834511], [87, 2.834511], [88, 2.834511], [89, 2.834511], [90, 2.834511], [91, 2.834511], [92, 2.834511], [93, 2.834511], [94, 2.834511], [95, 2.834511], [96, 2.834511], [97, 2.834511], [98, 2.834511], [99, 2.834511], [100, 2.834511], [101, 2.834511], [102, 2.834511], [103, 2.834511], [104, 2.834511], [105, 2.834511], [106, 2.834511], [107, 2.834511], [108, 2.834511], [109, 2.834511], [110, 2.834511], [111, 2.834511], [112, 2.834511], [113, 2.834511], [114, 2.834511], [115, 2.834511], [116, 2.834511], [117, 2.834511], [118, 2.834511], [119, 2.834511], [120, 2.834511], [121, 2.834511], [122, 2.834511], [123, 2.834511], [124, 2.834511], [125, 2.834511], [126, 2.834511], [127, 2.834511], [128, 2.834511], [129, 2.834511], [130, 2.834511], [131, 2.834511], [132, 2.834511], [133, 2.834511], [134, 2.834511], [135, 2.834511], [136, 2.834511], [137, 2.834511], [138, 2.834511], ]
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
 