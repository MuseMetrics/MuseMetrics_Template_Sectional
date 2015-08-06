/******************************
		Instructions
******************************/
Thank you for using a 
Muse Metrics Website Template!

Please read the following instructions
on how to effectively use and 
modify the templates to create
easy, effective, and beautifully
laid out responsive webpages.
-------------------------------





/******************************
			HTML
******************************/
<head></head>
All the content within the head
tags is already prepared for each
template. Here are the sections
you can modify to make the site
your own.

Modify the meta tags that have
the names of "description" and
"author" to give yourself credit
and a suitable description for
the site.

Create your own favorite icon
(the icon that appears in the 
browser tab as well as bookmarks)
by going to http://www.favicon.cc/
and either make one yourself or
upload an existing image. You must
change the URL specified to your
hosted site when it's finished
as well as upload the .ico file
to your root folder.

The linked CSS files are all
necessary and must not be moved
out of order. The only one that
should be modified to fit your
design is the custom.css.

<title></title> Should be changed
to whatever you like.

<body></body>
There are very important tags and
classes that must be specified
to create and maintain a clean
and responsive layout.

All content must reside within
<section class="grid"></section>

Depending on the template, there
may be subsection tags or not.
Either way, the next important
tags are <div class="row"></div>
These divs set up the content to 
be aligned in rows of a total of
12 columns.

Within the row divs, you must use
<div class="col-?"></div> with the
? specifing a number from 1-12.
There must be a total of 12 columns
within each row. However you make that
number is up to you.
ex. col-6, col-6
ex. col-4, col-4, col-4
ex. col-5, col-2, col-5
ex. col-3, col-3, col-3, col-3

Other classes can be called to 
help layout content without
having to specify each attribute
individually in your custom.css
file.
ex. <div class="col-12 center header"></div>
    -Creates a div that spans all 12 columns,
    has 25px padding-top, and is centered.

Here is a list of the classes
and their attributes:

center: aligns text in the center
left: aligns text to the left
right: aligns text to the right
justify: aligns text justified
float_left: floats content to the left
float_right: floats content to the right
clear: clears floats
header: provides 25px padding-top
pad: provides 5px padding
invisible: hides content to use as a buffer
block: displays content in a block
inline: displays content inline
inline-block: displays content inline and block
			  depending on viewport width
-------------------------------





/******************************
			CSS
******************************/
Depending on the template, there
are numerous CSS files linked
within the <head></head> tags
at the top of the document. The
only one that needs to be modified
is the custom.css. This file is
where you will change the colour
schemes, typography, sizes, etc.

If you wish to add animations or
other CSS code, depending on how
long the file can get, it is
recommened that you create and
link separate files instead of
piling everything into custom.css.
If new CSS files are added, ensure
that they are linked after custom.css.
The order is particular in the
head tags.

Each template comes with 3 CSS
files. .css, .scss, .scss.map.
The SCSS is the SASS file. It is 
recommended that this be used if
you know how to write SASS code
and have a proper compiler. If 
you do not know how to write SASS
code, just modify the CSS files
themselves. 

Each template has a link to a 
fonts.css file in the head tags.
The file comes with 75 Google
Fonts. To add a font that isn't
on the list, just visit 
https://www.google.com/fonts
and copy/paste the @import code
in section 3. You can then call
your font in your custom.css
file by using double quotes
around the name.
-------------------------------





/******************************
			JS
******************************/
These templates are designed in
the most minimalistic manner in 
that there is little JavaScript
involved to make them work.

If you would like to include any 
JS in your website, you can either
add your own files or modify the
musemetrics.js file.
-------------------------------




/******************************
		Muse Metrics Team
******************************/
Web Developer - Magister Praeclarus
Concept Artist - Selene Loza Sanchez
Graphic Artist - Eric Andrade
-------------------------------