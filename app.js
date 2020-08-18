
class Header extends React.Component {

    scrollDown = () => {
        const targetLoc = window.innerHeight + 5;
        const scrollOpts = {
            top: targetLoc,
            left: 0,
            behavior: 'smooth',
        };
        window.scrollTo(scrollOpts);
    };

    render = () => {
        return (
            <header className="center">
                <div className="text">
                    <h4>
                        {" "}
                        Hey There, I'm Hannah<span className="period">
                            .
                        </span>{" "}
                    </h4>
                    <h6> Software Engineer | Los Angeles</h6>
                </div>
                <img
                    className="learn-more"
                    onClick={this.scrollDown}
                    src="https://img.icons8.com/wired/64/ffffff/down.png"
                />
            </header>
        );
    };
}

class Footer extends React.Component {
  render = () => {
    return <footer>
      @2020 Hannah Livnat
    </footer>
  }
}

class WorkSample extends React.Component {
  render = () => {
    const { sample , i } = this.props;
    return <div className="card" key={i}>
      <div className="card-image waves-effect waves-block waves-light">
        { (sample.visualtype === "img") ?
            <img src={sample.img} alt="work-sample-image"></img>
          :
            <video><source src={sample.img} type="video/mp4"></source></video>
        }
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"><i className="material-icons right toggle-btn">keyboard_arrow_up</i></span>
        <p><a className="card-link" href={sample.githublink} target="_blank">View Code</a></p>
        <p><a className="card-link" href={sample.deploylink} target="_blank">View Live App</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"><i className="material-icons right toggle-btn">keyboard_arrow_down
        </i></span>
        <p>{sample.description}</p>
        <ul className="cardul">
          {sample.techStack.map((tech, index) => {
            return <li key={index} className="center"> {tech} </li>
          })}
        </ul>
      </div>
    </div>
  }
}

class WritingSample extends React.Component {
  render = () => {
    const { sample, i  } = this.props;
    return <div className="card writing-sample-card" key={i}>
      <div className="card-content">
        <h4>{sample.name}</h4>
        <p>{sample.description}</p>
        <p><a className="card-link writing-link" href={sample.articlelink} target="_blank">View Article</a></p>
      </div>
    </div>
  }
}

class TechWritingSamples extends React.Component {
  render = () => {
    const { writingsamples } = this.props
    return <div className="writingheader center" id="writingsection" >
      <h2 className="viewwritingh2">Technical Articles</h2>
      <div className="writingsamples">
        {
          writingsamples.map((sample, i) => {
            return <WritingSample sample={sample} i = {i} />
          })

        }
      </div>
    </div>
  }
}

class WorkSamples extends React.Component {
  render = () => {
    const { samples } = this.props
    return <div className="worksamples">
        {
          samples.map((sample, i ) => {
            return <WorkSample sample={sample} i = {i}/>
          })
        
        }
    </div>
  }
}

