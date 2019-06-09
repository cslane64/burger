# Eat da Burger Overview
Eat da Burger is a  Node, Express, Handlebars, and MySQL burger app allowing users to add the names of burgers they would like to eat. It is a "burgers to eat" to do list. Once you have enjoyed the greasy goodness of youor burger, you can click on the "Devour" button. Once the devour button has been clicked, the burger name is listed under the Burgers you have eaten list. This way you can look back at the good times you experienced with each burger. Memories...light the corners of my mind...!

[Functionality]
The app uses an Object Relational Mapper (ORM) that define 3 specific CRUD functions (CREATE, READ and UPDATE)

READ - Selected ALL burgers from the database (both devoured and undevoured) and utilized handlebars to display them to the screen in the appropriate area. 

UPDATE - When you click the Devour button, that burger is moved to the "Burgers you've eaten" area of the page. Behind the scenes, the database is "UPDATED" and the "devoured field for that particular burgers ID is changed from 'false' to 'true. 

CREATE - When you find that new burger that MUST go on the "burger to-do list" you can easily add it by utilizing the "Add da Burger" input at the bottom of the page. When the Add da Burger button is clicked, a new burger row is "CREATED" in the database. the devoured field is set to false because it is assumed that you have not yet devoured the burger that you just added. If you have, you should eat much slower.  

Enjoy the app. There is a WHOLE world of burgers for you to explore. Use this app to keep track of what you want to try and what you have already devoured.

Thanks,
Chris