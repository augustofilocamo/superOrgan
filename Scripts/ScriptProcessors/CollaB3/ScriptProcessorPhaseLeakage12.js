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

const var arrNotePhase = [[21, -1.513826], [22, -1.513826], [23, -1.513826], [24, 0], [25, -1.513826], [26, -1.513826], [27, -1.513826], [28, -1.513826], [29, -1.513826], [30, -1.513826], [31, -1.513826], [32, -1.513826], [33, -1.513826], [34, -1.513826], [35, -1.513826], [36, -1.513826], [37, -1.513826], [38, -1.513826], [39, -1.513826], [40, -1.513826], [41, -1.513826], [42, -1.513826], [43, -1.513826], [44, -1.513826], [45, -1.513826], [46, -1.513826], [47, -1.513826], [48, -1.513826], [49, -1.513826], [50, -1.513826], [51, -1.513826], [52, -1.513826], [53, -1.513826], [54, -1.513826], [55, -1.513826], [56, -1.513826], [57, -1.513826], [58, -1.513826], [59, -1.513826], [60, -1.513826], [61, -1.513826], [62, -1.513826], [63, -1.513826], [64, -1.513826], [65, -1.513826], [66, -1.513826], [67, -1.513826], [68, -1.513826], [69, -1.513826], [70, -1.513826], [71, -1.513826], [72, -1.513826], [73, -1.513826], [74, -1.513826], [75, -1.513826], [76, -1.513826], [77, -1.513826], [78, -1.513826], [79, -1.513826], [80, -1.513826], [81, -1.513826], [82, -1.513826], [83, -1.513826], [84, -1.513826], [85, -1.513826], [86, -1.513826], [87, -1.513826], [88, -1.513826], [89, -1.513826], [90, -1.513826], [91, -1.513826], [92, -1.513826], [93, -1.513826], [94, -1.513826], [95, -1.513826], [96, -1.513826], [97, -1.513826], [98, -1.513826], [99, -1.513826], [100, -1.513826], [101, -1.513826], [102, -1.513826], [103, -1.513826], [104, -1.513826], [105, -1.513826], [106, -1.513826], [107, -1.513826], [108, -1.513826], [109, -1.513826], [110, -1.513826], [111, -1.513826], [112, -1.513826], [113, -1.513826], [114, -1.513826], [115, -1.513826], [116, -1.513826], [117, -1.513826], [118, -1.513826], [119, -1.513826], [120, -1.513826], [121, -1.513826], [122, -1.513826], [123, -1.513826], [124, -1.513826], [125, -1.513826], [126, -1.513826], [127, -1.513826], [128, -1.513826], [129, -1.513826], [130, -1.513826], [131, -1.513826], [132, -1.513826], [133, -1.513826], [134, -1.513826], [135, -1.513826], [136, -1.513826], [137, -1.513826], [138, -1.513826], ]
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
 