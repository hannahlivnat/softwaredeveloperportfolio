class Footer extends React.Component {
  render = () => {
    return <footer>
      @2020 Hannah Livnat
    </footer>
  }
}

class WorkSample extends React.Component {
  render = () => {
    const { sample } = this.props;
    return <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img src={sample.img} alt={sample.name} />
        </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4"><i className="material-icons right">more_vert</i></span>
            <p><a href={sample.githublink} target="_blank">View Code</a></p>
            <p><a href={sample.deploylink} target="_blank">View Live App</a></p>
          </div>
          <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
          <p>{sample.description}</p>
            <ul className="cardul">
            {sample.techStack.map((tech, index) => {
              return <li key={index} className = "center"> {tech} </li>
            })}
            </ul>
          </div>
        </div>
  }
}

class WorkSamples extends React.Component {
  render = () => {
    const { samples } = this.props
    return <div className="workheader center" id="worksection" >
      <h2 className="viewworkh2">View My Work</h2>
      <p className="viewworkp">The work samples below include site pages developed for the <a href="https://www.hackforla.org/" target="_blank">Hack for Los Angeles</a> website and projects 
      completed for General Assembly. To demo any project using authentication, you can use the following login:<br/>
        <span>username:</span> testuser | <span>password:</span> test </p>
      <div className="worksamples">
        {
          samples.map((sample) => {
            return <WorkSample sample={sample}/>
          })
        
        }
    </div>
  </div>
  }
}

class AboutMe extends React.Component {
  render = () => {
    return <div className="about-me">
      <div className="code-snippet-holder">
        <div className="code-snippet">
          <p className="outer"> const introduceHannah = {"{"} </p>
          <p className="tab">aBitAboutMe : "I'm a Software Engineer / Educator fascinated by the intersection between technology and public policy. I deeply believe in the power of code to transform and improve systems, and I love to nerd out about how digital tools can improve access to education, policy, and public services.", </p>
          <p className="tab"> lookingForNewRole : true, </p>
          <p className="tab"> speciality : "Full-Stack Software Engineer", </p>
          <p className="tab"> education : "General Assembly Software Engineering Immersive Program and M.A. from Loyola Marymount University", </p>
          <p className="tab"> tech : ["JavaScript", "React", "Node.js" "Expressjs", "Ejs", "Ruby", "Ruby on Rails", "CSS", "Sass", "MongoDB", "PostgreSQL"], </p>
          <p className="outer">{"};"}</p>
        </div>
      </div>
      <div className="lets-connect center">
        <h4> Let's Connect </h4>
        <div className="connect-icons">
          <p><a href="https://github.com/hannahlivnat" target="_blank"><img src="https://img.icons8.com/ios/50/000000/github.png" /></a></p>
          <p><a href="https://www.linkedin.com/in/hannah-livnat/" target="_blank"><img src="https://img.icons8.com/fluent/50/000000/linkedin-circled.png" /></a></p>
          <p><a href="https://twitter.com/hannah_livnat" target="_blank"><img src="https://img.icons8.com/wired/50/000000/twitter-circled.png" /></a></p>
        </div>
      </div>
    </div>
  }
}

class Nav extends React.Component {
  render = () => {
    return <nav className="transparent">
      <div className="nav-wrapper">
        {/*<a href="#mobile-demo" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>*/}
        <ul className="nav-items right">
          <li><a href="#worksection">My Work</a></li>
          <li><a href="https://docs.google.com/document/d/1xSRm-doSGdCZL6TNkbtThkgDKfl-YvMtUMfm-lZPj3Q/export?format=pdf">Download Resume</a></li>
          <li><a href="mailto:hannahlivnat@gmail.com">Email Me</a></li>
        </ul>
      </div>
    </nav>
  }
}

class Header extends React.Component {
  render = () => {
    return <header className="center">
      <div className="text">
        <h4> Hey There, I'm Hannah<span className="period">.</span> </h4>
        <h6> Software Engineer | Los Angeles</h6>
      </div>
    </header>
  }
}

