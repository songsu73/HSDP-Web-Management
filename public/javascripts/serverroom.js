var num_div = 0 
const div_status = document.getElementById("div_status")

for (arr in arr_HSDP_Client){
    if (arr % 10 === 0){
        const div = document.createElement("div");
        div.setAttribute("id","div_server"+num_div)
        div.setAttribute("class","div_server_status")
        div.setAttribute("style","float:left")
        div_status.appendChild(div);
        num_div++;
    }
}
var num_div = -1
for (arr in arr_HSDP_Client){
    if (arr % 10 === 0){
        num_div++;
    }
    const div_server = document.getElementById("div_server"+num_div)
    const p1 = document.createElement("p");
    const p_text = document.createTextNode("MSK-102("+(Number(arr)+1)+"/"+(arr_HSDP_Client.length)+")");
    p1.setAttribute("id","MSK-102(" + (Number(arr)+1) + "/" + arr_HSDP_Client.length + ")")
    p1.setAttribute("onclick","evt_MSK_click(this)")
    p1.appendChild(p_text);
    p1.setAttribute("class","indicate_normal");
    p1.setAttribute("style","padding: 7px 13px")
    div_server.appendChild(p1)
}


var MSK_Server = document.getElementById("p_MSK_Server")
MSK_Server.setAttribute("style","width:15%;padding: 20% 0%")

