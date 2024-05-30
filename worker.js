// don't delete this 
const _navbardef = [
  {title: "index", href:"/", type: "Home"}, 
  {title: "biography", href:"/", type: "about"},
 {title: "Career-goals", href:"", type:"career-goals"},
 { title: "Activities-organization", href:"/", type:"activities-organization"},
 {title: "Images", href:"/", type: "images"} ,
]


class Page {
 constructor(args) {
   this.navbar= args.navbar;
   this.title = args.title;
   this.body = args.body;
 }
 get navbar (){
  let output 
  for(const each of this._navbar){
     output +=  `<a href="${each.href}">${each.title}</a>`
  }
  
   return '<nav> output </nav>'
   
 }
 set navbar(navbarObject) {
  this._navbar = navbarObject

 }
 get header (){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${this.title}</title>
      <style>
       
      body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          color: #333;
          margin: 0;
          padding: 0;
      }
      header {
          background-color: #333;
          color: #fff;
          padding: 10px 0;
          text-align: center;
      }
      nav {
          background-color: #444;
          padding: 10px 0;
          text-align: center;
      }
      nav a {
          color: #fff;
          text-decoration: none;
          margin: 0 10px;
      }
      nav a:hover {
          color: #ccc;
      }
     
  </style>
      <script src="https://kit.fontawesome.com/2101804b79.js" crossorigin="anonymous"></script>
     
  </head>
  <body>
      <header>
          <h1 id="banner-text">Life of Alexander Meiners</h1>
      </header>`
 }
 set header(title) {
  this.title = title
 }
 get body(){
   return this._body
 }
 set body(content){
  this._body = content
 }
 get footer (){
   return this._footer 
 }
 set footer(content){
  this._footer = content
 }
 render (){
   return this.header + this.navbar + this.body + this.footer
 }
}





var src_default = {
 async fetch(request, env, ctx) {
   const url = request.url;
   function getParameterByName(name) {
     name = name.replace(/[\[\]]/g, "\\$&");
     name = name.replace(/\//g, "/");
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
     if (!results)
       return null;
     else if (!results[2])
       return "";
     else if (results[2]) {
       results[2] = results[2].replace(/\//g, "/");
     }
     return decodeURIComponent(results[2].replace(/\+/g, " "));
   }
   function rawHtmlResponse(html) {
     return new Response(html, {
       headers: {
         "content-type": "text/html;charset=UTF-8"
       }
     });
   }
   async function BadRequestException(reason) {
     this.status = 400;
     this.statusText = "Bad Request";
     this.reason = reason;
   }
   const { host, protocol, pathname } = new URL(request.url);
   if ("https:" !== protocol || "https" !== request.headers.get("x-forwarded-proto")) {
     throw new BadRequestException("Please use a HTTPS connection.");
   }
   switch (pathname) {
     case "/": { 
       const htmlContent = ` <h2>There is a Book inside everyone's life!</h2>
       <p>Hi Everyone!, Welcome to my Website, My Name is Alexander Meiners,
           I am former and current Student at Indian Hills Community College, and 
           when I went to school here before, it was Business and Marketing. 
           My Life is like a book because oddly enough I write books for a living. My future,
           wasn't always what I anticpated, but from hardwork, perservence, determination,
           there was hope. 
       </p>
       <div class="Images">
       <img alt="Profile-image" src="Images/IMG_2582.JPG">
       </div>
       <h1>CONTACT ME</h1>
       <form>
           <label for="Name"> Name</label>
           <input type="text" id="Your Name" name="your name">
   
           <label for="Email">Email</label>
           <input type="text" id="Your Email" name="your email">
   
       <fieldset>
           <legend>Would you like to read my book? </legend>
           <input type="radio" id="yes" name="name of book">
           <label for="yes"> Yes</label>
           <input type="radio" id="no" name="name of my book">
           <label for="no"> No</label>
           </fieldset>
           <input type="submit" value="Sumbit">
           </form>
       </form>
       <div class="media">
           <a href="www.linkedin.com/in/alex-meiners-209851288">Visit MY www.Linkedin.com!</a>
       </div>
       <img id="a" alt="linkedin-image" src="Images/linkedin2.jpg">
   
   
       <div id="clock">00:00</div>
   
       <script>
           function startClock() {
               let seconds = 0;
               let minutes = 0;
               let intervalId = setInterval(function() {
                   seconds++;
                   if (seconds === 60) {
                       seconds = 0;
                       minutes++;
                   }
                   document.getElementById("clock").textContent = 
                       (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
   
                   if (minutes === 5) {
                       clearInterval(intervalId); // Stop the clock after 5 minutes
                   }
               }, 1000);
           }
   
           startClock();
       </script>
       <footer>
           <div class="content-wrap">
               <h2>Let's Keep in Contact!</h2>
           
               <!-- Social media and contact links. Add or remove any networks. -->
               <div class="contact-info">
                   <a href="mailto:alexandergregm25@gmail.com"><i class="fa fa-envelope" 
                       aria-hidden="true"></i><span class="sr-only">alexandergregm25@gmail.com</span></a>
                   <a href="https://a-trainstation.github.io/AlexM/"><i class="fa fa-github" 
                       aria-hidden="true"></i><span class="sr-only">yourwebsite.com</span></a>
                   <a href="https://twitter.com/ATrainMeiners"><i class="fa fa-twitter" 
                       aria-hidden="true"></i><span class="sr-only">Twitter</span></a></a>
                   <a href="https://www.linkedin.com/in/alex-meiners-209851288"><i class="fa fa-linkedin" 
                       aria-hidden="true"></i><span class="sr-only">LinkedIn</span></a>
                   <a href="https://www.facebook.com/profile.php?id=100007566049250&mibextid=LQQJ4d"><i class="fa fa-facebook" 
                       aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
               </div>
               
           </div>
       </footer>` 
       const page = new Page({navbar: _navbardef, title: "home", body: htmlContent}) 
        return rawHtmlResponse (page.render())
        
     }
   }
   const redirectURL = await env.NAMESPACE.get(pathname);
   if (!redirectURL) {
     return new Response("Not Found.", { status: 404 });
   }
   return Response.redirect(redirectURL, 301);
 }
};

export {
 src_default as default
};
