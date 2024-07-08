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

const var arrNotePhase = [[21, 1.52885], [22, 1.52885], [23, 1.52885], [24, 0], [25, 1.52885], [26, 1.52885], [27, 1.52885], [28, 1.52885], [29, 1.52885], [30, 1.52885], [31, 1.52885], [32, 1.52885], [33, 1.52885], [34, 1.52885], [35, 1.52885], [36, 1.52885], [37, 1.52885], [38, 1.52885], [39, 1.52885], [40, 1.52885], [41, 1.52885], [42, 1.52885], [43, 1.52885], [44, 1.52885], [45, 1.52885], [46, 1.52885], [47, 1.52885], [48, 1.52885], [49, 1.52885], [50, 1.52885], [51, 1.52885], [52, 1.52885], [53, 1.52885], [54, 1.52885], [55, 1.52885], [56, 1.52885], [57, 1.52885], [58, 1.52885], [59, 1.52885], [60, 1.52885], [61, 1.52885], [62, 1.52885], [63, 1.52885], [64, 1.52885], [65, 1.52885], [66, 1.52885], [67, 1.52885], [68, 1.52885], [69, 1.52885], [70, 1.52885], [71, 1.52885], [72, 1.52885], [73, 1.52885], [74, 1.52885], [75, 1.52885], [76, 1.52885], [77, 1.52885], [78, 1.52885], [79, 1.52885], [80, 1.52885], [81, 1.52885], [82, 1.52885], [83, 1.52885], [84, 1.52885], [85, 1.52885], [86, 1.52885], [87, 1.52885], [88, 1.52885], [89, 1.52885], [90, 1.52885], [91, 1.52885], [92, 1.52885], [93, 1.52885], [94, 1.52885], [95, 1.52885], [96, 1.52885], [97, 1.52885], [98, 1.52885], [99, 1.52885], [100, 1.52885], [101, 1.52885], [102, 1.52885], [103, 1.52885], [104, 1.52885], [105, 1.52885], [106, 1.52885], [107, 1.52885], [108, 1.52885], [109, 1.52885], [110, 1.52885], [111, 1.52885], [112, 1.52885], [113, 1.52885], [114, 1.52885], [115, 1.52885], [116, 1.52885], [117, 1.52885], [118, 1.52885], [119, 1.52885], [120, 1.52885], [121, 1.52885], [122, 1.52885], [123, 1.52885], [124, 1.52885], [125, 1.52885], [126, 1.52885], [127, 1.52885], [128, 1.52885], [129, 1.52885], [130, 1.52885], [131, 1.52885], [132, 1.52885], [133, 1.52885], [134, 1.52885], [135, 1.52885], [136, 1.52885], [137, 1.52885], [138, 1.52885], ]
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
 