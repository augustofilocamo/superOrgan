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

const var arrNotePhase = [[21, 0.76891], [22, 0.76891], [23, 0.76891], [24, 0], [25, 0.76891], [26, 0.76891], [27, 0.76891], [28, 0.76891], [29, 0.76891], [30, 0.76891], [31, 0.76891], [32, 0.76891], [33, 0.76891], [34, 0.76891], [35, 0.76891], [36, 0.76891], [37, 0.76891], [38, 0.76891], [39, 0.76891], [40, 0.76891], [41, 0.76891], [42, 0.76891], [43, 0.76891], [44, 0.76891], [45, 0.76891], [46, 0.76891], [47, 0.76891], [48, 0.76891], [49, 0.76891], [50, 0.76891], [51, 0.76891], [52, 0.76891], [53, 0.76891], [54, 0.76891], [55, 0.76891], [56, 0.76891], [57, 0.76891], [58, 0.76891], [59, 0.76891], [60, 0.76891], [61, 0.76891], [62, 0.76891], [63, 0.76891], [64, 0.76891], [65, 0.76891], [66, 0.76891], [67, 0.76891], [68, 0.76891], [69, 0.76891], [70, 0.76891], [71, 0.76891], [72, 0.76891], [73, 0.76891], [74, 0.76891], [75, 0.76891], [76, 0.76891], [77, 0.76891], [78, 0.76891], [79, 0.76891], [80, 0.76891], [81, 0.76891], [82, 0.76891], [83, 0.76891], [84, 0.76891], [85, 0.76891], [86, 0.76891], [87, 0.76891], [88, 0.76891], [89, 0.76891], [90, 0.76891], [91, 0.76891], [92, 0.76891], [93, 0.76891], [94, 0.76891], [95, 0.76891], [96, 0.76891], [97, 0.76891], [98, 0.76891], [99, 0.76891], [100, 0.76891], [101, 0.76891], [102, 0.76891], [103, 0.76891], [104, 0.76891], [105, 0.76891], [106, 0.76891], [107, 0.76891], [108, 0.76891], [109, 0.76891], [110, 0.76891], [111, 0.76891], [112, 0.76891], [113, 0.76891], [114, 0.76891], [115, 0.76891], [116, 0.76891], [117, 0.76891], [118, 0.76891], [119, 0.76891], [120, 0.76891], [121, 0.76891], [122, 0.76891], [123, 0.76891], [124, 0.76891], [125, 0.76891], [126, 0.76891], [127, 0.76891], [128, 0.76891], [129, 0.76891], [130, 0.76891], [131, 0.76891], [132, 0.76891], [133, 0.76891], [134, 0.76891], [135, 0.76891], [136, 0.76891], [137, 0.76891], [138, 0.76891], ]
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
 