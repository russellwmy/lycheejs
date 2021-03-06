<!doctype html>
<html>
<head>
	<title>lychee.js Fork Boilerplate</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<!-- BOOTSTRAP -->
	<script src="/libraries/lychee/build/html/core.js"></script>

	<style>
		body {
			margin: 0;
			padding: 0;
			overflow: hidden;
		}
		
		.lychee-Renderer {
			display: block;
			margin: 0 auto;
			user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			-webkit-user-select: none;
		} 
	</style>

</head>
<body>
	<script>
	(function(lychee, global) {

		lychee.pkginit('html/main', {
			debug:   false,
			sandbox: false
		}, {
		});

	})(lychee, typeof global !== 'undefined' ? global : this);
	</script>
</body>
</html>    
