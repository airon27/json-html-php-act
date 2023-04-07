const xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let socmed = JSON.parse(this.responseText);
        SocMed(socmed);
    }
};
xmlhttp.open("GET", "http://json-php-html-act.test/socmed.php");
xmlhttp.send();


var txt = "";
function SocMed(socmed) {
    console.log(socmed);
    let txt = "";
    let founders = "";
    var headerColor = ["text-primary", "text-danger", "text-warning", "text-dark", "text-info"];
    for(i = 0; i < socmed.length;i++){
        if(i!=0){
            txt +=`
                <div class="carousel-item">
                    <div class="mask flex-center">
                        <div class="container ml-5">
                        <div class="row align-items-center">
                            <div class="col-md-7 col-12 order-md-1 order-2">
                            <h4 class="${headerColor[i]}">${socmed[i].name} </h4>
                            <h5 class="text-dark"> ${socmed[i].company}</h5>
                            <p class="text-dark">Launched: ${socmed[i].launched}</p>
                            <p class="text-dark">Description: ${socmed[i].description}</p>
                            <p class="text-dark">Founders: </p>
                            <ul>`;
                                for(j = 0; j < socmed[i].founders.length; j++){
                                txt += `
                                    <p class="text-dark"><b>&nbsp;&nbsp;&nbsp;&nbsp;• </b>${socmed[i].founders[j]}</p>
                                `;
                                }
                            txt +=`
                            </ul>
                            </div>
                            <div class="col-md-5 col-12 order-md-2 order-1 align-self-start"><img src="source/img/${socmed[i].img}" class="mx-auto zoom" alt="slide"></div>
                        </div>
                        </div>
                    
                    </div>
                    </div>

                `;
                }else{
                    txt +=`
                    <div class="carousel-item active">
                    <div class="mask flex-center">
                        <div class="container ml-5">
                        <div class="row align-items-center">
                            <div class="col-md-7 col-12 order-md-1 order-2">
                            <h4 class="text-primary">${socmed[i].name} </h4>
                            <h5 class="text-dark">${socmed[i].company}</h5>
                            <p class="text-dark">Lanched: ${socmed[i].launched}</p>
                            <p class="text-dark">Description: ${socmed[i].description}</p>
                            <p class="text-dark">Founders: </p>
                            <ul>`;
                                for(j = 0; j < socmed[i].founders.length; j++){
                                txt += `
                                    <p class="text-dark"><b>&nbsp;&nbsp;&nbsp;&nbsp;• </b>${socmed[i].founders[j]}</p>
                                `;
                                }
                            txt +=`
                            </ul>
                            </div>
                            <div class="col-md-5 col-12 order-md-2 order-1 align-self-start "><img src="source/img/${socmed[i].img}" class="mx-auto zoom" alt="slide"></div>
                        </div>
                        </div>
                    
                    </div>
                    </div>

            `;
                    }
    }
    
    document.getElementById("demo").innerHTML = txt;
} 