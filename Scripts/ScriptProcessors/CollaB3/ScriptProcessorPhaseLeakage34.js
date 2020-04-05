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

const var arrNotePhase = [[21, 2.75054], [22, 2.75054], [23, 2.75054], [24, 0], [25, 2.75054], [26, 2.75054], [27, 2.75054], [28, 2.75054], [29, 2.75054], [30, 2.75054], [31, 2.75054], [32, 2.75054], [33, 2.75054], [34, 2.75054], [35, 2.75054], [36, 2.75054], [37, 2.75054], [38, 2.75054], [39, 2.75054], [40, 2.75054], [41, 2.75054], [42, 2.75054], [43, 2.75054], [44, 2.75054], [45, 2.75054], [46, 2.75054], [47, 2.75054], [48, 2.75054], [49, 2.75054], [50, 2.75054], [51, 2.75054], [52, 2.75054], [53, 2.75054], [54, 2.75054], [55, 2.75054], [56, 2.75054], [57, 2.75054], [58, 2.75054], [59, 2.75054], [60, 2.75054], [61, 2.75054], [62, 2.75054], [63, 2.75054], [64, 2.75054], [65, 2.75054], [66, 2.75054], [67, 2.75054], [68, 2.75054], [69, 2.75054], [70, 2.75054], [71, 2.75054], [72, 2.75054], [73, 2.75054], [74, 2.75054], [75, 2.75054], [76, 2.75054], [77, 2.75054], [78, 2.75054], [79, 2.75054], [80, 2.75054], [81, 2.75054], [82, 2.75054], [83, 2.75054], [84, 2.75054], [85, 2.75054], [86, 2.75054], [87, 2.75054], [88, 2.75054], [89, 2.75054], [90, 2.75054], [91, 2.75054], [92, 2.75054], [93, 2.75054], [94, 2.75054], [95, 2.75054], [96, 2.75054], [97, 2.75054], [98, 2.75054], [99, 2.75054], [100, 2.75054], [101, 2.75054], [102, 2.75054], [103, 2.75054], [104, 2.75054], [105, 2.75054], [106, 2.75054], [107, 2.75054], [108, 2.75054], [109, 2.75054], [110, 2.75054], [111, 2.75054], [112, 2.75054], [113, 2.75054], [114, 2.75054], [115, 2.75054], [116, 2.75054], [117, 2.75054], [118, 2.75054], [119, 2.75054], [120, 2.75054], [121, 2.75054], [122, 2.75054], [123, 2.75054], [124, 2.75054], [125, 2.75054], [126, 2.75054], [127, 2.75054], [128, 2.75054], [129, 2.75054], [130, 2.75054], [131, 2.75054], [132, 2.75054], [133, 2.75054], [134, 2.75054], [135, 2.75054], [136, 2.75054], [137, 2.75054], [138, 2.75054], ]
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
 