class App extends React.Component {
  state = {
    worksamples: [
      {
        name: "Hack For LA Project Meetings Page",
        description: "Front End Development for Hack for LA Website: Collaborate with a UI/ UX Designer through Figma and updated front-end of website pages.",
        techStack: ["Sass", "CSS", "Bourbon", "Jekyll", "Liquid", "Docker"],
        img: "../assets/hackforla.png",
        githublink: "https://github.com/hackforla/website",
        deploylink: "https://www.hackforla.org/project-meetings"
      }, 
      {
        name: "Hack For LA Project Meetings Page",
        description: "Front End Development for Hack for LA Website: This is a larger page that I completed over a period of two weeks while simultaneously completing my portfolio site and final project for General Assembly. I built the page from scratch referencing a figma file, created several Sass mixins to manage the individual placement of every arrow in relation to images on the guide page, and made the page responsive.",
        techStack: ["Sass", "CSS", "Bourbon", "Jekyll", "Liquid", "Docker"],
        img: "https://res.cloudinary.com/huagrzciy/image/upload/e_auto_saturation/v1595888553/project%20screenshots/Screen_Shot_2020-07-27_at_3.19.53_PM_bc6uaq.png",
        githublink: "https://github.com/hackforla/website ",
        deploylink: "https://www.hackforla.org/guide-pages/survey-reporting-dashboard-guide"
      },
      {
        name: "Component Library",
        description: "Using React, Ruby on Rails, and PostgreSQL, I built an application that gives developers a platform to save commonly used components and share them with other developers, my version of 'Pinterest' for developers. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "React", "Ruby", "Ruby on Rails", "Sass", "PostgreSQL"],
        img: "https://res.cloudinary.com/huagrzciy/image/upload/v1595369806/Screen_Shot_2020-07-21_at_3.16.24_PM_ihbipm.png",
        githublink: "https://github.com/hannahlivnat/ComponentLibrary",
        deploylink: "https://hl-component-library.herokuapp.com/"
      },
      {
        name: "CommonPlace",
        description: "Used the MEAN stack and worked with a small group of developers to create a full-stack app intended to provide a digital commonplace for quote and knowledge lovers. Collaborated using Trello and Github. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "Angularjs", "Expressjs", "Sass", "Materialize CSS", "MongoDB", "Mongoose", "bcrypt", "dotenv", "express-session"],
        img: "../assets/commonplace.png",
        githublink: "https://github.com/tsabz/furry-octo-giggle",
        deploylink: "https://commonplace333.herokuapp.com/"
      },
      {
        name: "SimplyBudget",
        description: "Used the MEEN stack to create a full-stack CRUD app for budgeting personal monthly income and expenses. SimplyBudget is an answer to the crowd of complicated budgeting apps which make the process of budgeting overwhelming and over-categorized. Rather than tracking each minute category, from your laundry fees to your 'fun money', this app helps you track three main categories: your income, your flex expenses, and your firm expenses. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "EJS", "Expressjs", "Sass", "MongoDB", "Mongoose", "bcrypt", "dotenv", "passport", "express-session"],
        img: "../assets/simplybudget.gif",
        githublink: "https://github.com/hannahlivnat/simplebudget",
        deploylink: "https://simplybudget.herokuapp.com/budgetdetails"
      }
    ]
  }
  
  render = () => {
    return <div className="containerdiv">
      <Header />
      <Nav />
      {/* mobile nav links */}
      <ul className="sidenav" id="mobile-demo">
        <li><a href="#worksection">My Work</a></li>
        <li><a href="https://docs.google.com/document/d/1xSRm-doSGdCZL6TNkbtThkgDKfl-YvMtUMfm-lZPj3Q/export?format=pdf">Download Resume</a></li>
        <li><a href="mailto:hannahlivnat@gmail.com">Email Me</a></li>
      </ul>
      <AboutMe />
      <WorkSamples samples={this.state.worksamples} />
      <Footer />
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
)
