var React = require('react');
var ReactDOM = require('react-dom');




var Navbar = React.createClass({
  render: function() {
    return (
      <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar navbar-inverse">
            <div className="container-fluid navbar-inner">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".nav-collapse" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="#">
                  <span className="c4mred">Code </span>
                  <span className="c4mblue">For Fort Lauderdale</span>
                </a>
              </div>


              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Home</a></li>
                  <li><a href="#meetup">Events</a></li>
                  <li><a href="#contact">Contact</a></li>
                  {/* Read about Bootstrap dropdowns at http://twitter.github.com/bootstrap/javascript.html#dropdowns */}
                  <li className="dropdown" id="menu1">
                    <a href="#menu1" className="dropdown-toggle" data-toggle="dropdown">Resources <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="https://github.com/CodeForFtL/codeofconduct">Code of Conduct</a></li>
                      <li><a href="https://www.facebook.com/CodeForFTL">Our Facebook Page</a></li>
                      <li><a href="https://groups.google.com/forum/#!forum/code-for-ftl">Our Google Groups Forum</a></li>
                      <li><a href="http://www.meetup.com/Code-for-FTL/">Our Gatherings on Meetup</a></li>
                      <li><a href="https://twitter.com/CodeforFTL">Our Twitter Account (@CodeforFTL)</a></li>
                      <li><a href="https://github.com/CodeForFtL">Our Code on GitHub</a></li>
                      <li className="divider" />
                      <li><a href="https://twitter.com/search?q=%23cfabrigade">#cfabrigade - National Tweets</a></li>
                    </ul>
                  </li>
                  <li className="dropdown" id="menu2">
                    <a href="#menu2" className="dropdown-toggle" data-toggle="dropdown">Projects <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="http://codeforftl.org/OpenDataPolicy/">Open Data Policy</a></li>
                      <li><a href="http://codeforftl.org/BrowardElectedOfficials/">Broward Elected Officials Map</a></li>
                      <li><a href="http://localwiki.net/ftl/"> Fort Lauderdale Wiki</a></li>
                      <li><a href="https://docs.google.com/forms/d/1v8uPF2KKyAby6vbjVdSUpJmlwk6ku8rSy-bZvERwl8s/viewform">Open Data Survey</a></li>
                      <li><a href="http://codeforftl.org/ftlviz/">Fort Lauderdale Traffic Visualization</a></li>
                      <li><a href="https://github.com/CodeForFtL/CodeForFtL.github.io">CodeForFTL.org</a></li>
                      <li><a href="http://click-that-hood.com/?city=fort-lauderdale"> Click That Hood</a></li>
                      <li><a href="http://codeforftl.org/Budget-Visualization/"> Budget Visualization </a></li>
                    </ul>
                  </li>
                  <li className="dropdown" id="aboutUs">
                    <a href="#aboutUs" className="dropdown-toggle" data-toggle="dropdown">About Us <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li><a href="#mission">Our Mission</a></li>
                      <li><a href="#coreTeam">Core Team Members</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>{/*/.container-fluid */}
          </nav>
        </div>
      </div>
    );
  }
});






