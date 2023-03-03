//- 초기 배열 선언, 호수 뒷자리가 추가될경우 추가 작성 필요; 마지막 작성기준 1~6
var dictHSDP = {}
let arr_address_1 = []
let arr_address_2 = []
let arr_address_3 = []
let arr_address_4 = []
let arr_address_5 = []
let arr_address_6 = []
let arr_address_7 = []
let arr_address_8 = []
let arr_address_9 = []


for (var i = 0; i < list_HSDP_web.length; i++){
    
    if (list_HSDP_web[i] == '104'){

        /*  104동 일경우 핑테스트 진행
            핑테스트가 들어가야 할 문단
            핑테스트는 리스트 현재 index에서 
            -1 : HSDP Client IP
            -2 : Wallpad IP
            성공, 실패여부를 딕셔너리에 호수와 함께 저장
            핑테스트 작성전까지는 성공으로 분류
            성공 - normal 이상 - warning 연결실패 - connection_error
        */
        dictHSDP[list_HSDP_web[i+1]] = "normal"; //- 성공 분류 코드, 딕셔너리에 모두 성공 저장
        let int_address = list_HSDP_web[i+1].charAt(list_HSDP_web[i+1].length-2);
        //- 호수 뒷자리에 따라 리스트에 분류
        switch(int_address){
            case '1' :
                arr_address_1.push(list_HSDP_web[i+1]);
                break;
            case '2' :
                arr_address_2.push(list_HSDP_web[i+1]);
                break;
            case '3' :
                arr_address_3.push(list_HSDP_web[i+1]);
                break;
            case '4' :
                arr_address_4.push(list_HSDP_web[i+1]);
                break;
            case '5' :
                arr_address_5.push(list_HSDP_web[i+1]);
                break;
            case '6' :
                arr_address_6.push(list_HSDP_web[i+1]);
                break;
            case '7' :
                arr_address_7.push(list_HSDP_web[i+1]);
                break;
            case '8' :
                arr_address_8.push(list_HSDP_web[i+1]);
                break;
            case '9' :
                arr_address_9.push(list_HSDP_web[i+1]);
                break;
        };
        
        
    }
}

//- 뒷자리 1의 경우 태그 생성 반복문
const div_status = document.getElementById("div_status")
const div_last1 = document.createElement("div");
div_last1.setAttribute("id","div_last1")
div_last1.setAttribute("class","div_status")
div_status.appendChild(div_last1);

for (arr of arr_address_1){
    const p_last1 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last1.appendChild(p_text);
    p_last1.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last1.appendChild(p_last1);
}

//- 뒷자리 2의 경우 태그 생성 반복문
const div_last2 = document.createElement("div");
div_last2.setAttribute("id","div_last2")
div_last2.setAttribute("class","div_status")
div_status.appendChild(div_last2);

for (arr of arr_address_2){
    const p_last2 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last2.appendChild(p_text);
    p_last2.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last2.appendChild(p_last2);
}

//- 뒷자리 3의 경우 태그 생성 반복문
const div_last3 = document.createElement("div");
div_last3.setAttribute("id","div_last3")
div_last3.setAttribute("class","div_status")
div_status.appendChild(div_last3);

for (arr of arr_address_3){
    const p_last3 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last3.appendChild(p_text);
    p_last3.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last3.appendChild(p_last3);
}

//- 뒷자리 4의 경우 태그 생성 반복문
const div_last4 = document.createElement("div");
div_last4.setAttribute("id","div_last4")
div_last4.setAttribute("class","div_status")
div_status.appendChild(div_last4);

for (arr of arr_address_4){
    const p_last4 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last4.appendChild(p_text);
    p_last4.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last4.appendChild(p_last4);
}

//- 뒷자리 5의 경우 태그 생성 반복문
const div_last5 = document.createElement("div");
div_last5.setAttribute("id","div_last5")
div_last5.setAttribute("class","div_status")
div_status.appendChild(div_last5);

for (arr of arr_address_5){
    const p_last5 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last5.appendChild(p_text);
    p_last5.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last5.appendChild(p_last5);
}

//- 뒷자리 6의 경우 태그 생성 반복문
const div_last6 = document.createElement("div");
div_last6.setAttribute("id","div_last6")
div_last6.setAttribute("class","div_status")
div_status.appendChild(div_last6);

for (arr of arr_address_6){
    const p_last6 = document.createElement("p");
    const p_text = document.createTextNode(arr);
    p_last6.appendChild(p_text);
    p_last6.setAttribute("class","indicate_"+dictHSDP[arr])
    div_last6.appendChild(p_last6);
}
//- float옵션 초기화
const p_clear = document.createElement("p");
p_clear.setAttribute("style","clear:left");
document.body.appendChild(p_clear);
