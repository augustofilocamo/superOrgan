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

const var arrNotePhase = [[21, 0.19635], [22, 0.19635], [23, 0.19635], [24, 0], [25, 0.19635], [26, 0.19635], [27, 0.19635], [28, 0.19635], [29, 0.19635], [30, 0.19635], [31, 0.19635], [32, 0.19635], [33, 0.19635], [34, 0.19635], [35, 0.19635], [36, 0.19635], [37, 0.19635], [38, 0.19635], [39, 0.19635], [40, 0.19635], [41, 0.19635], [42, 0.19635], [43, 0.19635], [44, 0.19635], [45, 0.19635], [46, 0.19635], [47, 0.19635], [48, 0.19635], [49, 0.19635], [50, 0.19635], [51, 0.19635], [52, 0.19635], [53, 0.19635], [54, 0.19635], [55, 0.19635], [56, 0.19635], [57, 0.19635], [58, 0.19635], [59, 0.19635], [60, 0.19635], [61, 0.19635], [62, 0.19635], [63, 0.19635], [64, 0.19635], [65, 0.19635], [66, 0.19635], [67, 0.19635], [68, 0.19635], [69, 0.19635], [70, 0.19635], [71, 0.19635], [72, 0.19635], [73, 0.19635], [74, 0.19635], [75, 0.19635], [76, 0.19635], [77, 0.19635], [78, 0.19635], [79, 0.19635], [80, 0.19635], [81, 0.19635], [82, 0.19635], [83, 0.19635], [84, 0.19635], [85, 0.19635], [86, 0.19635], [87, 0.19635], [88, 0.19635], [89, 0.19635], [90, 0.19635], [91, 0.19635], [92, 0.19635], [93, 0.19635], [94, 0.19635], [95, 0.19635], [96, 0.19635], [97, 0.19635], [98, 0.19635], [99, 0.19635], [100, 0.19635], [101, 0.19635], [102, 0.19635], [103, 0.19635], [104, 0.19635], [105, 0.19635], [106, 0.19635], [107, 0.19635], [108, 0.19635], [109, 0.19635], [110, 0.19635], [111, 0.19635], [112, 0.19635], [113, 0.19635], [114, 0.19635], [115, 0.19635], [116, 0.19635], [117, 0.19635], [118, 0.19635], [119, 0.19635], [120, 0.19635], [121, 0.19635], [122, 0.19635], [123, 0.19635], [124, 0.19635], [125, 0.19635], [126, 0.19635], [127, 0.19635], [128, 0.19635], [129, 0.19635], [130, 0.19635], [131, 0.19635], [132, 0.19635], [133, 0.19635], [134, 0.19635], [135, 0.19635], [136, 0.19635], [137, 0.19635], [138, 0.19635], ]
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
 