// don't delete this 
const _navbardef = [
  {title: "index", href:"/", type: "Home"}, 
  {title: "biography", href:"/bio", type: "about"},
 {title: "Career-goals", href:"/goals", type:"career-goals"},
 { title: "Activities-organization", href:"/engagement", type:"activities-organization"},
 {title: "Images", href:"/gallary", type: "images"} ,
]

function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }
  
   function mergeDeep(target, ...sources) {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }
    
  
    return mergeDeep(target, ...sources);
  }


class Page {
    static getStyleObject(style) {
        const styleTypes = {
            'home': {
                header: {background_color:"000"},
                body: {background_color:"e0ebeb", text_color:"ccf5ff"}
            },
            'greenlantern': {
                header: {background_color:"ccffdd"},
                body: {background_color:"e0ebeb", text_color:"ccf5ff"}
            },
            'purplecrayon': {
                header: {background_color:"ccffdd"},
                body: {background_color:"f7e6ff", text_color:"ccf5ff"}
            },
            'blueberry': {
                header: {background_color:"ccffdd"},
                body: {background_color:"b3f0ff", text_color:"ccf5ff"}
            },
            'yellow': {
                header: {background_color:"ccffdd"},
                body: {background_color:"e0ebeb", text_color:"ccf5ff"}
            },
            
            'default': {
                header: {background_color:"000", text_align:"center"},
                body: {background_color:"e0ebeb", text_color:"fff"}
            }
        }
        return styleTypes[style] || styleTypes['default']
    }
 constructor(args) {
   this.navbar = args.navbar;
   this.style = args.style;
   this.title = args.title;
   this.body = args.body;
   this.footer = args.footer ||`<footer>
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
this.backgroundColor = args.backgroundColor || "#Fddfed";
 }
 get navbar (){
  let output = ""
  for(const each of this._navbar){
     output +=  `<a href="${each.href}">${each.title}</a>`
  }
  
   return `<nav> ${output} </nav>`
   
   
   
 }
 set navbar(navbarObject) {
  this._navbar = navbarObject

 }
 get style() {
    const style = this._style
    return `
      header {
        background-color: #${style.header.background_color};
        color: #${style.header.text_color};
        padding: 10px 0;
        text-align: ${style.header.text_align};
      }
      
      body {
        font-family: Arial, sans-serif;
        color: #333;
        margin: 0;
        padding: 0;
        background-color: #${style.body.background_color};
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
      }`
 }
 set style(args){
    const styledef = Page.getStyleObject('default')
    const merge = mergeDeep(styledef, args )
    this._style = merge
    // let style = Page.getStyleObject('home')
    // style = {...style, body:{...style.body, background_color:"545400"}}
    // ... new Page({...,style:{body:{background_color:"000"}, header:{background_color:"000"}}  ,...})
    // ... new Page({...,style: style,...})
}
 get header() {
    
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${this.title}</title>
          <style>
            /* Global styles */
            ${this.style}
          </style>
          
          <script src="https://kit.fontawesome.com/2101804b79.js" crossorigin="anonymous"></script>
      </head>
      <body>
          <header>
              <h1 id="banner-text">Life of Alexander Meiners</h1>
          </header>
    `;
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
       ` 
       const style = Page.getStyleObject('greenlantern')
       const page = new Page({navbar: _navbardef, title: "home",style: style, body: htmlContent}) 
        return rawHtmlResponse (page.render())
        
        
     }
     case "/bio": { 
      const htmlContent = ` <h1>COUNTRY FLAG</h1>
      <img id="Flags" alt="India Nation Flag" src="../Images/IndiaFlag.jpeg">
      <img id="Flags" alt="United States Of America" src="../Images/American Flag.jpg">
      <h2>History</h2>
      <P class="p1">My Name is Alexander Meiners and I am 25 years from Mumbai, India. 
          I was born on November 19th, 1997. I was Adopted at the age of 3 and 
          live in Ottumwa, IA.
        
          Hi Everyone! Welcome to my page, here I will talk about my life, careers, achievements. Let’s get started. 
          For those of you who are new to my LinkedIn, my name is Alexander Meiners 
          or Alex, I am 26 years old from Ottumwa, IA.
          I am a Graduate from OHS, Class of 2016. GO BULLDOGS!  
         
          I graduated with a 3.85GPA, high academic achievement, honors student, concert band soloist. 
          In years 2016 -2017, I completed my A.A degree at IHCC and 
          later went on to earn my Master’s Degree in Business Management & Marketing, M.A in 2018-2021. 
         
          Jobs that I had throughout high school and after college consisted of: 
          HY-VEE, Marketing, Business Administrator, Real Estate
          
          Personal Life:
          In my spare time I attend church on Sunday’s, I am activities coordinator for the youth in my church. 
          I love spending time with my Family, Friends, my amazing Girlfriend, plus my dogs. 
          I enjoy watching sports, going on bikes rides, rollerblading, Tennis and have a passion for writing. </P>
  
      <h3>CHILDHOOD</h3>
      <p class="p2">When I was young, I was a rambunctious child and you wouldn't believe it, but
          I was always into the sugar bowl, haha. Sports was a huge part of my life growing up,
          at the age of 5 I played soccer, and rode my bikes and I loved running. When growing up
          I attended Eisenhower Elementary school, where I had the best of friends. My favorite part of school,
          was outside reces, gym class and lunch. 
      </p>
      <h4>Sports</h4>
      <p class="p3">
        I am a huge sports fan, I love watching Hockey, some football, and college Sports.
          One of my favorite sports team is the Pittsburgh Penguins.Ever since I was a kid,
          my favorite animal was a Penguin and when the Penguins had a pro sports team, I followed
          the Pittsburgh Penguins ever since. In addition to Sports, my family and I loves watching
          NBA, NFL, Premire League and Formula 1 Racing. 
      </p>
      <div>
          <img id="blog-image" alt="blog-image" src="../Images/IMG_2083.JPG">
          <img id="blog-image" alt="profile-image" src="../Images/IMG_2449.JPG">
          <img id="blog-image" alt="blog-image" src="../Images/IMG_2270.JPEG">
   
      </div>
          
        <h5>Family</h5>
      <div id="Family">
        <p>In my family I have 3 sisters and 1 brother and I am the second oldest.
          We all lived in Iowa. Everyone enjoyed spending the holidays at Grandma and Grandpas house.
          The best part is our family reunions because we don't get to see our family all the time.
          In my family, we play Wheel of Fortune to see who does which chore during the week,
          we enjoy playing board games, Friday Movie Nights, and playing outside. My Father,
          brother and I have been working on outdoor projects and enjoy riding bikes.
        </p>
      </div>
      <div class="Pets">
        <p>I have 2 dogs, 2 cats.
          My dogs name are Lucky and Scooby. 
          My cats name are Molly and Milo.
        <img id="Lucky" alt="dogs" src="../Images/IMG_2579.JPG">
      </p>
    </div> 
      ` 
      const page = new Page({navbar: _navbardef, title: "home", body: htmlContent}) 
       return rawHtmlResponse (page.render())
       
    }
    case "/goals": { 
      const htmlContent = `<h2>IHCC COMPUTER SOFTWARE DEVELOPMENT PROGRAM</h2>
      <P>I am studying Computer Software Development at IHCC, 2023-2025.
          The nice part about going to Indian Hills is that it close to home and very cheap.
  
          <script src="../Career.js"></script>
          <ul id="SkillsList"></ul>
      
          <button onclick="RetrieveDataFJson()">Retrieve Data</button>
          <div>
              <h3>SKILLS</h3>
              <ul>
                  <li>▪ Python</li>
                  <li>▪ Programming Logic</li>
                  <li>▪ Webpage Development</li> 
                  <li>▪ Employability skills</li>
                  <li>▪ Intro to computers</li>
                  <li>▪ JavaScript</li>
                  <li>▪ Java2</li>
                  <li>▪ Web Design</li>
                  <li>▪ C#</li>
              </ul>
          </div>
          <div>
              <h4>Class Projects</h4>
              <ul>
                  <li>▪ C# Project BaseBall</li>
                  <li>▪ Webpage Development Personal Project</li> 
                  <li>▪ Employability skills building a Resume</li>
                  <li>▪ Intro to computers Powerpoint Travel Trip</li>
                  <li>▪ JavaScript OMDB Movie Database</li>
                  <li>▪ Java2 Nutrition Project or GUI </li>
                  <li>▪ Web Design Resume Project</li>
              </ul>
          </div>
          
  <div class="Networking">
       <h4>NetWorking</h4>
      <p>Networking is a key point when working with Computers. 
          Computer Software Development has numerous opportunites in the industry.
          An old saying goes "Its not so much what you know, but Who you know."
          It may seem cliche, but Networking is very key when you know people, 
          they can help guide you to what you need to do next for a job.
          Earning a Masters degree in Business Marketing and Management, is one of my hightlight,
      </p>
  <div class="College Class">
      <h5>College Classes</h5>
      <p>Does this sound familiar? Well what do you know, It is August 28, 2023 and 
          I am in my 1st year at IHCC, taking on CSD. Computer Software Development is 
          one of those careers that takes patience, time and positivity. I am taking Python,
          with "Susan Wilson" and she is the nicest teacher you could ever ask for.
          In addition, I am studying Beginning Webpage Development, and who better else,
          to have as an instructor, "James Warner". I am learning so much about programming,
          coding, HTML, and CSS and all sorts of fun projects and lab units.  
      </p>
      <table>
          <h6>Buena Vista University</h6>
          <tr>
              <th>Buena Vista University</th>
              <td>Years 2017 - 2021</td>
          </tr>
          <tr>
              <th>Degree (MBA) (M.S)</th>
              <td>Master's in Business Marketing and Management</td>
          </tr>
          <tr>
              <th>Classes</th>
              <td>Business, Accounting/Marketing</td>
          </tr>
          <tr>
              <th>Location</th>
              <td>Ottumwa, IA</td>
          </tr>
          <tr>
              <th>Career Job</th>
              <td>Independent Marketer</td>
          </tr>
      </table>
  
  <table>
  <div class="COMPUTER SOFTWARE DEVELOPMENT">
      <h7>CSD Degree</h7>
          <tr>
              <th>Term 1</th>
              <td>3 Months 5 classes</td>
          </tr>
          <tr>
              <th>1st Class</th>
              <td>Python</td>
          </tr>
          <tr>
              <th>2nd class</th>
              <td>WebPage Development</td>
          </tr>
          <tr>
              <th>3rd Class</th>
              <td>Programming logic</td>
          </tr>
          <tr>
              <th>4th Class</th>
              <td>Employability</td>
          </tr>
          <tr>
              <th>Online Class</th>
              <td>Intro to Computers</td>
          </tr>
  
      </table>
      
      <img id="blog-image" alt="quotes" src="../Images/Quotes on computers.jpg"> ` 
      const style = Page.getStyleObject('blueberry')
      const page = new Page({navbar: _navbardef, title: "home", style: style, body: htmlContent}) 
       return rawHtmlResponse (page.render())
       
    }
    
    case "/engagement": { 
      const htmlContent = ` <div class="Book"> 
      <h2 id="Rollerbading Dance Off Book"> Rollerblading Dance Off book</h2>
      <h3 id="Aurhor">Written by Alexander Meiners – June 4th, 2017</h3>
      <p>Rollerblading has been a huge passion of mine and I have seen musicals and dances, but no Rollerblading dance offs.
          I began thinking about writing a book about rollerblading dance and that All ages can read.
          One of my favorite parts of writing is the style and creativity behind the book story.</p>
      <p>The unique part of writing a book is that you get to start from scratch and build.
          Rollerblading is a great outdoor activity, but does possess risks if your not careful.
          I taught myself how to rollerblade and ever since then I have fall in love with skating in my free time.
          Writing a story was never something I even dreamed of, but it has been a hightlight throughout my life.
      </p></div>
  <div class="Hobbies">
      <p>HOBBIES</p>
      <ul>
          <li> 1. Rollerblading</li>
          <li> 2. Writing story scripts</li>
          <li> 3. Alto Saxophone</li>
          <li> 4. Playing Tennis</li>
          <li> 5. Building Legos</li>
          <li> 6. video gaming</li>
      </ul>
  </div>
<div class="Church">
  <h4>Church</h4>
  <p>I am a member of the Latter Day Saints Church of Jesus Christ. 
      I have have been an active member and recieved callings. 
      The callings consist of YSA Representaive, and Youth Activites Coordinator.
      The nice part about being part of an organization, like a church is you get to meet
      so many wonderful people. 
  </p>
</div>
<div class="Realtor">
  <h5>Real Estate</h5>
  <p>
      I am a Real Estate Agent with REMAX PRIDE here in Ottumwa, IA
      Being a Real Estate Agent has been a huge blessing to provide the best
      services for my clients when looking at buying or selling Real Estate Property.
      Check out one of my Property sales, underneath!!.
  </p>
  <p>Fun Fact!
      Did you know that my very 1st sale was on October 31st!! Happy Halloween!
  </p>

  <img id="blog-image" alt="Realtor" src="../Images/IMG_2578.JPG">

  <h6>ALTO SAXOPHONE</h6>
  <table>
      <tr>
          <th>Alto Saxophone</th>
          <td>Woodwind Instrument</td>
      </tr>
      <tr>
          <th>Years in Band</th>
          <td>8 years</td>
      </tr>
      <tr>
          <th>Marching Band</th>
          <td>Competed in 4 years</td>
      </tr>
      <tr>
          <th>Saxophone compenents</th>
          <td>Body, Neck/strap, Ligature, Reed, Mouth Piece.</td>
      </tr>
  </table>
  <p>My first year of High School Marching Band our theme song was Pirates of the Caribbean.</p>
  <div class="Legos">
      <img id="Legos" alt="Pirate Ship" src="../Images/1547.jpeg">
      <img id="Legos" alt="Pirates 5" src="../Images/1548.jpeg">
      <img id="Legos" alt="Silent Mary" src="../Images/1565.jpeg">
      <img id="Legos" alt="Lego Set" src="../Images/1551.jpeg">
  </div>
  <p> I am a huge fan of Pirates of the caribbean Legos.
      This has been a hobby of mine, building legos. 
  </p>


  <script>
      // Function to handle the quiz
      function handleQuiz() {
          // Array to store user information
          var userInformation = [];
  
          // Ask the user for their favorite hobby
          var hobby = prompt("What is your favorite hobby?");
          userInformation.push(hobby);
  
          // Ask the user about their favorite book
          var favoriteBook = prompt("What is your favorite book?");
          userInformation.push(favoriteBook);
  
          // Ask the user about their favorite movie
          var favoriteMovie = prompt("What is your favorite movie?");
          userInformation.push(favoriteMovie);
  
          // Display a message based on the user's input
          switch(hobby.toLowerCase()) {
              case 'rollerblading':
                  alert("That's great! Rollerblading is an awesome hobby!");
                  break;
              case 'writing story scripts':
                  alert("Awesome! Writing is a fantastic way to express creativity!");
                  break;
              case 'alto saxophone':
                  alert("Nice! Playing a musical instrument is so much fun!");
                  break;
              case 'playing tennis':
                  alert("Tennis is a great way to stay active!");
                  break;
              case 'building legos':
                  alert("Building Legos is a fantastic way to express creativity!");
                  break;
              case 'video gaming':
                  alert("Gaming can be a lot of fun! What's your favorite game?");
                  break;
              default:
                  alert("That's interesting! " + hobby + " sounds like a fun hobby!");
          }
  
          switch(favoriteBook.toLowerCase()) {
              case 'harry potter':
                  alert("Harry Potter is a classic! Which book is your favorite?");
                  break;
              case 'the lord of the rings':
                  alert("The Lord of the Rings is an epic fantasy series!");
                  break;
              case 'to kill a mockingbird':
                  alert("To Kill a Mockingbird is a timeless classic!");
                  break;
              case 'the great gatsby':
                  alert("The Great Gatsby is a masterpiece of American literature!");
                  break;
              case '1984':
                  alert("1984 is a dystopian classic!");
                  break;
              default:
                  alert("Wow! " + favoriteBook + " sounds like a great book!");
          }
  
          switch(favoriteMovie.toLowerCase()) {
              case 'the shawshank redemption':
                  alert("The Shawshank Redemption is a classic!");
                  break;
              case 'the godfather':
                  alert("The Godfather is an iconic film!");
                  break;
              case 'the dark knight':
                  alert("The Dark Knight is an epic superhero movie!");
                  break;
              case 'pulp fiction':
                  alert("Pulp Fiction is a masterpiece of cinema!");
                  break;
              case 'forrest gump':
                  alert("Forrest Gump is a heartwarming classic!");
                  break;
              default:
                  alert("I haven't seen " + favoriteMovie + ". I'll have to check it out!");
          }
  
          // Do something fun with the user's information
          console.log("User's favorite hobby is: " + hobby);
          console.log("User's favorite book is: " + favoriteBook);
          console.log("User's favorite movie is: " + favoriteMovie);
          console.log("User information array: " + userInformation);
      }
  
      // Call the function when the page loads
      window.onload = function() {
          handleQuiz();
      };
  </script> ` 
      const style = Page.getStyleObject('purplecrayon')
      const page = new Page({navbar: _navbardef, title: "home", style: style, body: htmlContent}) 
       return rawHtmlResponse (page.render())
       
    }
    case "/gallary": { 
      const htmlContent = `<div class="container mt-5">
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" alt="Warriors Logo" src="https://picsum.photos/200">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Vivint Arena" src="../Images/IMG_1215.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Jazz Game" src="../Images/IMG_1424.JPEG">
          </div>
      </div>
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" alt="Hello Abraham Lincoln" src="../Images/IMG_1207.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Sunrise UTAH" src="../Images/IMG_1301.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Museum" src="../Images/IMG_1292.JPEG">
          </div>
      </div>
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" alt="BYU Museum" src="../Images/IMG_1282.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Anmials" src="../Images/IMG_1285.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="My Friends" src="../Images/IMG_1280.JPEG">
          </div>
      </div>
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" alt="PPG Paints Arena" src="../Images/IMG_2586.JPG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="5X Champions" src="../Images/IMG_2585.JPG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="Sid The Kid" src="../Images/IMG_2584.JPG">
          </div>
      </div>
      <p>In the past few years, I got to explore the great State of Salt Lake City,UT.
          During my 2 week trip, I had the pleasure to stay with my friends Josh, and Kaley
          and his family. I got to take pictures of Salt Lake City and you can explore Utah
          with me. Take a look and see!!!. 
      </p2>
      <div class="row">
          <div class="col-md-4">
              <img class="img-fluid" alt="SLC, UT" src="../Images/IMG_1351.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="SLC, UT" src="../Images/IMG_1363.JPEG">
          </div>
          <div class="col-md-4">
              <img class="img-fluid" alt="SLC, UT" src="../Images/IMG_1372.JPEG">
          </div>
      </div>
  </div> ` 
      const page = new Page({navbar: _navbardef, title: "home", body: htmlContent}) 
       return rawHtmlResponse (page.render())
       
    }
    case "/": { 
      const htmlContent = ` ` 
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
