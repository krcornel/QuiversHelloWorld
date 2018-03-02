My website running on AWS Elastic Beanstalk framework:
http://quivershelloworld-env.us-west-1.elasticbeanstalk.com/

# H1 Steps to complete Node.js "Hello World!" application using AWS Elastic Beanstalk:

# H2 1. Create a local Node.js application.
	Install Node.js, it can be found here: https://nodejs.org/en/download/
	Create a basic app.js file, this file will create the http server and provide a callback function to be ran when users come to your site.
	Here is an example file: 

	```javascript
	var http = require('http');

	var callback = 
		function(req, res) {
			res.writeHead(200, {"Content-Type": "text/plain"});
			res.end('Hello World!');
		}

	var server = http.createServer(callback);
	server.listen(8080);
	```

This code will create a server that only responds with the text "Hello World".

# H2 2. Run the application on your local machine.
* In the command prompt, type "node app.js"
* Connect to the 8080 port we used in the code by typing "localhost:8080" in your browser to see your application. 

# H2 3. Get set up with AWS and Elastic Beanstalk!
 
	* Create an AWS account [here](https://aws.amazon.com/)
	* Create a group with admin permissions 
	* Setup a user account with the IAM Access Management feature using the group for his permissions.
	* Copy the access Id and secret key to be used for EB CLI
	* Login to the new account using the link provided.
	


**Note:** I did the rest of the set up with the AWS Management Console because it makes the configuration details very easy. You can also do this with EB CLI using the command line, I played around with that a bit too, there are instructions below to complete the task that way below.

# H2 4. Create the environment and deploy (AWS Management Console version)
	 * Signed into your IAM account in the AWS Management Console, click on services at the top left and find Elastic Beanstalk. 

	 ![ebservice](https://imgur.com/ULuIgvH "ebservice")

	 * On the Elastic Beanstalk page, select "Actions" on the top right and select "Create Environment" (There will be no green box with a running app for you)
	   ![createenv](https://i.imgur.com/bZf6K0t.png "createenv")

	 * You will then see this page, fill out the details. When you are done, it will take a few minutes to start up the environment. 
	 ![envdetails](http://i1.wp.com/www.blog.labouardy.com/wp-content/uploads/2017/08/new_env_form.png?w=975 "envdetails")

	 * Once it is finished, you can see the current status of your environment in your dashboard
	 ![envdashboard](https://i.imgur.com/zbD9kaP.png "envdashboard")

	 * In the top middle of the screen, you can see the URL where your site is located. 
	 * If there are no errors and your health is ok, go ahead and visit your site. 
	 * To update your app/re-deploy, simply click the "Upload and Deploy" button in the image above
	

# H2 4. Create the environment and deploy (EB CLI version)
	* Install Python/pip/EB CLI description [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html)
	* On the command line, first type "eb init", this will ask you a few questions about your region and ask you to create a new application.
	* Configure any env variables you would like. Make a folder called .ebextensions and add .config files there. 
	* Type "eb create <env-name>" to create your environment. Hopefully this will create without an issue, on your AWS dashboard you can see the logs and the current "Health" of your environment.
	* You can then type "eb deploy" to deploy. Don't forget to include your app.js file from earlier. 
	* You can then make changes to your application and re-deploy using "eb deploy <env-name>". 
	* You can also use "eb logs" to track down a problem if something goes wrong.  

