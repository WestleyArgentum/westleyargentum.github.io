---
layout: post
title: "Congress is a Game, and We Have the Data to Show Who’s Winning"
date: 2015-02-02 10:00:51 -0500
comments: false
categories: [Politics, Congress]
---

Most approaches to measuring the influence that different interest groups have in Congress favor quantitative metrics like money spent lobbying vs money saved in tax breaks. But while that kind of data is great at shining a spotlight on an individual corporation, it does little to illuminate the playing field and reveal how much influence groups have relative to one another.

In order to do that, we should look at how closely events in Congress align with the goals of different special interests, especially when there’s contention. When a bill that an interest supports makes it all the way to a vote and passes, it’s indicative of them having more influence than the bill’s opponents. Conversely, when a bill that an interest opposes comes up for a vote and passes, it indicates that they don’t have as much influence as they might like. Played out over many bills and years in Congress, trends emerge.

This is a seemingly straightforward idea, but it quickly leads to complex issues. It can be extremely non-trivial, for instance, to determine whether a group supports or opposes a bill -- its position may hinge on the wording of a single line, which may be revised many times before a vote.

Fortunately, the organization [MapLight](http://maplight.org/) has gone to extensive lengths to catalog interest group support and opposition to versions of bills as they pass through Congress. And, by associating organizations using a taxonomy created by the [Center for Responsive Politics](https://www.opensecrets.org/), they provide us data that’s nicely broken up along economic and ideological lines. This makes it easier to both establish “rivalries” between groups frequently on opposing sides of issues and, based on events in Congress, to ascertain which of the competing interests seem to have more influence.

<iframe src="/visualizations/congress-is-a-game/" width="100%" height="705" scrolling="no"></iframe>

Obviously the data deals with groups in a relatively coarse way, nevertheless, it’s clear that extremely wealthy and largely conservative interests were juggernauts in the 113th Congress. The most diametrically opposed groups were the Chambers of Commerce and consumer advocates, but not once, when a bill the two disagreed on came up for a vote, did Congress vote with consumer advocates. And the stories are similarly bleak for others that came up against the Chambers. Only once in twenty-eight recorded instances did Congress vote with labor unions against the Chambers of Commerce (when House Republicans voted against [HR 4414](http://maplight.org/us-congress/bill/113-hr-4414/3424702/total-contributions), meant to clarify Expatriate Health Coverage specified in the Affordable Care Act).

Amongst more ideologically focused groups the situation is much the same. Conservative Republican interests were very often at odds with both health and welfare and human rights advocates, but Congress stood firmly with conservatives. They were almost twice as likely to vote against the interests of human rights advocates, and more than twice as likely to vote against health & welfare policy organizations.

The force driving this correlation between support by certain groups and favorable votes in Congress isn't incalculable or hard to guess at. It's money. The groups above that come out on top control massive amounts of political campaign spending relative to their opponents. The conservative Republican interests in conflict with health and welfare policy groups spent an average of [26 times as much](https://github.com/WestleyArgentum/congressional-influence-model) on candidates that won seats in the 113th Congress. They outspent human rights advocates by even more -- [300 times as much](https://github.com/WestleyArgentum/congressional-influence-model) on average. The Chambers of Commerce, meanwhile, has spent more on lobbying than any other group [every year since 1999](https://www.opensecrets.org/lobby/top.php).

It’s easy to be overwhelmed by the complex nature of influence in Congress, but we have the data necessary to understand what’s going on. We know which bills different interest groups favor, and therefore which interests are in contention. We also know which groups are winning because we can look at how representatives vote. And it's clear that those with money have the attention of our lawmakers. While we may not be able to look at any individual vote and cry "quid pro quo", the consistency in the broader picture makes what's really happening undeniable.

-------

If you're interested in hacking on civic data with [Julia](http://julialang.org/), check out the source for [this visualization](https://github.com/WestleyArgentum/congressional-influence-model), as well as [OpenSecrets.jl](https://github.com/WestleyArgentum/OpenSecrets.jl) and [SunlightAPIs.jl](https://github.com/WestleyArgentum/SunlightAPIs.jl)
