//- 해야할 것 - 각 라우터에 맞게 연결, 어떻게?
const div_status = document.getElementById("div_status")
const div_MSKclient = document.getElementById("div_MSKclient")
const div_Address = document.getElementById("div_Address")


index = 1
num_before_lastaddress = 1
for(clientIP of arr_101_ClientIP){
    /*
        클라이언트 IP로의 핑테스트이후 결과를 받아서
        normal, warning, connection_error로 분류해서 적용
        담는 변수는 str_clientIP_status
    */
    var str_clientIP_status = "normal"

    const p_MSKclient = document.createElement("p")
    const p_MSKclient_index = document.createTextNode("MSK-102(" + index + "/" + arr_HSDP_Client.length + ")")
    p_MSKclient.setAttribute("class","indicate_"+str_clientIP_status)
    p_MSKclient.setAttribute("style","margin:30px 5px 90px 5px;")
    p_MSKclient.appendChild(p_MSKclient_index)
    div_MSKclient.appendChild(p_MSKclient)

    for(var i = 0; i< (list_Lobis_web.length/7);i++){
        if (clientIP === list_Lobis_web[i*7+1]){
            /*
                해당 과정에서 각 세대로 핑테스트 진행
                normal, warning, connection_error
                담는 변수는 str_clientIP_status
            */
            str_clientIP_status = "normal"
            const p_Address = document.createElement("p")
            const p_Address_index = document.createTextNode("공용 " + list_Lobis_web[i*7+5])
            p_Address.setAttribute("class","indicate_"+str_clientIP_status)
            p_Address.setAttribute("style", "width:50px;heigh:5px;float:left;margin:1px 3px 1px 3px")
            p_Address.appendChild(p_Address_index)
            div_Address.appendChild(p_Address)
        }
    }

    const div_clear = document.createElement("div");
    div_clear.setAttribute("style","clear:left");
    div_Address.appendChild(div_clear);

    for (var i = 0; i < (list_HSDP_web.length/5); i++){
        if (clientIP === list_HSDP_web[i*5+1]){
             /*
                해당 과정에서 각 세대로 핑테스트 진행
                normal, warning, connection_error
                담는 변수는 str_clientIP_status
            */
            str_clientIP_status = "normal"
            num_lastaddress = list_HSDP_web[i*5+4].trim().charAt(list_HSDP_web[i*5+4].trim().length-1);
            if(isNaN(list_HSDP_web[i*5+4])===true){
                num_before_lastaddress = num_lastaddress
            }
            if(num_before_lastaddress != num_lastaddress ){
                const div_clear_3 = document.createElement("div");
                div_clear_3.setAttribute("style","clear:left");
                div_Address.appendChild(div_clear_3);
                num_before_lastaddress = num_lastaddress
            }
            const p_Address = document.createElement("p")
            const p_Address_index = document.createTextNode(list_HSDP_web[i*5+4])
            p_Address.setAttribute("class","indicate_"+str_clientIP_status)
            p_Address.setAttribute("style", "width:50px;height:20px;float:left;margin:1px 3px 1px 3px")
            p_Address.appendChild(p_Address_index)
            div_Address.appendChild(p_Address)
        }
    }
    const div_clear_2 = document.createElement("div");
    div_clear_2.setAttribute("style","clear:left");
    div_Address.appendChild(div_clear_2);
    const br_adress = document.createElement("br");
    div_Address.appendChild(br_adress);
    index++
}

console.log(parseInt("전기차1"))