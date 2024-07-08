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

const var arrNotePhase = [[21, 0.03001], [22, 0.03001], [23, 0.03001], [24, 0], [25, 0.03001], [26, 0.03001], [27, 0.03001], [28, 0.03001], [29, 0.03001], [30, 0.03001], [31, 0.03001], [32, 0.03001], [33, 0.03001], [34, 0.03001], [35, 0.03001], [36, 0.03001], [37, 0.03001], [38, 0.03001], [39, 0.03001], [40, 0.03001], [41, 0.03001], [42, 0.03001], [43, 0.03001], [44, 0.03001], [45, 0.03001], [46, 0.03001], [47, 0.03001], [48, 0.03001], [49, 0.03001], [50, 0.03001], [51, 0.03001], [52, 0.03001], [53, 0.03001], [54, 0.03001], [55, 0.03001], [56, 0.03001], [57, 0.03001], [58, 0.03001], [59, 0.03001], [60, 0.03001], [61, 0.03001], [62, 0.03001], [63, 0.03001], [64, 0.03001], [65, 0.03001], [66, 0.03001], [67, 0.03001], [68, 0.03001], [69, 0.03001], [70, 0.03001], [71, 0.03001], [72, 0.03001], [73, 0.03001], [74, 0.03001], [75, 0.03001], [76, 0.03001], [77, 0.03001], [78, 0.03001], [79, 0.03001], [80, 0.03001], [81, 0.03001], [82, 0.03001], [83, 0.03001], [84, 0.03001], [85, 0.03001], [86, 0.03001], [87, 0.03001], [88, 0.03001], [89, 0.03001], [90, 0.03001], [91, 0.03001], [92, 0.03001], [93, 0.03001], [94, 0.03001], [95, 0.03001], [96, 0.03001], [97, 0.03001], [98, 0.03001], [99, 0.03001], [100, 0.03001], [101, 0.03001], [102, 0.03001], [103, 0.03001], [104, 0.03001], [105, 0.03001], [106, 0.03001], [107, 0.03001], [108, 0.03001], [109, 0.03001], [110, 0.03001], [111, 0.03001], [112, 0.03001], [113, 0.03001], [114, 0.03001], [115, 0.03001], [116, 0.03001], [117, 0.03001], [118, 0.03001], [119, 0.03001], [120, 0.03001], [121, 0.03001], [122, 0.03001], [123, 0.03001], [124, 0.03001], [125, 0.03001], [126, 0.03001], [127, 0.03001], [128, 0.03001], [129, 0.03001], [130, 0.03001], [131, 0.03001], [132, 0.03001], [133, 0.03001], [134, 0.03001], [135, 0.03001], [136, 0.03001], [137, 0.03001], [138, 0.03001], ]
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
 