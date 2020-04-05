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

const var arrNotePhase = [[21, -0.244827], [22, -0.244827], [23, -0.244827], [24, 0], [25, -0.244827], [26, -0.244827], [27, -0.244827], [28, -0.244827], [29, -0.244827], [30, -0.244827], [31, -0.244827], [32, -0.244827], [33, -0.244827], [34, -0.244827], [35, -0.244827], [36, -0.244827], [37, -0.244827], [38, -0.244827], [39, -0.244827], [40, -0.244827], [41, -0.244827], [42, -0.244827], [43, -0.244827], [44, -0.244827], [45, -0.244827], [46, -0.244827], [47, -0.244827], [48, -0.244827], [49, -0.244827], [50, -0.244827], [51, -0.244827], [52, -0.244827], [53, -0.244827], [54, -0.244827], [55, -0.244827], [56, -0.244827], [57, -0.244827], [58, -0.244827], [59, -0.244827], [60, -0.244827], [61, -0.244827], [62, -0.244827], [63, -0.244827], [64, -0.244827], [65, -0.244827], [66, -0.244827], [67, -0.244827], [68, -0.244827], [69, -0.244827], [70, -0.244827], [71, -0.244827], [72, -0.244827], [73, -0.244827], [74, -0.244827], [75, -0.244827], [76, -0.244827], [77, -0.244827], [78, -0.244827], [79, -0.244827], [80, -0.244827], [81, -0.244827], [82, -0.244827], [83, -0.244827], [84, -0.244827], [85, -0.244827], [86, -0.244827], [87, -0.244827], [88, -0.244827], [89, -0.244827], [90, -0.244827], [91, -0.244827], [92, -0.244827], [93, -0.244827], [94, -0.244827], [95, -0.244827], [96, -0.244827], [97, -0.244827], [98, -0.244827], [99, -0.244827], [100, -0.244827], [101, -0.244827], [102, -0.244827], [103, -0.244827], [104, -0.244827], [105, -0.244827], [106, -0.244827], [107, -0.244827], [108, -0.244827], [109, -0.244827], [110, -0.244827], [111, -0.244827], [112, -0.244827], [113, -0.244827], [114, -0.244827], [115, -0.244827], [116, -0.244827], [117, -0.244827], [118, -0.244827], [119, -0.244827], [120, -0.244827], [121, -0.244827], [122, -0.244827], [123, -0.244827], [124, -0.244827], [125, -0.244827], [126, -0.244827], [127, -0.244827], [128, -0.244827], [129, -0.244827], [130, -0.244827], [131, -0.244827], [132, -0.244827], [133, -0.244827], [134, -0.244827], [135, -0.244827], [136, -0.244827], [137, -0.244827], [138, -0.244827], ]
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
 