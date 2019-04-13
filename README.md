BITCOIN address Information application

This application facilitates the balance gathering process for a specific BITCOIN  address.

Setup & configuration  steps:

1)	Fork or download the application
2)	Once the program has been opened in a code editor run “npm install” to install dependencies
3)	Note: that this application is connected a MYSQL database, Reconfigure Inside the “util” folder in the “dbConnection” file the specific  password to access your local MYSQL Workbench. Note that the server once its run it will create a database named “markdale” and sync the models to your local mysql workbench.
4)	Once the db password is set, run the command “npm start”, and the application will run!

How to use the application (steps) :

1)	: On the Homepage, the user must must insert a specific BITCOIN testnet address and click submit, otherwise click “random address” and a random address will be searched. 
2)	: The user can now see on display that the balance for a particular BITCOIN address has appeared.
1)	Step 3 : The user can click “details” to get a bar graph display of more relevant information regarding the BITCOIN address he or she searched for.
2)	Step 4 : The user can also “deposit” a certain amount of money to the selected address , by inserting in the bottom input a numeric value. (note that I have passed my Token requirement, so this post will likely not go through, but you will be redirected to the homepage. 




Technologies used : Javascript, CSS, Chart.js, Node.js, Mysql

