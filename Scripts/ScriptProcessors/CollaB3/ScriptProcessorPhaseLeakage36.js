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

const var arrNotePhase = [[21, 0.22063], [22, 0.22063], [23, 0.22063], [24, 0], [25, 0.22063], [26, 0.22063], [27, 0.22063], [28, 0.22063], [29, 0.22063], [30, 0.22063], [31, 0.22063], [32, 0.22063], [33, 0.22063], [34, 0.22063], [35, 0.22063], [36, 0.22063], [37, 0.22063], [38, 0.22063], [39, 0.22063], [40, 0.22063], [41, 0.22063], [42, 0.22063], [43, 0.22063], [44, 0.22063], [45, 0.22063], [46, 0.22063], [47, 0.22063], [48, 0.22063], [49, 0.22063], [50, 0.22063], [51, 0.22063], [52, 0.22063], [53, 0.22063], [54, 0.22063], [55, 0.22063], [56, 0.22063], [57, 0.22063], [58, 0.22063], [59, 0.22063], [60, 0.22063], [61, 0.22063], [62, 0.22063], [63, 0.22063], [64, 0.22063], [65, 0.22063], [66, 0.22063], [67, 0.22063], [68, 0.22063], [69, 0.22063], [70, 0.22063], [71, 0.22063], [72, 0.22063], [73, 0.22063], [74, 0.22063], [75, 0.22063], [76, 0.22063], [77, 0.22063], [78, 0.22063], [79, 0.22063], [80, 0.22063], [81, 0.22063], [82, 0.22063], [83, 0.22063], [84, 0.22063], [85, 0.22063], [86, 0.22063], [87, 0.22063], [88, 0.22063], [89, 0.22063], [90, 0.22063], [91, 0.22063], [92, 0.22063], [93, 0.22063], [94, 0.22063], [95, 0.22063], [96, 0.22063], [97, 0.22063], [98, 0.22063], [99, 0.22063], [100, 0.22063], [101, 0.22063], [102, 0.22063], [103, 0.22063], [104, 0.22063], [105, 0.22063], [106, 0.22063], [107, 0.22063], [108, 0.22063], [109, 0.22063], [110, 0.22063], [111, 0.22063], [112, 0.22063], [113, 0.22063], [114, 0.22063], [115, 0.22063], [116, 0.22063], [117, 0.22063], [118, 0.22063], [119, 0.22063], [120, 0.22063], [121, 0.22063], [122, 0.22063], [123, 0.22063], [124, 0.22063], [125, 0.22063], [126, 0.22063], [127, 0.22063], [128, 0.22063], [129, 0.22063], [130, 0.22063], [131, 0.22063], [132, 0.22063], [133, 0.22063], [134, 0.22063], [135, 0.22063], [136, 0.22063], [137, 0.22063], [138, 0.22063], ]
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
 