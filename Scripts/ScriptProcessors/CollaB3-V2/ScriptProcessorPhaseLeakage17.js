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

const var arrNotePhase = [[21, 4.10386], [22, 4.10386], [23, 4.10386], [24, 0], [25, 4.10386], [26, 4.10386], [27, 4.10386], [28, 4.10386], [29, 4.10386], [30, 4.10386], [31, 4.10386], [32, 4.10386], [33, 4.10386], [34, 4.10386], [35, 4.10386], [36, 4.10386], [37, 4.10386], [38, 4.10386], [39, 4.10386], [40, 4.10386], [41, 4.10386], [42, 4.10386], [43, 4.10386], [44, 4.10386], [45, 4.10386], [46, 4.10386], [47, 4.10386], [48, 4.10386], [49, 4.10386], [50, 4.10386], [51, 4.10386], [52, 4.10386], [53, 4.10386], [54, 4.10386], [55, 4.10386], [56, 4.10386], [57, 4.10386], [58, 4.10386], [59, 4.10386], [60, 4.10386], [61, 4.10386], [62, 4.10386], [63, 4.10386], [64, 4.10386], [65, 4.10386], [66, 4.10386], [67, 4.10386], [68, 4.10386], [69, 4.10386], [70, 4.10386], [71, 4.10386], [72, 4.10386], [73, 4.10386], [74, 4.10386], [75, 4.10386], [76, 4.10386], [77, 4.10386], [78, 4.10386], [79, 4.10386], [80, 4.10386], [81, 4.10386], [82, 4.10386], [83, 4.10386], [84, 4.10386], [85, 4.10386], [86, 4.10386], [87, 4.10386], [88, 4.10386], [89, 4.10386], [90, 4.10386], [91, 4.10386], [92, 4.10386], [93, 4.10386], [94, 4.10386], [95, 4.10386], [96, 4.10386], [97, 4.10386], [98, 4.10386], [99, 4.10386], [100, 4.10386], [101, 4.10386], [102, 4.10386], [103, 4.10386], [104, 4.10386], [105, 4.10386], [106, 4.10386], [107, 4.10386], [108, 4.10386], [109, 4.10386], [110, 4.10386], [111, 4.10386], [112, 4.10386], [113, 4.10386], [114, 4.10386], [115, 4.10386], [116, 4.10386], [117, 4.10386], [118, 4.10386], [119, 4.10386], [120, 4.10386], [121, 4.10386], [122, 4.10386], [123, 4.10386], [124, 4.10386], [125, 4.10386], [126, 4.10386], [127, 4.10386], [128, 4.10386], [129, 4.10386], [130, 4.10386], [131, 4.10386], [132, 4.10386], [133, 4.10386], [134, 4.10386], [135, 4.10386], [136, 4.10386], [137, 4.10386], [138, 4.10386], ]
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
 