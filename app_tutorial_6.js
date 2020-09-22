const express = require('express');

///express app

const app = express();

///listen for requests
app.listen(3000);

app.get('/',(req,res)=>{
	///res.send('<p> Hi Shovon </p>');

	res.sendFile('./views/index.html',{
		root: __dirname 
	});
});

app.get('/about',(req,res)=>{
	///res.send('<p> Hi Shovon </p>');

	res.sendFile('./views/about.html',{
		root: __dirname 
	});
});

///reirects
app.get('/about-us',(req,res)=>{
	res.redirect('/about');
});

/// 404 errror

app.use((req,res)=>{
	res.status(404).sendFile('./views/404.html',
	{
		root:__dirname
	});
});


