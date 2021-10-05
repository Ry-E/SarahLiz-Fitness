'use strict';
const statik = require('node-static');
const fs = require('fs');
const path = require('path');
const http = require('http');
// const config = require('./config/secrets');
const formidable = require('formidable');
const nodemailer = require('nodemailer');
// const { noEmptyFiles } = require('formidable/FormidableError');

// hostname = 'localhost';
const port = process.env.PORT;
if (port == null || port == '') {
	port = 3001;
}

let transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		// user: config.emailUsername,
		// pass: config.emailPassword,
		user: 'ryaneldon24@gmail.com',
		pass: 'neo.bird',
	},
});

let myPath = '/Users/Adob3/Desktop/NucampFolder/sarahliz-fitness/build';
// const file = new statik.Server(myPath);
const createFileLoc = () => {
	let staticBasePath = './build';
	let resolvedBase = path.resolve(staticBasePath);
	let safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
	let fileLoc = path.join(resolvedBase, safeSuffix);
	return fileLoc;
};

const staticServe = function (req, res) {
	let staticBasePath = './build';

	let myNextPath =
		'/Users/Adob3/Desktop/NucampFolder/sarahliz-fitness/build/index.html';

	if (req.url === '/' && req.method.toLowerCase() === 'get') {
		// file.serve(req, res);
		// Restrict the path to only return files in the given directory
		let resolvedBase = path.resolve(staticBasePath);
		console.log('resolvedBase: ' + resolvedBase);
		let safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
		console.log('safeSuffix: ' + safeSuffix);
		let fileLoc = path.join(resolvedBase, safeSuffix);
		console.log('fileLoc: ' + fileLoc);

		console.log(req.url);

		// fs.readFile(myNextPath, 'utf8', function (err, data) {
		// Serve static file
		fs.readFile(fileLoc + 'index.html', function (err, data) {
			if (err) {
				res.writeHead(404, 'Not Found');
				res.end(JSON.stringify(err));
				return;
			} else {
				res.writeHead(200, {
					'Content-Type': 'text/html',
				});
				res.end(data);
			}
		});
	} else if (req.url.match('.css$')) {
		createFileLoc();
		let cssPath = path.join(fileLoc, req.url);
		var fileStream = fs.createReadStream(cssPath, 'UTF-8');
		res.writeHead(200, { 'Content-Type': 'text/css' });
		fileStream.pipe(res);
	} else if (req.url.match('.js$')) {
		let jsPath = path.join(fileLoc, req.url);
		var fileStream = fs.createReadStream(jsPath, 'UTF-8');
		res.writeHead(200, { 'Content-Type': 'text/javascript' });
		fileStream.pipe(res);
	} else if (req.url.match('.png$')) {
		let pngPath = path.join(fileLoc, req.url);
		var fileStream = fs.createReadStream(pngPath);
		res.writeHead(200, { 'Content-Type': 'image/png' });
		fileStream.pipe(res);
	} else if (req.url.match('.jpeg$')) {
		let jpegPath = path.join(fileLoc, req.url);
		var fileStream = fs.createReadStream(jpegPath);
		res.writeHead(200, { 'Content-Type': 'image/jpeg' });
		fileStream.pipe(res);
	} else if (req.url === '/api' && req.method.toLowerCase() === 'post') {
		let form = formidable.IncomingForm();

		form.parse(req, function (err, fields) {
			if (err) {
				console.log(err.message);
				return;
			}

			console.log('fields: ', fields);

			let mailOptions_1 = {
				from: 'ryaneldon24@gmail.com',
				to: 'ryaneldon24@gmail.com',
				subject: 'New SarlizFitness Application',
				html: `<div">
					<h1>
						You recieved a new Appliction from ${fields.user_name}!
					</h1>
					<p><h4>Name:</h4> ${fields.user_name}</p>
					<p><h4>Email:</h4> ${fields.user_email}</p>
					<p><h4>Phone Number:</h4> ${fields.user_phone}</p>
                    <p><h4>Program:</h4> ${fields.program}</p>
					<p><h4>Their goals:</h4> ${fields.goals}</p>
					<p><h4>#1 Goal:</h4> ${fields.mainGoal}</p>
					<p><h4>What they struggle with want to change:</h4> ${fields.struggles}</p>
					<p><h4>What has prevented their goals:</h4> ${fields.preventedGoals}</p>
					<p>
						<h4>Reaching their goals would make them feel:</h4>
						${fields.reachedGoals}
					</p>
					<p><h4>Goals importance:</h4> ${fields.importance}</p>
					<p><h4>Ready?:</h4> ${fields.ready}</p>
				</div>`,
			};

			transporter.sendMail(mailOptions_1, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});

			let mailOptions_2 = {
				from: 'ryaneldon24@gmail.com',
				to: `eldon.ryan@yahoo.com`,
				subject: 'Application Received',
				html: `<div">
					<h1>
						Thanks ${fields.user_name}!
					</h1>
                    <p>Your application for has been recieved</p>
                    <p>You'll here back as soon as I get a chance to check it out. Usually within one or two days!</p>
                    <p>Thanks again</p>
                    <p>John Doe</p>
                </div>`,
			};

			transporter.sendMail(mailOptions_2, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});
		});

		res.writeHead(200, {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin': 'http://localhost:3000',
		});
		res.end('Thanks, your application was successfully sent!');
	}

	// If no route present
	else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Route not found + 2' }));
	}
};

const server = http.createServer(staticServe);

server.listen(port, () => {
	console.log(`Server running at https://localhost:${port}/`);
});
