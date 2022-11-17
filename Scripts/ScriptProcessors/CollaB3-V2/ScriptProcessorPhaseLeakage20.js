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

const var arrNotePhase = [[21, 0.116021], [22, 0.116021], [23, 0.116021], [24, 0], [25, 0.116021], [26, 0.116021], [27, 0.116021], [28, 0.116021], [29, 0.116021], [30, 0.116021], [31, 0.116021], [32, 0.116021], [33, 0.116021], [34, 0.116021], [35, 0.116021], [36, 0.116021], [37, 0.116021], [38, 0.116021], [39, 0.116021], [40, 0.116021], [41, 0.116021], [42, 0.116021], [43, 0.116021], [44, 0.116021], [45, 0.116021], [46, 0.116021], [47, 0.116021], [48, 0.116021], [49, 0.116021], [50, 0.116021], [51, 0.116021], [52, 0.116021], [53, 0.116021], [54, 0.116021], [55, 0.116021], [56, 0.116021], [57, 0.116021], [58, 0.116021], [59, 0.116021], [60, 0.116021], [61, 0.116021], [62, 0.116021], [63, 0.116021], [64, 0.116021], [65, 0.116021], [66, 0.116021], [67, 0.116021], [68, 0.116021], [69, 0.116021], [70, 0.116021], [71, 0.116021], [72, 0.116021], [73, 0.116021], [74, 0.116021], [75, 0.116021], [76, 0.116021], [77, 0.116021], [78, 0.116021], [79, 0.116021], [80, 0.116021], [81, 0.116021], [82, 0.116021], [83, 0.116021], [84, 0.116021], [85, 0.116021], [86, 0.116021], [87, 0.116021], [88, 0.116021], [89, 0.116021], [90, 0.116021], [91, 0.116021], [92, 0.116021], [93, 0.116021], [94, 0.116021], [95, 0.116021], [96, 0.116021], [97, 0.116021], [98, 0.116021], [99, 0.116021], [100, 0.116021], [101, 0.116021], [102, 0.116021], [103, 0.116021], [104, 0.116021], [105, 0.116021], [106, 0.116021], [107, 0.116021], [108, 0.116021], [109, 0.116021], [110, 0.116021], [111, 0.116021], [112, 0.116021], [113, 0.116021], [114, 0.116021], [115, 0.116021], [116, 0.116021], [117, 0.116021], [118, 0.116021], [119, 0.116021], [120, 0.116021], [121, 0.116021], [122, 0.116021], [123, 0.116021], [124, 0.116021], [125, 0.116021], [126, 0.116021], [127, 0.116021], [128, 0.116021], [129, 0.116021], [130, 0.116021], [131, 0.116021], [132, 0.116021], [133, 0.116021], [134, 0.116021], [135, 0.116021], [136, 0.116021], [137, 0.116021], [138, 0.116021], ]
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
 