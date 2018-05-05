function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.hi=function(){
	document.write("Hi,my name is"+this.name+",I am"+this.age+"years old now"+"<br/>");
};
Person.prototype.legs=2;
Person.prototype.arms=function(){
	document.write(this.name+"有2只胳膊"+"<br/>");
};
Person.prototype.walk=function(){
	document.write(this.name+"is walking..."+"<br/>");
};

//设置学生函数
function Student(name,age,className){
	Person.call(this,name,age);
	this.className=className;
}
//学生的prototype原型指向Person.prototype
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.hi=function(){
	document.write("Hi,my name is"+this.name+",I am"+this.age+"years old now,and from"+this.className+"<br/>");
	
};
Student.prototype.learn=function(subject){
	document.write(this.name+"is learning "+subject+" at "+this.className+"<br/>");
};

//test
var xiaoan=new Student("xiaoan",24,"class4");
xiaoan.hi();
xiaoan.arms();
xiaoan.walk();
xiaoan.learn("math");
document.write("<br/>"+"<br/>");


//改变prototype
Student.prototype.x=101;
document.write(xiaoan.x+"<br/>");

//不能修改已经实例化的Student对象
Student.prototype={y:2};
xiaoan.y;//undefined
xiaoan.x;//101
var nunnly=new Student("nunnlt",27,"class3");
nunnly.x;//undefined
nunnly.y;//2

