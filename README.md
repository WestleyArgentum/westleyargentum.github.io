## Westley Argentum Hennigh-Palermo
##### westleyargentum@gmail.com  |  [github](https://github.com/westleyargentum) | [blog!](http://blog.westleyargentum.com)


### Summary

I love when creative and artistic work demands crazy engineering.

At university I worked in close teams on independent games, built from scratch in C++. My 3rd year team and I were lucky enough to have our game [Solstice](http://blog.westleyargentum.com/solstice-website) win awards in the Tokyo Game Show's Sense of Wonder Night 2011 and the 2012 hóPLAY festival in Bilbao, Spain.

I then worked in a small team on architecting and implementing a distributed computation engine. Our goal was to support data scientists and developers working on interactive simulation and visualization projects.

From there I went to the [Recurse Center](https://www.recurse.com), where I focused on getting better at data science and journalism. I created libraries and visualizations using campaign finance data, and had some of my work published.

Now I work at the [BuzzFeed Open Lab](https://www.buzzfeed.com/openlab) building tools for journalists.


### Programming Skills

- __Proficient with:__ C++ (4+ years), C (2+ years), Julia (3+ years), JavaScript (4+ years), Python (1+ years)
 
- __Some experience with:__ Objective C, Java, x86 Assembly, GLSL, SQL

- __Tools:__  Node.js, D3.js, AWS, Docker, Vagrant, etcd, Bash, Git, SVN, iOS SDK, GCC, STL, OpenGL, Visual Studio, Kinect SDK


### Selected Projects

#### [BuzzBot](https://github.com/buzzfeed-openlab/buzzbot) (2016, BuzzFeed)
BuzzBot is an experiment, designed to help journalists connect with people on the ground at events. It acts as a Facebook Messenger bot plus a dashboard that journalists can use to send messages to groups of users and view aggregated responses.

I built BuzzBot at the Open Lab, and BuzzFeed News deployed it during the 2016 RNC and DNC. You can read more about our [initial plans](https://www.buzzfeed.com/mathonan/meet-buzzbot) for BuzzBot, but stay tuned because there's more to come.

#### [Shit VCs Say](https://itunes.apple.com/us/app/s**t-vcs-say/id1090534404) (2016, BuzzFeed)
Shit VCs Say is an iOS quiz game that takes a critical look at some of the weirder propaganda coming out of Silicon Valley.

#### [RSS Puppy](https://github.com/buzzfeed-openlab/rss-puppy) (2015, BuzzFeed)
RSS Puppy is a simple but useful tool designed to monitor RSS feeds in bulk and generate machine-friendly notifications when new entries appear. I built it as part of a larger project to help journalists automate some of the tedious parts of watching and processing document dumps.

#### [Congressional Influence Game](http://influencegame.io) (2014-2016, Independent + BuzzFeed)
A prototype of a fantasy football-like game where players build teams out of lobbyists and compete in “seasons“ of Congress.

At the Recurse Center I assembled data for the 112th and 113th Congresses, built a model for scoring actions on bills, and developed a simple but playable prototype. At BuzzFeed I've begun building out a backend and infrastructure so that we can release the game for real.

#### [Mandelbrot](http://forio.com/products/mandelbrot) (2013-2014, Forio)
Mandelbrot is a distributed computing engine that runs Julia code (and exposes bindings for other languages). I was responsible for the laying out most of the initial architecture and implementing many of the base systems. I then continued to work on in a small team towards making the system better, faster, and more fault tolerant.

Working on Mandelbrot has given me experience with many things:

 - Writing a component based, event driven engine in Julia
 - Running untrusted user code in safe ways using Docker
 - Writing RESTful interfaces with Node.js
 - Coordinating server activity with a custom protocol over TCP
 - Working with AWS services and APIs (Ec2, DynamoDB, ELB)

#### [Julia Studio](https://github.com/forio/julia-studio) (2012-2014, Forio)
Julia Studio is an open source IDE for the Julia language. After implementing several rough prototypes and plugins, we decided to fork Qt Creator, strip out everything nonessential, and build in tools to help people iterate quickly while writing Julia.

I was the primary developer on Julia Studio during prototyping and for the first few releases. We then expanded the team and I shifted focus to other projects, but I still helped with OSX support and some community outreach.

#### [GeneticAlgorithms.jl](https://github.com/forio/GeneticAlgorithms.jl) (2014, Indpendent)
GeneticAlgorithms.jl is a lightweight framework that simplifies the process of creating genetic algorithms and running them in parallel. The idea was to break a GA into a set of independent functions. The framework could then use multiple processors to run different pieces of the GA at the same time.

#### [Solstice](http://westleyargentum.github.io/solstice-website/) (2010-2012, DigiPen)
Solstice is a music-driven exploration game that uses the Kinect. Players fly around a storybook world that changes as they collect fragments of the sun. A small group of friends and I worked on the game for a couple of years during school, and we were recognized at several events:

 - Best Kinect Game - hóPLAY (2012)
 - Honorable Mention - indiePub: Independent Propeller Awards (2012)
 - Presenter - Tokyo Game Show: Sense of Wonder Night (2011) 
 - Game of the year, runner up - DigiPen Game Awards (2011)

My contributions included:

 - Work on a component based engine used by our team and the developers of [Nitronic Rush](https://nitronic-rush.com). Highlights included C++ Expression Templates, a spline interpolation system, and a threaded job manager.
 - A 3d physics engine that supported collision detection and resolution of simple shapes like spheres and boxes with height maps and arbitrary mesh objects. It also generated efficient partitioning structures for use in broad and narrow phases of collision detection.
 - Many of the game specific subsystems and logic. For instance: Kinect support, entity and object logic, and some of the seasonal effects.


### Contributions

I love open source! If you're curious, you can check out code I've written for the [Julia language](https://github.com/julialang/julia), [Requests.jl](https://github.com/JuliaWeb/Requests.jl), [JSON.jl](https://github.com/JuliaLang/JSON.jl), and many of the above projects.


### Writing

My work at BuzzFeed is at [https://www.buzzfeed.com/westleyargentum](https://www.buzzfeed.com/westleyargentum)

##### [Automated Journalism That Works With Journalists](https://www.buzzfeed.com/westleyargentum/automated-journalism-that-works-with-journalists)
We should be making bots that collaborate.

##### [RSS Puppy](https://opensource.com/life/16/2/rss-puppy-lightweight-open-source-rss-reader)
Published by OpenSource.com

##### [Congress Is a Game, and We Know Which Groups Are Winning](http://blog.westleyargentum.com/blog/2015/02/02/congress-is-a-game/)
A piece about identifying special interests with the most influence in Congress. Originally a blog post, later published by [Dataconomy](http://dataconomy.com/congress-is-a-game-and-we-have-the-data-to-show-whos-winning/).

##### [Using Genetic Algorithms to Break Things](http://blog.westleyargentum.com/blog/2014/05/18/using-genetic-algorithms-to-break-things/)
A piece about embracing the stochastic nature of genetic algorithms and using them to find problems with models and simulations.


### Talks + Panels

##### Hacks / Hackers 2016: ["Games + Journalism"](https://youtu.be/CDmsD6DGsUM?t=24m21s)

##### NICAR 2016: ["Drones, scrapers and fantasy football for campaign finance"](https://www.ire.org/events-and-training/event/2198/2446/)

##### JuliaCon 2015: ["Who optimizes the optimizers: Can genetic algorithms help us to optimize the layout of LLVM IR passes used to compile Julia code?"](https://youtu.be/Qito5AGSv4s)


### Organizations

I co-founded the [Bay Area Julia Users](http://www.meetup.com/Bay-Area-Julia-Users) meetup with some co-workers, and it quickly became the biggest Julia meetup in the world. We scheduled presentations once a month or so and had a wide range of speakers present interesting projects done with the language.


### Education

In 2012 I graduated with a BS in Computer Science in Real Time Interactive Simulations and a minor in Math from DigiPen Institute of Technology.

I also attended the [Recurse Center](https://www.recurse.com) in the summer of 2014.


### More Projects

#### [3D Printable Mobiles, Coasters, and Other Pieces of Art](https://github.com/WestleyArgentum/3d-models)
I've built a variety of mobiles that you can print and then assemble using yarn and other basic materials. I also sometimes design coasters and other simple objects just for fun.

#### [Interactive Video Bot](https://github.com/buzzfeed-openlab/interactive-video-bot) (2016, BuzzFeed)
A bot for making Facebook live streams interactive. It will watch for comments on a facebook live video and fire events when it sees "trigger" phrases. We used it at BuzzFeed to make a puppy treat dispenser that people could trigger while they watched a live stream of shelter puppies.

#### [Unwelcome Bot](https://github.com/buzzfeed-openlab/unwelcome-bot) (2016, BuzzFeed)
A configurable twitter bot that should be used responsibly. Unwelcome Bot will monitor twitter and interject in conversations. It knows how to track words and phrases, it can watch for geolocated tweets, and it has several options for filtering tweets based on things they do or do not contain.

#### [LLVM Pass Optimizer](https://github.com/WestleyArgentum/pass-optimizer) (2015, Independent)
A genetic algorithm desiged to optimize the layout of LLVM IR passes used to compile Julia code. It uses an interesting crossover function called Synapsing Variable Length Crossover.

#### [Lumberjack.jl](https://github.com/forio/Lumberjack.jl) (2014, Forio)
Lumberjack.jl is a logging library for Julia [motivated by more than just server-side needs](http://forio.com/blog/lumberjack-talking-about-logging-in-models). It's designed to be extremely modular and therefore flexible enough to be used in modeling code as well as in the backend.

#### [GitHub.jl](https://github.com/JuliaWeb/GitHub.jl) (2014, Independent)
GitHub.jl started as a personal project that wrapped the GitHub API and made it easier to call from Julia. The community around it grew, and eventually it was absorbed into the larger JuliaWeb organization.
