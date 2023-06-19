var name = prompt('Input name','');
var position = prompt('Input position','');
var phone = prompt('Input phone','');

var visitcard = ' <TABLE width="100%" border="0">'
    +' <TR>'
    +' <TD align="center" valign="center">'
    +' <IMG src="img.jpg" height="70px" width="70px">'
    +' </TD>'
    +' <TD align="center">'
    +' <B>' + name + '</B><BR>'
    +' <I>' + position + '</I><BR>'
    +' <FONT color="blue">' + phone + '</FONT>'
    +' </TD>'
    +' </TR>'
    +' </TABLE>';

document.write('<TABLE width="100%" border="0" align="center">');
for(var y=0; y<12; y++)
{
    document.write('<TR>');
    for(var x=0; x<3; x++)
    {
        document.write( '<TD align="center" style="border-style: dashed; borderwidth:thin;">');
        document.write( visitcard );
        document.write('</TD>');
    }
    document.write('</TR>');
}
document.write('</TABLE>');