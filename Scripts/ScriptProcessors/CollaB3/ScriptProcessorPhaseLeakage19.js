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

const var arrNotePhase = [[21, 0.123978], [22, 0.123978], [23, 0.123978], [24, 0], [25, 0.123978], [26, 0.123978], [27, 0.123978], [28, 0.123978], [29, 0.123978], [30, 0.123978], [31, 0.123978], [32, 0.123978], [33, 0.123978], [34, 0.123978], [35, 0.123978], [36, 0.123978], [37, 0.123978], [38, 0.123978], [39, 0.123978], [40, 0.123978], [41, 0.123978], [42, 0.123978], [43, 0.123978], [44, 0.123978], [45, 0.123978], [46, 0.123978], [47, 0.123978], [48, 0.123978], [49, 0.123978], [50, 0.123978], [51, 0.123978], [52, 0.123978], [53, 0.123978], [54, 0.123978], [55, 0.123978], [56, 0.123978], [57, 0.123978], [58, 0.123978], [59, 0.123978], [60, 0.123978], [61, 0.123978], [62, 0.123978], [63, 0.123978], [64, 0.123978], [65, 0.123978], [66, 0.123978], [67, 0.123978], [68, 0.123978], [69, 0.123978], [70, 0.123978], [71, 0.123978], [72, 0.123978], [73, 0.123978], [74, 0.123978], [75, 0.123978], [76, 0.123978], [77, 0.123978], [78, 0.123978], [79, 0.123978], [80, 0.123978], [81, 0.123978], [82, 0.123978], [83, 0.123978], [84, 0.123978], [85, 0.123978], [86, 0.123978], [87, 0.123978], [88, 0.123978], [89, 0.123978], [90, 0.123978], [91, 0.123978], [92, 0.123978], [93, 0.123978], [94, 0.123978], [95, 0.123978], [96, 0.123978], [97, 0.123978], [98, 0.123978], [99, 0.123978], [100, 0.123978], [101, 0.123978], [102, 0.123978], [103, 0.123978], [104, 0.123978], [105, 0.123978], [106, 0.123978], [107, 0.123978], [108, 0.123978], [109, 0.123978], [110, 0.123978], [111, 0.123978], [112, 0.123978], [113, 0.123978], [114, 0.123978], [115, 0.123978], [116, 0.123978], [117, 0.123978], [118, 0.123978], [119, 0.123978], [120, 0.123978], [121, 0.123978], [122, 0.123978], [123, 0.123978], [124, 0.123978], [125, 0.123978], [126, 0.123978], [127, 0.123978], [128, 0.123978], [129, 0.123978], [130, 0.123978], [131, 0.123978], [132, 0.123978], [133, 0.123978], [134, 0.123978], [135, 0.123978], [136, 0.123978], [137, 0.123978], [138, 0.123978], ]
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
 