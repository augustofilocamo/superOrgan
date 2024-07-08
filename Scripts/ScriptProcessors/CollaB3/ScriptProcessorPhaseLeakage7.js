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

const var arrNotePhase = [[21, 2.00746], [22, 2.00746], [23, 2.00746], [24, 0], [25, 2.00746], [26, 2.00746], [27, 2.00746], [28, 2.00746], [29, 2.00746], [30, 2.00746], [31, 2.00746], [32, 2.00746], [33, 2.00746], [34, 2.00746], [35, 2.00746], [36, 2.00746], [37, 2.00746], [38, 2.00746], [39, 2.00746], [40, 2.00746], [41, 2.00746], [42, 2.00746], [43, 2.00746], [44, 2.00746], [45, 2.00746], [46, 2.00746], [47, 2.00746], [48, 2.00746], [49, 2.00746], [50, 2.00746], [51, 2.00746], [52, 2.00746], [53, 2.00746], [54, 2.00746], [55, 2.00746], [56, 2.00746], [57, 2.00746], [58, 2.00746], [59, 2.00746], [60, 2.00746], [61, 2.00746], [62, 2.00746], [63, 2.00746], [64, 2.00746], [65, 2.00746], [66, 2.00746], [67, 2.00746], [68, 2.00746], [69, 2.00746], [70, 2.00746], [71, 2.00746], [72, 2.00746], [73, 2.00746], [74, 2.00746], [75, 2.00746], [76, 2.00746], [77, 2.00746], [78, 2.00746], [79, 2.00746], [80, 2.00746], [81, 2.00746], [82, 2.00746], [83, 2.00746], [84, 2.00746], [85, 2.00746], [86, 2.00746], [87, 2.00746], [88, 2.00746], [89, 2.00746], [90, 2.00746], [91, 2.00746], [92, 2.00746], [93, 2.00746], [94, 2.00746], [95, 2.00746], [96, 2.00746], [97, 2.00746], [98, 2.00746], [99, 2.00746], [100, 2.00746], [101, 2.00746], [102, 2.00746], [103, 2.00746], [104, 2.00746], [105, 2.00746], [106, 2.00746], [107, 2.00746], [108, 2.00746], [109, 2.00746], [110, 2.00746], [111, 2.00746], [112, 2.00746], [113, 2.00746], [114, 2.00746], [115, 2.00746], [116, 2.00746], [117, 2.00746], [118, 2.00746], [119, 2.00746], [120, 2.00746], [121, 2.00746], [122, 2.00746], [123, 2.00746], [124, 2.00746], [125, 2.00746], [126, 2.00746], [127, 2.00746], [128, 2.00746], [129, 2.00746], [130, 2.00746], [131, 2.00746], [132, 2.00746], [133, 2.00746], [134, 2.00746], [135, 2.00746], [136, 2.00746], [137, 2.00746], [138, 2.00746], ]
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
 