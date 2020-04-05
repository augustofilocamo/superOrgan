/*
  Copyright 2020 Studio427 Audio & Augusto Filocamo
  
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

const var arrNotePhase = [[21, 0.36406], [22, 0.36406], [23, 0.36406], [24, 0], [25, 0.36406], [26, 0.36406], [27, 0.36406], [28, 0.36406], [29, 0.36406], [30, 0.36406], [31, 0.36406], [32, 0.36406], [33, 0.36406], [34, 0.36406], [35, 0.36406], [36, 0.36406], [37, 0.36406], [38, 0.36406], [39, 0.36406], [40, 0.36406], [41, 0.36406], [42, 0.36406], [43, 0.36406], [44, 0.36406], [45, 0.36406], [46, 0.36406], [47, 0.36406], [48, 0.36406], [49, 0.36406], [50, 0.36406], [51, 0.36406], [52, 0.36406], [53, 0.36406], [54, 0.36406], [55, 0.36406], [56, 0.36406], [57, 0.36406], [58, 0.36406], [59, 0.36406], [60, 0.36406], [61, 0.36406], [62, 0.36406], [63, 0.36406], [64, 0.36406], [65, 0.36406], [66, 0.36406], [67, 0.36406], [68, 0.36406], [69, 0.36406], [70, 0.36406], [71, 0.36406], [72, 0.36406], [73, 0.36406], [74, 0.36406], [75, 0.36406], [76, 0.36406], [77, 0.36406], [78, 0.36406], [79, 0.36406], [80, 0.36406], [81, 0.36406], [82, 0.36406], [83, 0.36406], [84, 0.36406], [85, 0.36406], [86, 0.36406], [87, 0.36406], [88, 0.36406], [89, 0.36406], [90, 0.36406], [91, 0.36406], [92, 0.36406], [93, 0.36406], [94, 0.36406], [95, 0.36406], [96, 0.36406], [97, 0.36406], [98, 0.36406], [99, 0.36406], [100, 0.36406], [101, 0.36406], [102, 0.36406], [103, 0.36406], [104, 0.36406], [105, 0.36406], [106, 0.36406], [107, 0.36406], [108, 0.36406], [109, 0.36406], [110, 0.36406], [111, 0.36406], [112, 0.36406], [113, 0.36406], [114, 0.36406], [115, 0.36406], [116, 0.36406], [117, 0.36406], [118, 0.36406], [119, 0.36406], [120, 0.36406], [121, 0.36406], [122, 0.36406], [123, 0.36406], [124, 0.36406], [125, 0.36406], [126, 0.36406], [127, 0.36406], [128, 0.36406], [129, 0.36406], [130, 0.36406], [131, 0.36406], [132, 0.36406], [133, 0.36406], [134, 0.36406], [135, 0.36406], [136, 0.36406], [137, 0.36406], [138, 0.36406], ]
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
 