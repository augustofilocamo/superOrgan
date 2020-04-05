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

const var arrNotePhase = [[21, -2.79185], [22, -2.79185], [23, -2.79185], [24, 0], [25, -2.79185], [26, -2.79185], [27, -2.79185], [28, -2.79185], [29, -2.79185], [30, -2.79185], [31, -2.79185], [32, -2.79185], [33, -2.79185], [34, -2.79185], [35, -2.79185], [36, -2.79185], [37, -2.79185], [38, -2.79185], [39, -2.79185], [40, -2.79185], [41, -2.79185], [42, -2.79185], [43, -2.79185], [44, -2.79185], [45, -2.79185], [46, -2.79185], [47, -2.79185], [48, -2.79185], [49, 1.74682], [50, 1.74682], [51, 1.74682], [52, 1.74682], [53, 1.74682], [54, 1.74682], [55, 1.74682], [56, 1.74682], [57, 1.74682], [58, 1.74682], [59, 1.74682], [60, 1.74682], [61, 1.76459], [62, 1.76459], [63, 1.76459], [64, 1.76459], [65, 1.76459], [66, 1.76459], [67, 1.76459], [68, 1.76459], [69, 1.76459], [70, 1.76459], [71, 1.76459], [72, 1.76459], [73, 1.49624], [74, 1.49624], [75, 1.49624], [76, 1.49624], [77, 1.49624], [78, 1.49624], [79, 1.49624], [80, 1.49624], [81, 1.49624], [82, 1.49624], [83, 1.49624], [84, 1.49624], [85, -0.33313], [86, -0.33313], [87, -0.33313], [88, -0.33313], [89, -0.33313], [90, -0.33313], [91, -0.33313], [92, -0.33313], [93, -0.33313], [94, -0.33313], [95, -0.33313], [96, -0.33313], [97, -0.33313], [98, -0.33313], [99, -0.33313], [100, -0.33313], [101, -0.33313], [102, -0.33313], [103, -0.33313], [104, -0.33313], [105, -0.33313], [106, -0.33313], [107, -0.33313], [108, -0.33313], [109, -0.33313], [110, -0.33313], [111, -0.33313], [112, -0.33313], [113, -0.33313], [114, -0.33313], [115, -0.33313], [116, -0.33313], [117, -0.33313], [118, -0.33313], [119, -0.33313], [120, -0.33313], [121, -0.33313], [122, -0.33313], [123, -0.33313], [124, -0.33313], [125, -0.33313], [126, -0.33313], [127, -0.33313], [128, -0.33313], [129, -0.33313], [130, -0.33313], [131, -0.33313], [132, -0.33313], [133, -0.33313], [134, -0.33313], [135, -0.33313], [136, -0.33313], [137, -0.33313], [138, -0.33313], ]
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
 