var ch = [];
function addNew() {
    var a = prompt("Enter the name of Student");
    ch.push(a);
}
function remove() {
    var r = prompt("Enter the name of Student to be removed");
    var k = ch.indexOf(r);
    ch.splice(k, 1);
}
function display() {
    console.log(ch);
}





var c = prompt("Do you want to use the database y/n");
if (c === "y") {
    var f = "empty";
    while (f != "quit") {
        f = prompt("WHAT DO YOU WANT : add , remove , display or quit");
        if (f === "add") {
            addNew();
        }
        else if (f === "remove") {
            remove();
        }
        else if (f === "display") {
            display();
        }
        else {
            alert("Not Recognised");
            f = "quit";
        }
    }
    alert("Thanks for using this app Refresh it to start over!!!")
}

