## Templating 
EJS(Embedded JavaScript templates)

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.
exp =>  /:id,/content_name etc.;


### Interpolation Syntax
Interpolation refers to embedding expressions into marked up text.


### Passing the data
How to pass the data which is come from the backend.

### Conditional Statement in EJS
Adding condition inside EJS
<% if(diceVal = 6){%>
<h2>Nice! Roll dice again.</h2><% } %>

### Loop in EJS
<% for(user of followers) { %>
<li><%= user %></li>
<% } %>