const http = require('http');

const server = http.createServer(function (req,res){
   res.setHeader('Content-Type','application/json');
   res.setHeader('Access-Control-Allow-Origin','*');
   res.end(JSON.stringify({
       platform:process.platform,
       nodeVersion:process.version,
       uptime:Math.round(process.uptime()),
   }));
   //really?----------------------------------------------------------------------
    req.addEventListener('load',function (){
        const data = JSON.parse(this.responseText);
        const serverInfo = document.querySelector('.serverInfo');
        Object.keys(data).forEach(p => {
            const replacements =
                serverInfo.querySelectorAll(`[data-replace = "${p}"]`);
            for(let r of replacements){
                r.textContent = data[p];
            }
        });
    });
    //-------------------------------------------------------------------------------
});

const port = 7070;
server.listen(port,function (){
   console.log(`Ajax server started on port ${port}`);
});