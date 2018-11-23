<table border="1">
<tr>
<td colspan="9" scope="col"><h>九九乘法表</h></td>
</tr>
<?php
for($i=1;$i<10;$i++)
{
echo "<tr>";
for($n=1;$n<=$i;$n++)
{$result = $i*$n;
echo "<td>".$n."*".$i.'＝'.$result."</td>";
}
}
function numToWord($num)//这段是百度的
 {
    $chiNum = array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九');
    $chiUni = array('','十', '百', '千', '万','十', '百', '千', '亿', '十', '百','千','万','十', '百', '千');
    $uniPro = array(4, 8);
    $chiStr = '';


    $num_str = (string)$num;

    $count = strlen($num_str);
    $last_flag = true; 
    $zero_flag = true; 
    $temp_num = null; 
    $uni_index = 0;

    $chiStr = '';
    if ($count == 2) {
        $temp_num = $num_str[0];
        $chiStr = $temp_num == 1 ? $chiUni[1] :                  $chiNum[$temp_num].$chiUni[1];
        $temp_num = $num_str[1];
        $chiStr .= $temp_num == 0 ? '' : $chiNum[$temp_num]; 
    }else if($count > 2){
        $index = 0;
        for ($i=$count-1; $i >= 0 ; $i--) { 
            $temp_num = $num_str[$i];
            if ($temp_num == 0) {
                $uni_index = $index%15;
                if ( in_array($uni_index, $uniPro)) {
                    $chiStr = $chiUni[$uni_index]. $chiStr;
                    $last_flag = true;
                }else if (!$zero_flag && !$last_flag ) {
                   $chiStr = $chiNum[$temp_num]. $chiStr;
                   $last_flag = true;
                }
            }else{
                $chiStr = $chiNum[$temp_num].$chiUni[$index%16] .$chiStr;

               $zero_flag = false;
               $last_flag = false;
            }
           $index ++;
         }
    }else{
        $chiStr = $chiNum[$num_str[0]]; 
    }
    return $chiStr;
 } 
$num = 101001545;
echo numToWord($num);  
echo "</tr>"
?>

</table>