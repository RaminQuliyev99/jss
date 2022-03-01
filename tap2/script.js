let e = document.getElementById("email");
let p = document.getElementById("pass");
function giris(){
    if(e.value=="admin@gmail.com" && p.value=="1234"){
        alert("siz daxil oldunuz");
    }
    else if (e.value==0 && p.value==0){
        alert("zehmet olmasa butun xanalari doldurun")
    }
    else{
        alert("daxil etdiyiniz melumatlar duzgun deyil");
    };
};

