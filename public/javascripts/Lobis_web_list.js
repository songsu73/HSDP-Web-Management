let Lobis_web_list = null
let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "javascripts/Lobis_web.list",false);
xmlhttp.send();
if (xmlhttp.status == 200) { 
    Lobis_web_list = xmlhttp.responseText;
}

xmlhttp.open("GET", "javascripts/HSDP_web.list",false);
xmlhttp.send();
if (xmlhttp.status == 200) { 
    HSDP_web_list = xmlhttp.responseText;
}
Lobis_web_list = Lobis_web_list.replace(/\n/gi,"\t")
HSDP_web_list = HSDP_web_list.replace(/\n/gi,"\t")
Lobis_web_list = Lobis_web_list.split('\t');
HSDP_web_list = HSDP_web_list.split('\t');

document.write("<br>")
// for (var i = 0; i < Lobis_web_list.length; i++) {
//     document.write(Lobis_web_list[i] + "<br>")
// }

// for (var i = 0; i < Lobis_web_list.length; i++) {
//     document.write(HSDP_web_list[i] + "<br>")
// }