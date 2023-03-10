const div_status = document.getElementById("div_status")
const div_MSKclient = document.getElementById("div_MSKclient")
const div_Address = document.getElementById("div_Address")

index = 1 + arr_101_ClientIP.length + arr_102_ClientIP.length
num_before_lastaddress = 1
for(clientIP of arr_103_ClientIP){
    /*
        클라이언트 IP로의 핑테스트이후 결과를 받아서
        normal, warning, connection_error로 분류해서 적용
        담는 변수는 str_clientIP_status
    */
    bool_pingtest = JSON.parse(String(dict_HSDP_Client_web[clientIP]).toLowerCase())
    if(bool_pingtest === true){
        str_clientIP_status = "normal"
       }else if(bool_pingtest === false){
           str_clientIP_status = "connection_error"
       }else {
           str_clientIP_status = "warning"
       }
    
    const div_mskclient_part = document.createElement("div")
    div_mskclient_part.setAttribute("class","div_mskclient_part")
    div_MSKclient.appendChild(div_mskclient_part)

    const div_Address_part = document.createElement("div")
    div_Address_part.setAttribute("class","div_mskclient_part")
    div_Address.appendChild(div_Address_part)

    const p_MSKclient = document.createElement("p")
    const p_MSKclient_index = document.createTextNode("MSK-102(" + index + "/" + arr_HSDP_Client.length + ")")
    p_MSKclient.setAttribute("id","MSK-102(" + index + "/" + arr_HSDP_Client.length + ")")
    p_MSKclient.setAttribute("onclick","evt_MSK_click(this)")
    p_MSKclient.setAttribute("class","indicate_"+str_clientIP_status)
    p_MSKclient.setAttribute("style","margin:0px 0px 0px 0px;align-items:center")
    p_MSKclient.appendChild(p_MSKclient_index)
    div_mskclient_part.appendChild(p_MSKclient)
    for(var i = 0; i< (list_Lobis_web.length/8);i++){
        if (clientIP === list_Lobis_web[i*8+1]){
            /*
                해당 과정에서 각 세대로 핑테스트 진행
                normal, warning, connection_error
                담는 변수는 str_clientIP_status
            */
            bool_pingtest = JSON.parse(list_Lobis_web[i*8+7].toLowerCase())
            if(bool_pingtest === true){
             str_clientIP_status = "normal"
            }else if(bool_pingtest === false){
                str_clientIP_status = "connection_error"
            }else {
                str_clientIP_status = "warning"
            }
            const p_Address = document.createElement("p")
            const p_Address_index = document.createTextNode("공용 " + list_Lobis_web[i*8+5])
            p_Address.setAttribute("id",i)
            p_Address.setAttribute("onclick","evt_Lobis_click(this)")
            p_Address.setAttribute("class","indicate_"+str_clientIP_status)
            p_Address.setAttribute("style", "float:left;margin:1px 1px 1px 1px;width:70px")
            p_Address.appendChild(p_Address_index)
            div_Address_part.appendChild(p_Address)
        }
    }

    const div_clear = document.createElement("div");
    div_clear.setAttribute("style","clear:left");
    div_Address_part.appendChild(div_clear);
    for (var i = 0; i < (list_HSDP_web.length/7); i++){
        if (clientIP === list_HSDP_web[i*7+1]){
             /*
                해당 과정에서 각 세대로 핑테스트 진행
                normal, warning, connection_error
                담는 변수는 str_clientIP_status
            */
           bool_pingtest = JSON.parse(list_HSDP_web[i*7+6].toLowerCase())
           if(bool_pingtest === true){
            str_clientIP_status = "normal"
           }else if(bool_pingtest === false){
            str_clientIP_status = "connection_error"
           }else {
            str_clientIP_status = "warning"
           }
            num_lastaddress = list_HSDP_web[i*7+4].trim().charAt(list_HSDP_web[i*7+4].trim().length-1);
            if(isNaN(list_HSDP_web[i*7+4])===true){
                num_before_lastaddress = num_lastaddress
            }

            if(num_before_lastaddress != num_lastaddress ){
                const div_clear_3 = document.createElement("div");
                div_clear_3.setAttribute("style","clear:left");
                div_Address_part.appendChild(div_clear_3);
                num_before_lastaddress = num_lastaddress
            }
            const p_Address = document.createElement("p")
            const p_Address_index = document.createTextNode(list_HSDP_web[i*7+4])
            p_Address.setAttribute("id",i)
            p_Address.setAttribute("onclick","evt_HSDP_click(this)")
            p_Address.setAttribute("class","indicate_"+str_clientIP_status)
            p_Address.setAttribute("style", "float:left;margin:1px 1px 1px 1px;width:70px")
            p_Address.appendChild(p_Address_index)
            div_Address_part.appendChild(p_Address)
        }
    }
    const div_clear_2 = document.createElement("div");
    div_clear_2.setAttribute("style","clear:left");
    div_Address_part.appendChild(div_clear_2);
    index++
}

var MSK_Server = document.getElementById("p_MSK_Server")
MSK_Server.setAttribute("style","width:15%;padding: 40% 0%")

