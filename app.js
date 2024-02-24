var a = + prompt("Enter your Physics marks")
var b = + prompt("Enter your Maths marks")
var c = + prompt("Enter your Chemistry marks")
var d = + prompt("Enter your Pak.Studies marks")
var e = + prompt("Enter your English marks")

var f = a+b+c+d+e
var g = f/500 *100
document.write ("Total percentage" +g + "%")




if(g >= 80){
    document.write("Grade A+1")
    
}else if(g>=70){
    document.write("Grade A")
}else if(g>=60){
    document.write("Grade B")
}
else if(g>=50){
    document.write("Grade C")
}else if(g>=40){
    document.write("Grade D")
}
else{
(g <=40)
document.write("Grade Fail")
}
