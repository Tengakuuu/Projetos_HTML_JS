ptbr = false
        jpo = false
        en = true
        function pt() {
            ptbr = true
            jpo = false
            en = false
            console.log(ptbr, jpo, en)
            document.querySelector(".langu").innerHTML = "Idioma"
        }
        function jp() {
            ptbr = false
            jpo = true
            en = false
            console.log(ptbr, jpo, en)
            document.querySelector(".langu").innerHTML = "言語"
        }
        function eng() {
            ptbr = false
            jpo = false
            en = true
            console.log(ptbr, jpo, en)
            document.querySelector(".langu").innerHTML = "Language"


        }
        function entrou() {
            var dia = document.querySelector(".dialo");
            var face = document.querySelector(".face");
            face.innerHTML = "ಠ_ಠ"
            dia.innerHTML = "...?"
        }
        function saiu() {
            var dia = document.querySelector(".dialo");
            var face = document.querySelector(".face");
            face.innerHTML = "-__-"
            dia.innerHTML = "..."
        }
        function clicou() {
            var dia = document.querySelector(".dialo");
            var xingarjp = ["こん畜生","くたばれ","出て行け","不細工", "汚い","デブ","かまをほる","ブス","ボケ","キチガイ","おかま","やりまん","ピエロ","戯け者","馬鹿","クソッタレ"];
            var xingarpt = ["Seu merdinha", "Filho da puta", "Vai se fuder", "Gordo", "Viadinho","Macaco","HomoSexual","Seu Bostinha","Cuzão","Vadia","Putinha","Judeu"];
            var xingaren = ["Asshole", "Motherfucker","Fagott","Nigga","Fuck You","Bitch","LittleShit","Gay","Trash","Fat","Cuckold","Stupid","Retard","RedNeck","Monkey"];
            var face = document.querySelector(".face");
            var random = Math.floor(Math.random() * xingarjp.length);
            var random2 = Math.floor(Math.random() * xingarpt.length);
            var random3 = Math.floor(Math.random() * xingaren.length);
            face.innerHTML = "ಠ▃ಠ"
            if (jpo == true){
                dia.innerHTML = (random, xingarjp[random]);
            }
            else if (ptbr == true){
                dia.innerHTML = (random2, xingarpt[random2]);
            }
            else if (en == true){
                dia.innerHTML = (random3, xingaren[random3]);
            }
        }