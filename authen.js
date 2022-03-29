
function valid() {
   
        var username = document.getElementById("Uname").value;
        var password = document.getElementById("Pass").value;
    alert(username);

        if (username.length == "" && password.length == "") {
            alert("User Name and Password fields are empty");
            return false;
        }
        else {
            if (username.length == "") {
                alert("User Name is empty");
                return false;
            }
            if (password.length == "") {
                alert("Password field is empty");
                return false;
            }  
       
        }
        readJson();

    }

    function readJson(){
        
        alert("did not log in right");

        fetch("C://Users//Alexie//Documents//Scripts//My Web Sites//LoginSystem//data.json")
            .then(response => {
                var json = response.json();
            })
            

        print(json);
            

        alert("check2");

          for (let i = 0; i < mydata.length; i++) {
            alert(mydate[i].username);
            if(username == mydata[i].username){
                if(password == mydata[i].password){
                    alert("succ");
                }
            }
        }
        
        alert("did not log in right");
    }

    function WriteJson(){

    }
