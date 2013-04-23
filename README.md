socialBox
=========

The social media box that Adam requested.

Usage
-----
Copy `socialBox.js` and `socialBox.js.css` into your project directory.

Add this line of code to your `<head>` tag:
```html
<link rel="stylesheet" type="text/css" href="socialBox.js.css">
```

Add this line of code just before the close of your `body` tag:
```html
<script src="socialBox.js"></script>
```

Add this chuck of code on any page that you want the socialBox to appear on:
```html
<!-- this box is fixed to the top right of the screen -->
<div class="socialBox">

  <!-- .socialIcon divs contain all the speicifc social network assets-->
	<div class="socialIcon fbBg">

		<!-- .socialCount divs contain the code needed to display the share count for each platform -->
		<div class="socialCount">
			<div>1,215 followers</div>
		</div>
		<img src="img/fbflat.png">
	</div>
	<div class="socialIcon twitBg">
		<div class="socialCount">
			<div>338,519 people like this.</div>
		</div>
		<img src="img/twitflat.png">
	</div>
	<div class="socialIcon stumBg">
		<div class="socialCount">
			<div>1,215 followers</div>
		</div>
		<img src="img/stumflat.png">
	</div>
</div>
```
>You may have to change the file path for the images and the .js and .css files if you did not place them all in your root directory.



