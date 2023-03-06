var num_div = 0 
const div_status = document.getElementById("div_status")

for (arr in arr_HSDP_Client){
    if (arr % 10 === 0){
        const div = document.createElement("div");
        div.setAttribute("id","div_server"+num_div)
        div.setAttribute("class","div_server_status")
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
    p1.appendChild(p_text);
    p1.setAttribute("class","indicate_normal");
    div_server.appendChild(p1)
}