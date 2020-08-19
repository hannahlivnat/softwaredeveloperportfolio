
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

class WorkSample extends React.Component {
    viewProjectDescription = () => {
        const contentdiv = document.querySelector(`#content-${this.props.i}`);
        contentdiv.classList.remove("notHovered");
        contentdiv.classList.add("hovered");
    };

    viewProjectPreview = () => {
        const contentdiv = document.querySelector(`#content-${this.props.i}`);
        contentdiv.classList.remove("hovered");
        contentdiv.classList.add("notHovered");
    };

    render = () => {
        const { sample, i } = this.props;
        return (
            <div className="sample" key={i}>
                <div className="imageHolder">
                    <img src={sample.img} alt="work sample image" />
                </div>
                <div className="content notHovered" id={`content-${i}`}>
                    <h4 className="hideOnHover">{sample.name}</h4>
                    { (sample.requiresAuthentication) ?
                         <p className="demoInfo hideOnHover">Authentication : testuser / testpassword</p>
                      :
                    null }
                    <div className="description">
                        <p className="description-text">{sample.description}</p>
                        <p onClick={this.viewProjectPreview} className="viewOverview">View Overview</p>
                    </div>
                    <div className="links hideOnHover">
                        <p>
                            <a href={sample.githublink}> Source Code </a>
                        </p>
                        <p>
                            <a href={sample.deploylink}> Live App </a>
                        </p>
                        <p onClick={this.viewProjectDescription}>
                            View Details
                        </p>
                    </div>
                </div>
            </div>
        );
    };
}

