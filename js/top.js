(function(window){
    var a = function(as){
        // default value
        var ps = {
            w:40,
            h:40,
            dImg:"/img/up-d.png",
            hImg:"/img/up-db.png",
            bt:100,
            rg:0,
            s:70,
            th:300
        }
        // merge value 
        if(as !== "undefined"){
            for(var key in as){
                ps[key] = as[key];
            }
        }
        
        this.as = ps;
        this.init();
    }
    a.prototype.init = function(){
        var data  = this.as;
        var d = document.createElement("div");
        d.style.width = data.w  + "px"; 
        d.style.height = data.h + "px";
        d.style.position = "fixed";
        d.style.bottom = data.bt + "px"
        d.style.right = data.rg + "px" 
        d.style.cursor = "pointer";
        d.style.backgroundImage = "url(" + data.dImg +")";
        d.style.backgroundSize = "100%";
        d.style.display = "none";
        d.onmouseenter = function(){
            d.style.backgroundImage = "url(" + data.hImg +")";
        }
        d.onmouseout = function(){
            d.style.backgroundImage = "url(" + data.dImg +")";
        }
        document.body.onscroll = function(){
            if(document.documentElement.scrollTop >= data.th){
                d.style.display = "inline-block";
            }else{
                d.style.display = "none";
            }
        }

        d.onclick = function(){
            var timer = requestAnimationFrame(function fn(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(oTop > 0){
                    document.body.scrollTop = document.documentElement.scrollTop = oTop - data.s;
                    timer = requestAnimationFrame(fn);
                }else{
                    d.style.display = "none";
                    d.style.backgroundImage = "url(" + data.dImg +")";
                    cancelAnimationFrame(timer);
                }
            });
        }
        document.body.appendChild(d);
    }
    return window.Top = a;
})(window)

window.onload = function(){new Top();}
