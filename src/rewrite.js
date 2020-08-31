  import axios  from "axios";


        let page = 2;
        let magazineId = 'm53c1789fa592';

let fet = axios.create({
  baseURL:'https://note.com/api/'
})
        const API_URI = 'https://note.com/api/v1/layout/magazine/'+magazineId+'/section?page='+page+'&include_details=true'


       fet.get('v1/layout/magazine/'+magazineId+'/section?page='+page+'&include_details=true').then(res => console.log(res)).catch(e => console.log(e))

        //document.body.style.backgroundColor = "blue";
          var divList = document.querySelectorAll("div");
          divList.forEach(function(div,index){div.outerHTML="い"})



        function fetchAPI(){
          
        }