const http = require("http");
const url = require("url");
const fs = require("fs");
const { log } = require("console");
let param = "";
let server = http.createServer((req,res)=>{
    let indirizzo = req.headers.host + req.url;
    let infoUrl = url.parse(indirizzo,true);

    let header = {
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET, POST",
        "Access-Control-Allow-Headers":"Content-Type"
    };

    console.log(infoUrl.pathname);
    switch(infoUrl.pathname){
        case '/':
            console.log("Richiesta risorsa base");
            break;
        case '/getMenu':
            fs.readFile("menu.json",(err, file)=>{
                if(!err){
                    file = JSON.parse(file);

                    let vetMenu = [];
                    
                    for (const key in file) {
                        vetMenu.push(key)
                    }
                    
                    file = JSON.stringify(vetMenu);
                    console.log(vetMenu);
                    res.writeHead(200, header);
                    res.end(file);
                }else{
                    res.writeHead(500, header);
                    res.end("Errore durante il recupero dei dati sul server");
                }
            });
            break;
            case '/getPlates':
                param = "";
    
                req.on("data", (data)=>{
                    param += data;
                });
    
                req.on("end",()=>{
                    fs.readFile("menu.json", (err,file)=>{
                        if(!err){
                            let menu = JSON.parse(file);
                            let allPlates = [];
                            param = JSON.parse(param);
                            for (const key in menu) {
                              if(param.menu == key)
                              {
                                menu[key].forEach(element => {
                                    allPlates.push(element)
                                });
                              }
                            }
                            file = JSON.stringify(allPlates);
                            console.log(file);
                            res.writeHead(200, header);
                            res.end(file);
                        }else{
                            res.writeHead(500,header);
                            res.end(JSON.stringify("Errore durante la lettura del file zips.json"));
                        }
                    })
                })
                break;
        default:
            console.log("Risorsa non trovata!");
    }
});

function getLastId(zips){
    return parseInt(zips[zips.length - 1]._id)+1;
}

server.listen(8888)
console.log("Server running on port 8888...")