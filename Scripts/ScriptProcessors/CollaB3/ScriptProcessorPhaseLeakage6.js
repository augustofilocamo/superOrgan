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

const var arrNotePhase = [[21, -0.44856], [22, -0.44856], [23, -0.44856], [24, 0], [25, -0.44856], [26, -0.44856], [27, -0.44856], [28, -0.44856], [29, -0.44856], [30, -0.44856], [31, -0.44856], [32, -0.44856], [33, -0.44856], [34, -0.44856], [35, -0.44856], [36, -0.44856], [37, -0.44856], [38, -0.44856], [39, -0.44856], [40, -0.44856], [41, -0.44856], [42, -0.44856], [43, -0.44856], [44, -0.44856], [45, -0.44856], [46, -0.44856], [47, -0.44856], [48, -0.44856], [49, -0.44856], [50, -0.44856], [51, -0.44856], [52, -0.44856], [53, -0.44856], [54, -0.44856], [55, -0.44856], [56, -0.44856], [57, -0.44856], [58, -0.44856], [59, -0.44856], [60, -0.44856], [61, -0.44856], [62, -0.44856], [63, -0.44856], [64, -0.44856], [65, -0.44856], [66, -0.44856], [67, -0.44856], [68, -0.44856], [69, -0.44856], [70, -0.44856], [71, -0.44856], [72, -0.44856], [73, -0.44856], [74, -0.44856], [75, -0.44856], [76, -0.44856], [77, -0.44856], [78, -0.44856], [79, -0.44856], [80, -0.44856], [81, -0.44856], [82, -0.44856], [83, -0.44856], [84, -0.44856], [85, -0.44856], [86, -0.44856], [87, -0.44856], [88, -0.44856], [89, -0.44856], [90, -0.44856], [91, -0.44856], [92, -0.44856], [93, -0.44856], [94, -0.44856], [95, -0.44856], [96, -0.44856], [97, -0.44856], [98, -0.44856], [99, -0.44856], [100, -0.44856], [101, -0.44856], [102, -0.44856], [103, -0.44856], [104, -0.44856], [105, -0.44856], [106, -0.44856], [107, -0.44856], [108, -0.44856], [109, -0.44856], [110, -0.44856], [111, -0.44856], [112, -0.44856], [113, -0.44856], [114, -0.44856], [115, -0.44856], [116, -0.44856], [117, -0.44856], [118, -0.44856], [119, -0.44856], [120, -0.44856], [121, -0.44856], [122, -0.44856], [123, -0.44856], [124, -0.44856], [125, -0.44856], [126, -0.44856], [127, -0.44856], [128, -0.44856], [129, -0.44856], [130, -0.44856], [131, -0.44856], [132, -0.44856], [133, -0.44856], [134, -0.44856], [135, -0.44856], [136, -0.44856], [137, -0.44856], [138, -0.44856], ]
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
 