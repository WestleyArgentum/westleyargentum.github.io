## Westley Argentum Hennigh
##### westleyargentum@gmail.com  |  [github](https://github.com/westleyargentum) | [blog!](http://blog.westleyargentum.com)


### Summary

I love when creative and artistic work demands crazy engineering.

At university I worked in close teams on independent games, built from scratch in C++. My 3rd year team and I were lucky enough to have our game Solstice win awards in the Tokyo Game Show's Sense of Wonder Night 2011 and the 2012 hóPLAY festival in Bilbao, Spain.

I then worked in a small team on architecting and implementing a distributed computation engine. Our goal was to support data scientists and developers working on interactive simulation and visualization projects.

From there I went to Hacker School, where I focused on getting better at data science and journalism. I created libraries and visualizations using campaign finance data, and have since gotten some of my work published.


### Programming Skills

- __Proficient with:__ C++ (4+ years), C (2+ years), Julia (3+ years), JavaScript (2+ years), Python (1 year)
 
- __Some experience with:__ Objective C, Java, x86 Assembly, GLSL, SQL

- __Tools:__  Node.js, D3.js, AWS, Vagrant, Docker, etcd, Bash, Git, SVN, iOS SDK, GCC, STL, OpenGL, Visual Studio, Kinect SDK


### Projects

#### [Mandelbrot](http://forio.com/products/mandelbrot)
Mandelbrot is a distributed computing engine that runs Julia code (and exposes bindings for other languages). I was responsible for the laying out most of the initial architecture and implementing many of the base systems. I then continued to work on in a small team towards making the system better, faster, and more fault tolerant.

Working on Mandelbrot has given me experience with many things:

 - Writing a component based, event driven engine in Julia
 - Running untrusted user code in safe ways using Docker
 - Writing RESTful interfaces with Node.js
 - Coordinating server activity with a custom protocol over TCP
 - Working with AWS services and APIs (Ec2, DynamoDB, ELB)

#### [Campaign Finance Game](http://influencegame.io)
A prototype of a fantasy football-like game where players build teams out of lobbyists and compete in “seasons“ of Congress.

At Hacker School I assembled data for the 112th and 113th Congresses, built a model for scoring actions on bills, and developed a simple but playable prototype. Players can build teams out of interest groups, explore bills those groups took positions on, and compare the effectiveness of their teams lobbying efforts vs others.

#### [Julia Studio](https://github.com/forio/julia-studio)
Julia Studio is an open source IDE for the Julia language. After implementing several rough prototypes and plugins, we decided to fork Qt Creator, strip out everything nonessential, and build in tools to help people iterate quickly while writing Julia.

I was the primary developer on Julia Studio during prototyping and for the first few releases. We then expanded the team and I shifted focus to other projects, but I still helped with OSX support and some community outreach.

#### [GeneticAlgorithms.jl](https://github.com/forio/GeneticAlgorithms.jl)
GeneticAlgorithms.jl is a lightweight framework that simplifies the process of creating genetic algorithms and running them in parallel. The idea was to break a GA into a set of independent functions. The framework could then use multiple processors to run different pieces of the GA at the same time.

#### [Lumberjack.jl](https://github.com/forio/Lumberjack.jl)
Lumberjack.jl is a logging library for Julia [motivated by more than just server-side needs](http://forio.com/blog/lumberjack-talking-about-logging-in-models). It's designed to be extremely modular and therefore flexible enough to be used in modeling code as well as in the backend.

I ended up writing most of the code for Lumberjack, but a teammate helped conduct an extensive review of other libraries and the design decisions they made.

#### [GitHub.jl](https://github.com/WestleyArgentum/GitHub.jl)
GitHub.jl is a personal project that wraps the GitHub API and makes it easier to call from Julia.

#### [Solstice](http://westleyargentum.github.io/solstice-website/)
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

##### [Congress Is a Game, and We Know Which Groups Are Winning](http://blog.westleyargentum.com/blog/2015/02/02/congress-is-a-game/)
A piece about identifying special interests with the most influence in Congress. Originally a blog post, later published by [Dataconomy](http://dataconomy.com/congress-is-a-game-and-we-have-the-data-to-show-whos-winning/).

##### [Using Genetic Algorithms to Break Things](http://blog.westleyargentum.com/blog/2014/05/18/using-genetic-algorithms-to-break-things/)
A piece about embracing the stochastic nature of genetic algorithms and using them to find problems with models and simulations.


### Organizations

I co-founded the [Bay Area Julia Users](http://www.meetup.com/Bay-Area-Julia-Users) meetup with some co-workers, and it quickly became the biggest Julia meetup in the world. We scheduled presentations once a month or so and had a wide range of speakers present interesting projects done with the language.


### Education

In 2012 I graduated with a BS in Computer Science in Real Time Interactive Simulations and a minor in Math from DigiPen Institute of Technology.

I also attended [Hacker School](https://www.hackerschool.com/) in the summer of 2014.