class WorkSamples extends React.Component {
  render = () => {
    const { samples } = this.props
    return <div className="worksamples">
        {
          samples.map((sample, i ) => {
            return  <WorkSample sample={sample} i = {i}/>
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
                name: "Hack For LA | Guide Page",
                description:
                    "Worked off figma file developed by UI/UX designer to build out large guide page for Hack for L.A. website from scratch using Jekyll, Liquid, and Sass and working within a Docker container. This was one page out of several guide pages developed for the site, and I developed 7+ reusable Sass mixins for arrow positioning relative to sibling images on future guide pages.",
                techStack: [
                    "Sass",
                    "CSS",
                    "Bourbon",
                    "Jekyll",
                    "Liquid",
                    "Docker",
                ],
                visualtype: "img",
                requiresAuthentication: false,
                img:
                    "https://res.cloudinary.com/huagrzciy/image/upload/e_auto_saturation/v1595888553/project%20screenshots/Screen_Shot_2020-07-27_at_3.19.53_PM_bc6uaq.png",
                githublink: "https://github.com/hackforla/website ",
                deploylink:
                    "https://www.hackforla.org/guide-pages/survey-reporting-dashboard-guide",
            },
            {
                name: "311 Data | Accessibility Features",
                description:
                    "I have been working on the Front End Development team within Hack for Los Angeles’ 311 Data Application to develop further accessibility and error handling in the application using React and Sass. In the sample shown, I researched and implemented polyfill :focus-visible across the site to add tab accessibility. Through this project, I’ve worked with a cross-disciplinary team of product managers, ui/ux designers, back-end and front-end developers, and qa testers using GitHub projects and weekly stands.",
                techStack: ["Sass", "Bulma CSS", "React", "Docker"],
                visualtype: "img",
                requiresAuthentication: false,
                img:
                    "https://res.cloudinary.com/huagrzciy/image/upload/v1596936057/311-Data_Neighborhood_Engagement_Tool_vdumtk.gif",
                githublink: "https://github.com/hannahlivnat/311-data",
                deploylink: "https://www.311-data.org/",
            },
            {
                name: "ComponentLibrary | React Rails App",
                description:
                    "ComponentLibrary is an application for developers to save and share reusable components. Built with React, Ruby on Rails, and PostgreSQL and deployed with Heroku using managed data services. On the back-end, I wrote a function to evaluate frequency of posted tags to generate a dynamic ‘hot list’ of top 5 tags used in posts. On the front-end, I use React-Router for dynamic, client-side routing.",
                techStack: [
                    "JavaScript",
                    "React",
                    "Ruby",
                    "Ruby on Rails",
                    "Sass",
                    "PostgreSQL",
                ],
                visualtype: "img",
                requiresAuthentication: true,
                img:
                    "https://res.cloudinary.com/huagrzciy/image/upload/v1595369806/Screen_Shot_2020-07-21_at_3.16.24_PM_ihbipm.png",
                githublink: "https://github.com/hannahlivnat/ComponentLibrary",
                deploylink: "https://hl-component-library.herokuapp.com/",
            },
            {
                name: "Hack For LA | Project Meetings Page",
                description:
                    "Took existing project meetings page, which was out of compliance with style guide, and worked with UI/UX designer and project manager to update layout and responsiveness through Sass, Jekyll, and Liquid. Worked locally inside a Docker container. Developed several iterations of mobile site through code reviews with other front-end developers and ui/ux designers.",
                techStack: [
                    "Sass",
                    "CSS",
                    "Bourbon",
                    "Jekyll",
                    "Liquid",
                    "Docker",
                ],
                img: "../assets/hackforla.png",
                visualtype: "img",
                requiresAuthentication: false,
                githublink: "https://github.com/hackforla/website",
                deploylink: "https://www.hackforla.org/project-meetings",
            },
            {
                name: "CommonPlace | MEAN Stack",
                description:
                    "Worked remotely with two developers to build MEAN stack application that provides a digital commonplace for quote and knowledge lovers. ",
                techStack: [
                    "JavaScript",
                    "Angularjs",
                    "Expressjs",
                    "Sass",
                    "Materialize CSS",
                    "MongoDB",
                    "Mongoose",
                    "bcrypt",
                    "dotenv",
                    "express-session",
                ],
                visualtype: "img",
                requiresAuthentication: true,
                img: "../assets/commonplace.png",
                githublink: "https://github.com/tsabz/furry-octo-giggle",
                deploylink: "https://commonplace333.herokuapp.com/",
            },
            {
                name: "SimplyBudget | MEEN Stack",
                description:
                    "MEEN Stack Budgeting App which uses Mongoose population to join the user collection with documents from the budget detail and budget plan collections dated within the current month, then pass the user into express-session’s req.user after authentication with passport. On the front-end, I've written calculations in JavaScript which determine the percentage of the expected budget which current expenses or income has reached in the current month and display this data dynamically in graph and chart form.",
                techStack: [
                    "JavaScript",
                    "EJS",
                    "Expressjs",
                    "Sass",
                    "MongoDB",
                    "Mongoose",
                    "bcrypt",
                    "dotenv",
                    "passport",
                    "express-session",
                ],
                requiresAuthentication: true,
                visualtype: "img",
                img: "../assets/simplybudget.gif",
                githublink: "https://github.com/hannahlivnat/simplebudget",
                deploylink: "https://simplybudget.herokuapp.com/budgetdetails",
            },
        ],
        writingsamples: [
            {
                name:
                    "Setting Up Your Collections for Mongoose Populate in a CRUD App",
                description:
                    "This article walks through the process of setting up Mongoose populate. It's featured in the Medium publication Better Programming.",
                articlelink:
                    "https://medium.com/better-programming/setting-up-your-collections-for-mongoose-populate-in-a-crud-app-3df9bba3fe7a",
            },
            {
                name:
                    "Why You Keep Getting 'Null' After Running setState() in React",
                description:
                    "Article featured in JavaScript in Plain English publication on the sometimes asynchronous nature of React's setState",
                articlelink:
                    "https://medium.com/javascript-in-plain-english/why-you-keep-getting-null-after-running-setstate-in-react-299e1835bd92",
            },
        ],
    };

    render = () => {
        return (
            <div className="containerdiv">
                <Header />
                <AboutMe />
                <WorkSamples samples={this.state.worksamples} />
                <TechWritingSamples
                    writingsamples={this.state.writingsamples}
                />
                <Footer />
            </div>
        );
    };
}

ReactDOM.render(<App />, document.querySelector("main"));