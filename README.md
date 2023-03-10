# HSDP-Web-Management
<h5>Framework : Express <img src="https://img.shields.io/badge/Nodejs-6DB33F?style=flat&logo=Nodejs&logoColor=white"/></h5>
<p>Language : Javascript</p>
<p>flow : 요청이 들어오면 주소에 따라 routes/index.js에서 주소에 맞게 views에서 pug파일을 읽어 render<br>
각 pug파일은 public/javascripts에서 스크립트파일을 읽어와서 작동합니다
<p>Start : sudo forever start -c "npm start" ./
<p>Stop : sudo forever list 후 node에 부여된 프로세스id를 sudo forever stop {nodeid}
<p>Connect : {IP-Address}:3000