var Carousel = React.createClass({
  render() {
    return (
      <div className="carousel slide">
        <div className="carousel-inner">
          <div className="item active">
            <img src="images/carousel/ftlbeach1a.jpg" alt="Fort Lauderdale Beach | Fort Lauderdale" />
            {/* image by Mary Lesh */}
            <div className="container">
              <div className="carousel-caption">
                <h1>We Are Code For Fort Lauderdale</h1>
                <p className="lead">Come join idea-makers, designers, citizen leaders, developers, and data geeks who volunteer to help the Fort Lauderdale government and civic orgs adopt open web technologies.</p>
                <a className="btn btn-large btn-primary" href="http://www.meetup.com/Code-for-FTL/">Stop By Our
                  Meetups</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});




var DetailLinks = React.createClass({
  render() {
    return (
      <div className="row">

        <div className="col-xs-4">
          <img src="images/captain.png" alt="CfA Brigade Captain" />
          <h2>Come To Our Meetups</h2>
          <p>A casual <a href="http://www.meetup.com/Code-for-FTL/">meetup</a>, usually weekly, meeting in Fort Lauderdale.</p>
          <p><a href="#meetup"><button className="btn btn-default">View details »</button></a></p>
        </div>



        <div className="col-xs-4">
          <img src="images/community.png" alt="Community" />
          <h2>Join Online Discussions</h2>
          <p><a href="https://groups.google.com/forum/#!forum/code-for-ftl"> An open conversation online</a> about what we're doing now and what's next.</p>
          <p><a href="#groups"><button className="btn btn-default">View details »</button></a></p>
        </div>


        {/* /.col-xs-4 */}
        <div className="col-xs-4">
          <img src="images/cfa_logo_greyscale.png" alt="Code for America" />
          <h2>See Our Inspiration</h2>
          <p><a href="http://codeforamerica.org/">Code for America</a> is the organization that helped inspire many of us that we can change our City.</p>
          <p><a href="#cfa"><button className="btn btn-default">View details »</button></a></p>
        </div>
        {/* /.span4 */}
      </div>
    );
  }
});


var WorksInProgress = React.createClass({
  render() {
    return (
      <div className="featurette">
        <div className="pull-left">
          <img className="featurette-image pull-left" src="images/noun_project_756_citizen.png" alt="Citizen" />
        </div>
        <div className="pull-right">
          <h2 className="featurette-heading">Works In Progress. <br />
            <span className="muted">Some Of Our 2015 Projects.</span></h2>
          <p className="lead" />
          <ul className="lead">
            <li><a href="http://localwiki.net/ftl/">Fort Lauderdale Wiki</a> - a wiki for Fort Lauderdalians by Fort Lauderdalians</li>
            <li><a href="http://codeforftl.org/rep-ftl/">Rep Ft. Lauderdale</a> - Search your representatives and how to contact them</li>
            <li><a href="https://docs.google.com/forms/d/1v8uPF2KKyAby6vbjVdSUpJmlwk6ku8rSy-bZvERwl8s/viewform">Open Data Survey</a> - Our project to find out what candidates support open datasurvey</li>
            <li><a href="https://github.com/CodeForFtL/CodeForFtL.github.io">CodeForFtL.org</a> - Get the source code on our <a href="https://github.com/codeforftl">GitHub</a></li>
          </ul>
          <h2 className="featurette-heading">Past Projects</h2>
          <p className="lead" />
          <ul className="lead">
            <li><a href="http://click-that-hood.com/?city=fort-lauderdale">Click That Hood</a> - Put your geographic knowledge of Fort Lauderdale to the test</li>
            <li><a href="http://codeforftl.org/Budget-Visualization/">Budget Visualization</a> - Visualize the budget with <a href="http://d3js.org/">d3.js</a> and <a href="https://github.com/d3/d3-plugins/tree/master/sankey">sankey.js</a></li>
          </ul>
        </div>
      </div>
    );
  }
});



var WeNeedYourHelp = React.createClass({
  render() {
    return (
      <div className="featurette">
        <a href="http://brigade.codeforamerica.org/">
          <img id="cfa" className="featurette-image pull-right" src="images/cfa_brigade_logo.png" alt="Code for America Brigade" />
        </a>
        <h2 className="featurette-heading">Want To Help Your City? <span className="muted">Good, we could use your help.</span></h2>
        <p className="lead">We are a
        <a href="http://brigade.codeforamerica.org/"> Code for America Brigade</a>
          , which means we're volunteers that contribute our talents toward improving the way our local
          governments and community organizations use the web. Brigade is about action and you're here because you are
          someone who takes action.
          <a href="http://brigade.codeforamerica.org/pages/activities"> See what kind of things brigades do</a>,
            or watch the <a href="http://codeforamerica.org/2012/03/08/jennifer-pahlka-at-ted-video/">
            inspirational TED talk given by Jennifer Pahlka, the founder of Code
            for America.
          </a>
        </p>
      </div>
    );
  }
});





var MeetUp = React.createClass({
  render() {
    return (

      <div className="featurette">
        <a href="http://www.meetup.com/Code-for-FTL/">
          <img id="meetup" className="featurette-image pull-left" src="images/meetup.jpg" alt="Meetup.com" />
        </a>

        <h2 className="featurette-heading">We Meet Often. <span className="muted">Come Join Us.</span></h2>

        <p className="lead">Check out our <a href="http://www.meetup.com/Code-for-FTL/">Meetup</a> and<a href="https://www.facebook.com/CodeForFTL"> Facebook</a> to learn more about events and projects.
        </p>

        <div className="calendar">
          <iframe src="https://www.google.com/calendar/embed?src=codeforftl%40gmail.com&ctz=America/New_York" style={{border: 0}} width={800} height={600} frameBorder={0} scrolling="no" />
        </div>
      </div>
    );
  }
});


var WeDiscussOnline = React.createClass({
  render() {
    return (

      <div className="featurette" id="contact">
        <a href="https://groups.google.com/forum/#!forum/code-for-ftl">
          <img id="groups" className="featurette-image pull-right" src="images/google_groups.png" alt="Google Groups" />
        </a>

        <h2 className="featurette-heading">We Discuss Things Online. <span className="muted">Join and Introduce Yourself.</span></h2>

        <p className="lead">Can't make it to a meetup? No problem. We collaborate on projects, ask for help, and post wins to 
		our <a href="https://codeforftl.slack.com">Code for Fort Lauderdale Slack Channel</a> where you can get new posts in email and reply. 
		We welcome anyone to e-mail <a href="mailto:codeforftl@gmail.com"> CodeForFTL at gmail.com</a> to join our slack channel... you might 
		just see something you're interested in helping with.
        </p>

        <p className="lead">Follow us on Twitter!</p>
        <iframe id="twitter-widget-0" scrolling="no" frameBorder={0} allowTransparency="true" allowFullScreen="true" className="twitter-timeline twitter-timeline-rendered" style={{position: 'absolute', visibility: 'hidden', display: 'block', width: 0, height: 0, padding: 0, border: 'none'}} /><a className="twitter-timeline twitter-timeline-error" width={300} height={500} href="https://twitter.com/codeforftl" data-widget-id={510246756148187136} data-twitter-extracted-i145878403541545244="true">
          Tweets by @codeforftl
        </a>
      </div>
    );
  }
});


var MoreHelp = React.createClass({
  render() {
    return (
      <div className="featurette">
        <h2 className="featurette-heading">Want Even More Info? <span className="muted">Contact Us.</span></h2>
        <p className="lead">Our email address is (<a href="mailto:codeforftl@gmail.com">CodeForFTL at gmail.com</a>) and we want to hear from you!</p>
      </div>
    );
  }
});


var OurMission = React.createClass({
  render() {
    return (
      <div id='mission' className="featurette">
        <h2 className="featurette-heading">Our Mission</h2>
        <p className="lead">To create a more open and transparent Fort Lauderdale that caters to its citizens and visitors.</p>
      </div>
    );
  }
});



var CoreTeam = React.createClass({
  render() {
    return (
      <div id='coreTeam' className="featurette">
        <h2 className="featurette-heading">Core Team Members</h2>
        <div>
          <div className="text-center">
            <img src="images/robDavis.png" className="img-circle" alt="Picture of Rob Davis" />
            <h3>Rob Davis</h3>
            <p className="lead">Rob works at the intersection of technology, civic engagement, and open government. Find him at the beach surfing waves while not binging on House of Cards.</p>
          </div>
          <div className="text-center">
            <img src="images/quyenTran.png" className="img-circle" alt="Picture of Quyen Tran" />
            <h3>Quyen Tran</h3>
            <p className="lead">Quyen is a software developer and tester. He is surrounded by the Internet of Things during the day and does web development at night. If it can be put on a map, then Quyen puts it on the map!</p>
          </div>
        </div>
        <div className="text-center">
          <img src="https://en.gravatar.com/userimage/26278455/a9b6f5d6e49c2f63c5ebabe77d473097.jpg?size=200" className="img-circle" alt="Picture of Ryan Gates" />
          <h3>Ryan Gates</h3>
          <p className="lead">Ryan develops websites using the C#/.NET stack during the day, while filling his nights and weekends with civic hacking. He contributed the city of <a href="http://click-that-hood.com/?city=fort-lauderdale">Fort Lauderdale</a> to <a href="http://click-that-hood.com/">Click that 'hood</a> and created a <a href="codeforftl.org/Budget-Visualization/">budget visualization</a> using <a href="http://d3js.org/">d3.js</a>. Ryan looks forward to meeting others interested and working to make Fort Lauderdale more open and transparent.</p>
        </div>
      </div>
    );
  }
});



var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="pull-right"><a href="#">Back to top</a></p>
          <p>...People trying to make Fort Lauderdale even better...</p>
            <p>Built and Maintained by Code for Fort Lauderdale. Site Design Based on <a href="http://twitter.github.com/bootstrap">Bootstrap</a>, Some Images Provided by
            <a href="http://thenounproject.com"> The
              Noun Project</a> and <a href="http://aerostylaz.deviantart.com/gallery/?q=miami">Aerostylaz</a>.</p>
        </div>
      </footer>
    );
  }
});



var Page = React.createClass({
  render() {
    return (
      <div>

        <Navbar />
        <Carousel />


        <div className="container marketing clearleft" style={{padding:0}}>
          <DetailLinks />
          <hr className="featurette-divider"/>

          <WorksInProgress/>
          <hr className="featurette-divider"/>

          <WeNeedYourHelp/>
          <hr className="featurette-divider"/>

          <MeetUp/>
          <hr className="featurette-divider"/>

          <WeDiscussOnline/>
          <hr className="featurette-divider"/>

          <MoreHelp/>
          <hr className="featurette-divider"/>

          <OurMission/>
          <hr className="featurette-divider"/>

          <CoreTeam/>
          <hr className="featurette-divider"/>

          <Footer/>
        </div>
      </div>
    )
  }
});



module.exports = Page;