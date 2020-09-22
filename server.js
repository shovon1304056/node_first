/*const http= require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{

	console.log(req.url,req.method);

	///lodash

	const greet = _.once(()=>{  
		console.log("hello");
	});

	greet();  ///once tai akbar hbe execute
	greet();

	///set header content type

	/*res.setHeader('Content-Type','text/plain');
	res.write('hello,ninjas');
	res.end();*/

	let path = './views/';

	switch(req.url){
		case '/':
		path+='index.html';
		res.statusCode = 200;
		break;

		case '/about':
		path+='about.html';
		res.statusCode = 200;
		break;

		/// if we want to redirect in our page
		case '/about-me':
		
		res.statusCode = 301;
		res.setHeader('Location', '/about');
		break;

		default:
		path+='404.html';
		res.statusCode = 404;
		break;

	}

	/// send and read from HTML file
	fs.readFile(path, (err,data) => {
		// body

		if(err){
			console.log(err);
			res.end();
		}
		else{
			res.write(data);
			res.end();
		}
	});


});

server.listen(3000,'localhost',()=>
{
	console.log('listen for requsts on 3000');
});*/