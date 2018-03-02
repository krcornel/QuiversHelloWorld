http://quivershelloworld-env.us-west-1.elasticbeanstalk.com/

Steps to complete Node.js "Hello World!" application using AWS Elastic Beanstalk:

1. Create a local Node.js application.
	Install Node.js, it can be found here: https://nodejs.org/en/download/
	Create a basic app.js file, this file will create the http server and provide a callback function to be ran when users come to your site.
	Here is an example file: 
var http = require('http');

var callback = 
	function(req, res) {
		res.writeHead(200, {"Content-Type": "text/plain"});
		res.end('Hello World!');
	}

var server = http.createServer(callback);
server.listen(8080);

This code will create a server that only responds with the text "Hello World".

2. Run the application on your local machine.
In the command prompt, type "node app.js"
Connect to the 8080 port we used in the code by typing "localhost:8080" in your browser to see your application. 

3. Get set up with AWS and Elastic Beanstalk!
Note: You can actually do everything remaining in the AWS site, there is a section for managing Elastic Beanstalk, I tried it and its pretty simple.
	Create an AWS account here: https://aws.amazon.com/
	Create a group with admin permissions 
	Setup a user account with the IAM Access Management feature using the group for his permissions.
	Login to the new account using the link provided.
	Install Python/pip/EB CLI description here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html 
	

4. Create the environment and deploy
	On the command line, first type "eb init", this will ask you a few questions about your region and ask you to create a new application.
	Configure any env variables you would like. Make a folder called .ebextensions and add .config files there. 
	Type "eb create <env-name>" to create your environment. Hopefully this will create without an issue, on your AWS dashboard you can see the logs and the current "Health" of your environment.
	You can then type "eb deploy" to deploy. Don't forget to include your app.js file from earlier. 
	You can then make changes to your application and re-deploy using "eb deploy <env-name>". 
	You can also use "eb logs" to track down a problem if something goes wrong.  

