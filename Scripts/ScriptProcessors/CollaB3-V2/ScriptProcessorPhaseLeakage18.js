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

const var arrNotePhase = [[21, -1.238207], [22, -1.238207], [23, -1.238207], [24, 0], [25, -1.238207], [26, -1.238207], [27, -1.238207], [28, -1.238207], [29, -1.238207], [30, -1.238207], [31, -1.238207], [32, -1.238207], [33, -1.238207], [34, -1.238207], [35, -1.238207], [36, -1.238207], [37, -1.238207], [38, -1.238207], [39, -1.238207], [40, -1.238207], [41, -1.238207], [42, -1.238207], [43, -1.238207], [44, -1.238207], [45, -1.238207], [46, -1.238207], [47, -1.238207], [48, -1.238207], [49, -1.238207], [50, -1.238207], [51, -1.238207], [52, -1.238207], [53, -1.238207], [54, -1.238207], [55, -1.238207], [56, -1.238207], [57, -1.238207], [58, -1.238207], [59, -1.238207], [60, -1.238207], [61, -1.238207], [62, -1.238207], [63, -1.238207], [64, -1.238207], [65, -1.238207], [66, -1.238207], [67, -1.238207], [68, -1.238207], [69, -1.238207], [70, -1.238207], [71, -1.238207], [72, -1.238207], [73, -1.238207], [74, -1.238207], [75, -1.238207], [76, -1.238207], [77, -1.238207], [78, -1.238207], [79, -1.238207], [80, -1.238207], [81, -1.238207], [82, -1.238207], [83, -1.238207], [84, -1.238207], [85, -1.238207], [86, -1.238207], [87, -1.238207], [88, -1.238207], [89, -1.238207], [90, -1.238207], [91, -1.238207], [92, -1.238207], [93, -1.238207], [94, -1.238207], [95, -1.238207], [96, -1.238207], [97, -1.238207], [98, -1.238207], [99, -1.238207], [100, -1.238207], [101, -1.238207], [102, -1.238207], [103, -1.238207], [104, -1.238207], [105, -1.238207], [106, -1.238207], [107, -1.238207], [108, -1.238207], [109, -1.238207], [110, -1.238207], [111, -1.238207], [112, -1.238207], [113, -1.238207], [114, -1.238207], [115, -1.238207], [116, -1.238207], [117, -1.238207], [118, -1.238207], [119, -1.238207], [120, -1.238207], [121, -1.238207], [122, -1.238207], [123, -1.238207], [124, -1.238207], [125, -1.238207], [126, -1.238207], [127, -1.238207], [128, -1.238207], [129, -1.238207], [130, -1.238207], [131, -1.238207], [132, -1.238207], [133, -1.238207], [134, -1.238207], [135, -1.238207], [136, -1.238207], [137, -1.238207], [138, -1.238207], ]
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
 