(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9038],{2177:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return t(1997)}])},3136:function(e,a,t){"use strict";var i=t(5893),s=t(7294),n=t(1664),r=t.n(n),o=t(1163);a.Z=function(e){var a=e.title,t=e.fullPath,n=e.image,l=(0,o.useRouter)();return(0,i.jsx)("header",{className:"pages-header bg-img valign parallaxie",style:{backgroundImage:"url(".concat(n||"/assets/img/loans/disclosure.jpg",")")},"data-overlay-dark":"5",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"cont text-center",children:[(0,i.jsx)("h2",{children:a}),(0,i.jsx)("div",{className:"path",children:t.map((function(e,a){return(0,i.jsxs)(s.Fragment,{children:[(0,i.jsx)(r(),{href:e.url,children:(0,i.jsx)("a",{className:l.pathname==e.url?"active":"",children:e.name})}),a!=t.length-1?(0,i.jsx)("span",{children:"/"}):""]},e.id)}))})]})})})})})}},843:function(e,a,t){"use strict";var i=t(5893),s=t(7294),n=t(678),r=t(1690),o=t(9008),l=t.n(o),c=t(2806);a.Z=function(e){var a=e.children,t=e.footerClass,o=s.useRef(null),m=s.useRef(null);return s.useEffect((function(){var e=o.current,a=m.current;window.pageYOffset>300?e.classList.add("nav-scroll"):e.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?(e.classList.add("nav-scroll"),a.setAttribute("src",c.Q1)):(e.classList.remove("nav-scroll"),a.setAttribute("src",c.E8))}))}),[o]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l(),{children:(0,i.jsx)("link",{rel:"stylesheet",href:"/assets/css/style-light.css"})}),(0,i.jsx)(n.Z,{navbarRef:o,logoRef:m}),a,(0,i.jsx)(r.Z,{classText:t})]})}},1997:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var i=t(5893),s=t(7294),n=t(843),r=t(3136),o=t(4727),l=t(3038),c=t(5121),m=t(6547),d=t(1664),u=t.n(d),g=function(){var e=(0,s.useState)("mlos"),a=e[0],t=e[1],n=(0,s.useState)(""),r=n[0],d=n[1],g=(0,s.useState)([]),h=g[0],p=g[1],f=(0,s.useState)([]),v=f[0],j=f[1],y=(0,s.useState)(null),x=y[0],w=y[1],C=(0,s.useState)(!1),b=C[0],I=C[1];(0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)((function(){var e,t;return(0,l.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),"mlos"!==a?[3,2]:[4,c.Z.get("https://1smtg.com:220/getAllUsers/msjmortgage.com/mlo/0")];case 1:return e=i.sent(),p(e.data),j(e.data),[3,3];case 2:M(),i.label=3;case 3:return[3,5];case 4:return t=i.sent(),console.error("Error fetching data:",t),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,s.useEffect)((function(){!function(){var e=h.filter((function(e){var a=e.name?e.name.toLowerCase():"",t=e.nmls_id?e.nmls_id.toLowerCase():"",i=e.title?e.title.toLowerCase():"";return a.includes(r.toLowerCase())||t.includes(r.toLowerCase())||i.includes(r.toLowerCase())}));j(e)}()}),[r,h]);var N=function(){var e=(0,o.Z)((function(e){return(0,l.__generator)(this,(function(a){return t(e),d(""),[2]}))}));return function(a){return e.apply(this,arguments)}}(),M=function(){p(m.B),j(m.B)},_=function(){var e=(0,o.Z)((function(e){var a,t;return(0,l.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,c.Z.get("https://1smtg.com:220/getUserById/".concat(e))];case 1:return a=i.sent(),w(a.data[0]),[3,3];case 2:return t=i.sent(),console.error("Error fetching user details:",t),[3,3];case 3:return[2]}}))}));return function(a){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){var e=function(){window.pageYOffset>500?setTimeout((function(){I(!0)}),10):I(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),(0,i.jsxs)("section",{className:"portfolio section-padding",children:[(0,i.jsx)("div",{className:" ".concat(b?"sticky-filter":""),children:(0,i.jsx)("div",{className:"filtering col-sm-12 fadeInUp","data-wow-delay":".3s",style:{backgroundImage:"url(/assets/img/line-pattern1.png)"},children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:"filter text-center bg-img bg-repeat col-sm-10",children:[(0,i.jsx)("span",{onClick:function(){return N("mlos")},className:"mlos"===a?"active":"",children:"MLO\u2018s"}),(0,i.jsx)("span",{onClick:function(){return N("support")},className:"support"===a?"active":"",children:"Support"})]}),(0,i.jsx)("div",{className:"col-sm-2",children:(0,i.jsx)("div",{className:"search-bar",children:(0,i.jsx)("input",{type:"text",placeholder:"Search...",value:r,onChange:function(e){return d(e.target.value)}})})})]})})}),(0,i.jsx)("div",{className:"",children:(0,i.jsx)("div",{className:"row",children:v.map((function(e){return(0,i.jsx)("div",{className:"items ".concat(e.filterClass," col-sm-3"),onClick:function(){return a=e.id,void _(a);var a},children:(0,i.jsx)("a",{href:"/profile/".concat(encodeURIComponent(e.id)),children:(0,i.jsxs)("div",{className:"card mt-10",children:[e.picture?(0,i.jsx)("img",{src:"https://1smtg.com/picture.php?name=".concat(e.picture),className:"our-team-page",alt:"member",loading:"lazy"}):(0,i.jsx)(u(),{href:"/profile/".concat(encodeURIComponent(e.url)),children:(0,i.jsx)("img",{src:e.image,className:"our-team-page",alt:"member",loading:"lazy"})}),(0,i.jsxs)("div",{className:"card-body",children:[(0,i.jsx)("h6",{children:e.name}),(0,i.jsx)("p",{className:"card-text",children:e.title}),(0,i.jsx)("p",{className:"card-text",children:e.cel}),"mlos"===a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{className:"card-text",children:["NMLS#: ",e.nmls_id]}),(0,i.jsxs)("p",{className:"card-text",children:["Cell: ",e.phone]}),(0,i.jsxs)("p",{className:"card-text",children:["State: ",e.state]})]})]})]})})},e.id)}))})}),x&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"User Details"}),(0,i.jsxs)("p",{children:["User Name: ",x.name]}),(0,i.jsxs)("p",{children:["User Title: ",x.title]}),(0,i.jsxs)("p",{children:["Email: ",x.cell]})]})]})},h=function(){return s.useEffect((function(){document.querySelector("body").classList.add("index3")}),[]),(0,i.jsxs)(n.Z,{children:[(0,i.jsx)(r.Z,{title:"Our Teams",fullPath:[{id:1,name:"home",url:"/"},{id:2,name:"Our Team",url:"/team"}]}),(0,i.jsx)(g,{})]})}},1163:function(e,a,t){e.exports=t(387)},6547:function(e){"use strict";e.exports=JSON.parse('{"B":[{"id":1,"image":"/assets/mlo-img/Omar.jpg","name":"Omar Khamisa","url":"OmarKhamisa","title":"CEO/MLO/CMA","cel":"Cell: (510) 648-5535","email":"omar@msjmortgage.com","phone":"5106485535","emp_email":"omar@msjmortgage.com","ecard":"https://1smtg.com/ecard/omar","filterClass":"support"},{"id":2,"image":"/assets/mlo-img/Jorge.jpg","name":"Jorge Lopez","url":"JorgeLopez","title":"Manager","cel":"Cell: ","email":"","phone":"2092983964","emp_email":"","filterClass":"support"},{"id":3,"image":"/assets/mlo-img/Cesar.jpeg","hed":"Hello I am ","name":"Cesar Amezola Cardenas","url":"CesarAmezolaCardenas","title":"Recruiter Manager","email":"cesar@msjmortgage.com","cel":"Cell: (209) 420-1521","phone":"2094201521","filterClass":"support"},{"id":4,"image":"/assets/mlo-img/Alfonso.jpeg","hed":"Hello I am ","name":"Alfonso Cardenas","url":"AlfonsoCardenas","title":"Sr Recruiter","emp_des":"I\'m from Kansas city, MO. I have a culinary arts degree. I love helping people. I have been a recruiter with Mission San Jose Mortgage going on 3 years. Feel free to send me a email or give me a call at mention #, I will gladly assist with any questions you may have.","email":"alfonso@msjmortgage.com","cel":"Cell: (209) 425-1707","phone":"2094251707","filterClass":"support"},{"id":5,"image":"/assets/mlo-img/Jonathan.jpeg","hed":"Hello I am ","name":"Jonathan Estrada","url":"JonathanEstrada","title":"Recruiter","email":"jonathan.e@msjmortgage.com","cel":"Cell: (209) 237-1303","phone":"2092371303","filterClass":"support"},{"id":6,"image":"/assets/mlo-img/Sam.jpg","hed":"Hello I am ","name":"Sam Rehan","url":"SamRehan","title":"Recruiter","email":"sammsj@msjmortgage.com","cel":"Cell: (209) 699-5625","phone":"2096995625","filterClass":"support"},{"id":7,"image":"/assets/mlo-img/Owais.jpg","hed":"Hello I am ","name":"Muhammad Owais","url":"MuhammadOwais","emp_des":"As a recruiter, I specialize in communication and relationship building, driven by a passion for connecting talented individuals with fulfilling career opportunities. My strengths include sourcing candidates from various channels and assessing their suitability for diverse roles using analytical skills. I prioritize transparency and compliance in recruitment to establish mutually beneficial connections. Ultimately, my aim is to foster organizational growth and facilitate individual career advancement in dynamic and competitive settings.","title":"Recruiter","email":"m.owais@msjmortgage.com","cel":"Cell: (209) 273-5217","phone":"2092735217","filterClass":"support"},{"id":8,"image":"/assets/mlo-img/Rohan.jpeg","hed":"Hello I am ","name":"Rohaan Naveed","url":"RohaanNaveed","emp_des":"As a proactive recruiter at Mission San Jose Mortgage, I am committed to sourcing top-notch talent and fostering robust teams. My focus lies in identifying promising individuals and forging connections that propel both candidates and our company towards their respective objectives. Utilizing inventive sourcing approaches and a profound grasp of our organizational culture and goals, I am dedicated to advancing the recruitment process with efficacy and distinction.","title":"Recruiter","email":"rohaan@msjmortgage.com","cel":"Cell: (209) 661-7653","phone":"2096617653","filterClass":"support"},{"id":9,"image":"/assets/mlo-img/Maheen.jpeg","hed":"Hello I am ","emp_des":"Dynamic and results-oriented recruiter at Mission San Jose Mortgage, dedicated to sourcing top talent and building strong teams. With a keen eye for talent and a passion for connecting individuals with opportunities that align with their goals, I thrive on creating mutually beneficial matches between candidates and our company. Leveraging innovative sourcing strategies and a deep understanding of our organization\'s culture and objectives, I am committed to driving the recruitment process forward with efficiency and excellence.","name":"Maheen Mangi","url":"MaheenMangi","title":"Recruiter","email":"maheen@msjmortgage.com","cel":"Cell: (209) 237-1578","phone":"2092371578","filterClass":"support"},{"id":10,"image":"/assets/mlo-img/Mantshah.jpeg","hed":"Hello I am ","emp_des":"As a recruiter, I am a skilled communicator and relationship builder with a passion for connecting talented individuals with exciting career opportunities. I thrive on the challenge of sourcing candidates through diverse channels and utilizing my analytical skills to assess their suitability for various roles. I ensure that the recruitment process is transparent and compliant with all relevant regulations. My ultimate aim is to foster mutually beneficial connections, driving organizational growth and facilitating career advancement for individuals within dynamic and competitive landscapes.","name":"Mantashah Binte Irfan","url":"MantashahBinteIrfan","title":"Recruiter","email":"mantashah@msjmortgage.com","cel":"Cell: (209) 420-1522","phone":"2094201522","filterClass":"support"},{"id":11,"image":"/assets/mlo-img/Muzammil.jpeg","hed":"Hello I am ","name":"Muzammil Askari","url":"MuzammilAskari","emp_des":"I hold the position of Pricing and Marketing. In my role, I meticulously curate rate sheets from various lenders, ensuring accurate and up-to-date information. This enables our loan officers to effortlessly identify favorable rates for our clients. Additionally, I am responsible for verifying the rates provided to ensure our loan officers have access to reliable data.","emp_des1":"Moreover, I am deeply involved in the marketing efforts of our company, focusing on promoting the services offered by Mission San Jose Mortgage and supporting the individual loan officers within our firm. Through strategic marketing initiatives, I aim to enhance our brand visibility and attract potential clients while providing valuable support to our dedicated team of loan officers.","title":"Pricing","email":"muzammil@msjmortgage.com","cel":"Cell: (209) 651-0030","phone":"2096510030","filterClass":"support"},{"id":13,"image":"/assets/mlo-img/SameerA.jpeg","hed":"Hello I am ","name":"Sameer Ali","url":"SameerAli","des":"As a seasoned developer and IT enthusiast, I bring a wealth of experience and expertise to the dynamic world of technology. With a passion for crafting innovative solutions, my journey in the tech realm has been marked by a commitment to excellence and a thirst for continuous learning. My proficiency spans across a diverse array of programming languages, frameworks, and cutting-edge technologies, allowing me to tackle complex challenges with finesse.","title":"Tech Support","email":"sameer@msjmortgage.com","cel":"Cell: (209) 273-5202","phone":"2092735202","filterClass":"support"},{"id":15,"image":"/assets/mlo-img/Ali.jpeg","hed":"Hello I am ","name":"Ali Hamza","url":"AliHamza","des":"Help MLO","title":"Concierge","email":"alihamza@msjmortgage.com","cel":"Cell: (209) 420-1511","phone":"2094201511","filterClass":"support"},{"id":16,"image":"/assets/mlo-img/Noemi.jpeg","hed":"Hello I am ","name":"Noemi Nunez","url":"NoemiNunez","title":"Processor Manager","email":"noemi@msjmortgage.com","cel":"Cell: (951) 564-8293","phone":"9515648293","filterClass":"support"},{"id":17,"image":"/assets/mlo-img/Elia.jpeg","hed":"Hello I am ","name":"Elia Delgado","url":"EliaDelgado","title":"Processor","email":"elia@msjmortgage.com","cel":"Cell: (209) 237-1586","phone":"2092371586","filterClass":"support"},{"id":18,"image":"/assets/mlo-img/Lubaba.jpeg","hed":"Hello I am ","emp_des":"Work closely with senior management and HR to understand the hiring needs for loan officers within the organization. Develop and implement effective recruitment strategies to attract qualified loan officers.","emp_des1":"Actively source and screen potential candidates for loan officer positions. Review resumes, conduct initial screenings, and assess candidates\' qualifications, experience, and fit for the organization.Build and maintain relationships with candidates throughout the recruitment process. Provide regular updates, feedback, and support to candidates, addressing any questions or concerns they may have about the position or the organization. Coordinate and conduct interviews with candidates to further evaluate their suitability for the role.","name":"Lubaba Aziz","url":"LubabaAziz","title":"Jr Processor","email":"lubaba@msjmortgage.com","cel":"Cell: (209) 297-8963","phone":"2092978963","filterClass":"support"}]}')}},function(e){e.O(0,[1664,7697,5121,3771,9774,2888,179],(function(){return a=2177,e(e.s=a);var a}));var a=e.O();_N_E=a}]);