class AboutMe extends React.Component {
  render = () => {
    return <div className="about-me" id="aboutMe">
      <div className="about-me-description">
        <h4> About Me </h4>
        <p>I'm Hannah, a Software Engineer motivated by the potential for systemic innovation within technology. I love learning and solving tough challenges, and I'm skilled in MERN, MEAN, and Ruby/React.
        I'm currently working with Hack for Los Angeles, a Civic Tech Organization, on <a href="https://www.311-data.org/" target="_blank">311 Data</a>, and I'm always interested in working on products and services that make our world better.</p>
      </div>
      <div className="connect-icons">
        <p><a href="https://github.com/hannahlivnat" target="_blank" className="icon-button">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/hannah-livnat/" target="_blank" className="icon-button">
        LinkedIn
        </a></p>
        <p><a href="mailto:hannahlivnat@gmail.com">Email</a></p>
        <p><a href="https://docs.google.com/document/d/1xSRm-doSGdCZL6TNkbtThkgDKfl-YvMtUMfm-lZPj3Q/export?format=pdf">Resume</a></p>
      </div>
    </div>
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
        visualtype: "img",
        githublink: "https://github.com/hackforla/website",
        deploylink: "https://www.hackforla.org/project-meetings"
      }, 
      {
        name: "Hack For LA Project Meetings Page",
        description: "Front End Development for Hack for LA Website: This is a larger page that I completed over a period of two weeks while simultaneously completing my portfolio site and final project for General Assembly. I built the page from scratch referencing a figma file, created several Sass mixins to manage the individual placement of every arrow in relation to images on the guide page, and made the page responsive.",
        techStack: ["Sass", "CSS", "Bourbon", "Jekyll", "Liquid", "Docker"],
        visualtype: "img",
        img: "https://res.cloudinary.com/huagrzciy/image/upload/e_auto_saturation/v1595888553/project%20screenshots/Screen_Shot_2020-07-27_at_3.19.53_PM_bc6uaq.png",
        githublink: "https://github.com/hackforla/website ",
        deploylink: "https://www.hackforla.org/guide-pages/survey-reporting-dashboard-guide"
      },
      {
        name: "Accessibility Features on BETA 311 Data Application",
        description: "Added tab accessibility to all pages of application using the focus-visible polyfill and Bulma CSS customizable variables. Tested cross-browser functionality using Lambda Tunnel",
        techStack: ["Sass", "Bulma CSS", "React", "Docker"],
        visualtype: "img",
        img: "https://res.cloudinary.com/huagrzciy/image/upload/v1596936057/311-Data_Neighborhood_Engagement_Tool_vdumtk.gif",
        githublink: "https://github.com/hannahlivnat/311-data",
        deploylink: "https://www.311-data.org/"
      },
      {
        name: "Component Library",
        description: "Using React, Ruby on Rails, and PostgreSQL, I built an application that gives developers a platform to save commonly used components and share them with other developers, my version of 'Pinterest' for developers. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "React", "Ruby", "Ruby on Rails", "Sass", "PostgreSQL"],
        visualtype: "img",
        img: "https://res.cloudinary.com/huagrzciy/image/upload/v1595369806/Screen_Shot_2020-07-21_at_3.16.24_PM_ihbipm.png",
        githublink: "https://github.com/hannahlivnat/ComponentLibrary",
        deploylink: "https://hl-component-library.herokuapp.com/"
      },
      {
        name: "CommonPlace",
        description: "Used the MEAN stack and worked with a small group of developers to create a full-stack app intended to provide a digital commonplace for quote and knowledge lovers. Collaborated using Trello and Github. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "Angularjs", "Expressjs", "Sass", "Materialize CSS", "MongoDB", "Mongoose", "bcrypt", "dotenv", "express-session"],
        visualtype: "img",
        img: "../assets/commonplace.png",
        githublink: "https://github.com/tsabz/furry-octo-giggle",
        deploylink: "https://commonplace333.herokuapp.com/"
      },
      {
        name: "SimplyBudget",
        description: "Used the MEEN stack to create a full-stack CRUD app for budgeting personal monthly income and expenses. SimplyBudget is an answer to the crowd of complicated budgeting apps which make the process of budgeting overwhelming and over-categorized. Rather than tracking each minute category, from your laundry fees to your 'fun money', this app helps you track three main categories: your income, your flex expenses, and your firm expenses. To demo - username: testuser | password: test",
        techStack: ["JavaScript", "EJS", "Expressjs", "Sass", "MongoDB", "Mongoose", "bcrypt", "dotenv", "passport", "express-session"],
        visualtype: "img",
        img: "../assets/simplybudget.gif",
        githublink: "https://github.com/hannahlivnat/simplebudget",
        deploylink: "https://simplybudget.herokuapp.com/budgetdetails"
      }
    ],
    writingsamples: [
      {
        name: "Setting Up Your Collections for Mongoose Populate in a CRUD App",
        description: "This article walks through the process of setting up Mongoose populate. It's featured in the Medium publication Better Programming.",
        articlelink: "https://medium.com/better-programming/setting-up-your-collections-for-mongoose-populate-in-a-crud-app-3df9bba3fe7a",
      },
      {
        name: "Why You Keep Getting 'Null' After Running setState() in React",
        description: "Article featured in JavaScript in Plain English publication on the sometimes asynchronous nature of React's setState",
        articlelink: "https://medium.com/javascript-in-plain-english/why-you-keep-getting-null-after-running-setstate-in-react-299e1835bd92"
      }
    ]
  }
  
  render = () => {
    return <div className="containerdiv">
      <Header />
      <AboutMe />
      <WorkSamples samples={this.state.worksamples} />
      <TechWritingSamples writingsamples={this.state.writingsamples}/>
      <Footer />
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector("main"));