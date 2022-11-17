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

const var arrNotePhase = [[21, -3.93954], [22, -3.93954], [23, -3.93954], [24, 0], [25, -3.93954], [26, -3.93954], [27, -3.93954], [28, -3.93954], [29, -3.93954], [30, -3.93954], [31, -3.93954], [32, -3.93954], [33, -3.93954], [34, -3.93954], [35, -3.93954], [36, -3.93954], [37, -3.93954], [38, -3.93954], [39, -3.93954], [40, -3.93954], [41, -3.93954], [42, -3.93954], [43, -3.93954], [44, -3.93954], [45, -3.93954], [46, -3.93954], [47, -3.93954], [48, -3.93954], [49, -1.501889], [50, -1.501889], [51, -1.501889], [52, -1.501889], [53, -1.501889], [54, -1.501889], [55, -1.501889], [56, -1.501889], [57, -1.501889], [58, -1.501889], [59, -1.501889], [60, -1.501889], [61, -3.82969], [62, -3.82969], [63, -3.82969], [64, -3.82969], [65, -3.82969], [66, -3.82969], [67, -3.82969], [68, -3.82969], [69, -3.82969], [70, -3.82969], [71, -3.82969], [72, -3.82969], [73, -4.26985], [74, -4.26985], [75, -4.26985], [76, -4.26985], [77, -4.26985], [78, -4.26985], [79, -4.26985], [80, -4.26985], [81, -4.26985], [82, -4.26985], [83, -4.26985], [84, -4.26985], [85, 0.0], [86, 0.0], [87, 0.0], [88, 0.0], [89, 0.0], [90, 0.0], [91, 0.0], [92, 0.0], [93, 0.0], [94, 0.0], [95, 0.0], [96, 0.0], [97, 0.0], [98, 0.0], [99, 0.0], [100, 0.0], [101, 0.0], [102, 0.0], [103, 0.0], [104, 0.0], [105, 0.0], [106, 0.0], [107, 0.0], [108, 0.0], [109, 0.0], [110, 0.0], [111, 0.0], [112, 0.0], [113, 0.0], [114, 0.0], [115, 0.0], [116, 0.0], [117, 0.0], [118, 0.0], [119, 0.0], [120, 0.0], [121, 0.0], [122, 0.0], [123, 0.0], [124, 0.0], [125, 0.0], [126, 0.0], [127, 0.0], [128, 0.0], [129, 0.0], [130, 0.0], [131, 0.0], [132, 0.0], [133, 0.0], [134, 0.0], [135, 0.0], [136, 0.0], [137, 0.0], [138, 0.0], ]
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
 