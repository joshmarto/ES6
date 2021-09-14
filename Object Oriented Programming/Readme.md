Object Oriented Programming
Is a functional option to program with several languages and JavaScript is not the exception. It works in terms of
describe the real world and objects are within it. This means we will have different type (or classes) of objects.
JavaScript allows us to handle OOP in a different way than languages like C# or Java, it does not have actual classes
but works with functions defined as virtual classes. This is powerful in terms of the definition of functions (or 
methods) that the class own. Inheritance is evident in OOP with JavaScript, it makes use of prototype concept within
each Object (which is a well defined term in JavaScript). A prototype is a property which is inherited from type to
type, for example from an Object to a List to an item within the list.

Where can become useful in a project?
An good idea of a project which can use OOP with JavaScript is a program which handles the information of a school.
It is going to require a lot of Objects (Students) which are repited by grade and even sections. Each Student, Parent,
Teacher, Director can inherit characteristics from a "class" Human and all of them will have their own properties
and functions. As well, there will be other categories of possible objects in a school like tools for workshops,
whiteboards, classes, lockers, among others. Now, a brief example of how can be related a model of OOP in a school.

OOP Model
								   Human
								(name, age)
									 |
   ----------------------------------------------------------------
   |                     |                     |                  |
  Parent              Student              Teachear           Director
(children) (grade, scores, homeworks) (classes, degree) (tasks, teachers)