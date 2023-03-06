let Lobis_web_list = null
let xmlhttp = new XMLHttpRequest();
var arr_HSDP_Client = [];
var arr_101_ClientIP = [];
var arr_102_ClientIP = [];
var arr_103_ClientIP = [];
var arr_104_ClientIP = [];

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
list_Lobis_web = Lobis_web_list.replace(/\n/g,"\t").replace(/\s/g,"\t")
list_HSDP_web = HSDP_web_list.replace(/\n/gi,"\t")
list_Lobis_web = list_Lobis_web.split('\t');
list_HSDP_web  = list_HSDP_web.split('\t');

for (var i = 0; i < (list_HSDP_web.length/5); i++){
    arr_HSDP_Client.push(list_HSDP_web[i*5+1])
    let index = list_HSDP_web[i*5+3]
    switch(index){
        case '101' :
            arr_101_ClientIP.push(list_HSDP_web[i*5+1]);
            break;
        case '102' :
            arr_102_ClientIP.push(list_HSDP_web[i*5+1]);
            break;
        case '103' :
            arr_103_ClientIP.push(list_HSDP_web[i*5+1]);
            break;
        case '104' :
            arr_104_ClientIP.push(list_HSDP_web[i*5+1]);
            break;
    }
}
for (var i=0; i < (list_Lobis_web.length/7);i++){
    arr_HSDP_Client.push(list_Lobis_web[i*7+1])
    let index = list_Lobis_web[i*7+3]
    switch(index){
        case '101' :
            arr_101_ClientIP.push(list_Lobis_web[i*7+1]);
            break;
        case '102' :
            arr_102_ClientIP.push(list_Lobis_web[i*7+1]);
            break;
        case '103' :
            arr_103_ClientIP.push(list_Lobis_web[i*7+1]);
            break;
        case '104' :
            arr_104_ClientIP.push(list_Lobis_web[i*7+1]);
            break;
    }
}

var set = new Set(arr_HSDP_Client);
arr_HSDP_Client= [...set]; //- HSDP Client IP를 중복제거하고 담은 배열
var set = new Set(arr_101_ClientIP);
arr_101_ClientIP = [...set];
var set = new Set(arr_102_ClientIP);
arr_102_ClientIP = [...set];
var set = new Set(arr_103_ClientIP);
arr_103_ClientIP = [...set];
var set = new Set(arr_104_ClientIP);
arr_104_ClientIP = [...set];

arr_HSDP_Client = arr_HSDP_Client.filter(x => x !== undefined);