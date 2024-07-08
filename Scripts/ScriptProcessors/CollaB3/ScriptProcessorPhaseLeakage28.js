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

const var arrNotePhase = [[21, 0.57482], [22, 0.57482], [23, 0.57482], [24, 0], [25, 0.57482], [26, 0.57482], [27, 0.57482], [28, 0.57482], [29, 0.57482], [30, 0.57482], [31, 0.57482], [32, 0.57482], [33, 0.57482], [34, 0.57482], [35, 0.57482], [36, 0.57482], [37, 0.57482], [38, 0.57482], [39, 0.57482], [40, 0.57482], [41, 0.57482], [42, 0.57482], [43, 0.57482], [44, 0.57482], [45, 0.57482], [46, 0.57482], [47, 0.57482], [48, 0.57482], [49, 0.57482], [50, 0.57482], [51, 0.57482], [52, 0.57482], [53, 0.57482], [54, 0.57482], [55, 0.57482], [56, 0.57482], [57, 0.57482], [58, 0.57482], [59, 0.57482], [60, 0.57482], [61, 0.57482], [62, 0.57482], [63, 0.57482], [64, 0.57482], [65, 0.57482], [66, 0.57482], [67, 0.57482], [68, 0.57482], [69, 0.57482], [70, 0.57482], [71, 0.57482], [72, 0.57482], [73, 0.57482], [74, 0.57482], [75, 0.57482], [76, 0.57482], [77, 0.57482], [78, 0.57482], [79, 0.57482], [80, 0.57482], [81, 0.57482], [82, 0.57482], [83, 0.57482], [84, 0.57482], [85, 0.57482], [86, 0.57482], [87, 0.57482], [88, 0.57482], [89, 0.57482], [90, 0.57482], [91, 0.57482], [92, 0.57482], [93, 0.57482], [94, 0.57482], [95, 0.57482], [96, 0.57482], [97, 0.57482], [98, 0.57482], [99, 0.57482], [100, 0.57482], [101, 0.57482], [102, 0.57482], [103, 0.57482], [104, 0.57482], [105, 0.57482], [106, 0.57482], [107, 0.57482], [108, 0.57482], [109, 0.57482], [110, 0.57482], [111, 0.57482], [112, 0.57482], [113, 0.57482], [114, 0.57482], [115, 0.57482], [116, 0.57482], [117, 0.57482], [118, 0.57482], [119, 0.57482], [120, 0.57482], [121, 0.57482], [122, 0.57482], [123, 0.57482], [124, 0.57482], [125, 0.57482], [126, 0.57482], [127, 0.57482], [128, 0.57482], [129, 0.57482], [130, 0.57482], [131, 0.57482], [132, 0.57482], [133, 0.57482], [134, 0.57482], [135, 0.57482], [136, 0.57482], [137, 0.57482], [138, 0.57482], ]
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
 