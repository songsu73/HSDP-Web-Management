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

xmlhttp.open("GET","javascripts/HSDP_Client_web.list",false);
xmlhttp.send();
if(xmlhttp.status == 200){
    HSDP_Client_web_list = xmlhttp.responseText;
    HSDP_Client_web_list = HSDP_Client_web_list.replace(/\n/gi,"\t")
}

xmlhttp.open("GET","javascripts/HSDP_Server_web.list",false);
xmlhttp.send();
if(xmlhttp.status = 200){
    HSDP_Server_web_list = xmlhttp.responseText;
    HSDP_Server_web_list = HSDP_Server_web_list.replace(/\n/gi,"\t")
}


list_Lobis_web = Lobis_web_list.replace(/\s\s\s\s/g,"\s").replace(/\s\s\s/g,"\s").replace(/\s\s/g,"\s").replace(/\s/g,"\t").replace(/\n/g,"\t").replace(/s/g,"\t")
list_HSDP_web = HSDP_web_list.replace(/\n/gi,"\t");
list_Lobis_web = list_Lobis_web.split('\t');
list_HSDP_web  = list_HSDP_web.split('\t');
list_HSDP_Client_web = HSDP_Client_web_list.split('\t');
list_Server_web = HSDP_Server_web_list.split('\t');

console.log(list_Server_web);


for (var i = 0; i < (list_HSDP_web.length/7); i++){
    arr_HSDP_Client.push(list_HSDP_web[i*7+1])
    let index = list_HSDP_web[i*7+3]
    switch(index){
        case '101' :
            arr_101_ClientIP.push(list_HSDP_web[i*7+1]);
            break;
        case '102' :
            arr_102_ClientIP.push(list_HSDP_web[i*7+1]);
            break;
        case '103' :
            arr_103_ClientIP.push(list_HSDP_web[i*7+1]);
            break;
        case '104' :
            arr_104_ClientIP.push(list_HSDP_web[i*7+1]);
            break;
    }
}
for (var i=0; i < (list_Lobis_web.length/8);i++){
    arr_HSDP_Client.push(list_Lobis_web[i*8+1])
    let index = list_Lobis_web[i*8+3]
    switch(index){
        case '101' :
            arr_101_ClientIP.push(list_Lobis_web[i*8+1]);
            break;
        case '102' :
            arr_102_ClientIP.push(list_Lobis_web[i*8+1]);
            break;
        case '103' :
            arr_103_ClientIP.push(list_Lobis_web[i*8+1]);
            break;
        case '104' :
            arr_104_ClientIP.push(list_Lobis_web[i*8+1]);
            break;
    }
}
var set = new Set(arr_HSDP_Client);
arr_HSDP_Client= [...set]; //- HSDP Client IP를 중복제거하고 담은 배열
arr_HSDP_Client.sort(
    function(a,b) { return a.split(".").pop() - b.split(".").pop()
})
var set = new Set(arr_101_ClientIP);
arr_101_ClientIP = [...set];
var set = new Set(arr_102_ClientIP);
arr_102_ClientIP = [...set];
var set = new Set(arr_103_ClientIP);
arr_103_ClientIP = [...set];
var set = new Set(arr_104_ClientIP);
arr_104_ClientIP = [...set];

arr_HSDP_Client = arr_HSDP_Client.filter(x => x !== undefined);

function evt_HSDP_click(my) {
    p_click_id = my.id
    p_click_class = my.className.split("_").pop()
    switch(p_click_class){
        case 'normal' : p_click_class = "정상";break;
        case 'warning' : p_click_class = "이상";break;
        case 'error' : p_click_class = "연결끊김";break;
    }
    alert(list_HSDP_web[p_click_id*7+3] + "동 " +list_HSDP_web[p_click_id*7+4] + "\n"
        + "현재 상태 : "+ p_click_class + "\n"  
        +"HSDP Client IP : " + list_HSDP_web[p_click_id*7+1] + "\n"
        +"Wallpad IP : " +list_HSDP_web[p_click_id*7+2]
        )
}

function evt_Lobis_click(my){
    p_click_id = my.id
    p_click_class = my.className.split("_").pop()
    switch(p_click_class){
        case 'normal' : p_click_class = "정상";break;
        case 'warning' : p_click_class = "이상";break;
        case 'error' : p_click_class = "연결끊김";break;
    }
    alert(list_Lobis_web[p_click_id*8+3] + "동 " +list_Lobis_web[p_click_id*8+4] + "라인 공용 " +list_Lobis_web[p_click_id*8+5] + "층\n"
        + "현재 상태 : "+ p_click_class + "\n"  
        +"HSDP Client IP : " + list_Lobis_web[p_click_id*8+1] + "\n"
        +"Wallpad IP : " +list_Lobis_web[p_click_id*8+2]
        )
}
function evt_MSK_click(my){
    index = my.id
    index = index.split("(").pop().split("/").shift()
    p_click_class = my.className.split("_").pop()
    switch(p_click_class){
        case 'normal' : p_click_class = "정상";break;
        case 'warning' : p_click_class = "이상";break;
        case 'error' : p_click_class = "연결끊김";break;
    }
    alert("현재 상태 : " + p_click_class +"\n"
        +"HSDP Client IP : " + arr_HSDP_Client[index-1])
}