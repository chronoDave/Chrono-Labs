![Doombox header](/assets/images/doombox/banner.png)

<caption>Doombox v1.1.0-beta</caption>

<info id="doombox" />

 - [Introduction](#introduction)
 - [Concept](#concept)
 - [Version 0.7.0-alpha](#version-0.7.0-alpha)
 - [Version 1.x.x](#version-1.x.x)
 - [Version 2.x.x](#version-2.x.x)
 - [Conclusion](#conclusion)
 - [Extra](#extra)

Doombox is a music player designed and built to support a large, personal music collection. It's free, [open source](https://github.com/chronoDave/Doombox) and high customizable. It's built with [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/) and supports both Windows and Mac operating systems.

You can download it for free on [GitHub](https://github.com/chronoDave/Doombox/releases).

#### Introduction

Before I started working on Doombox, I used a program called [foobar2000](https://www.foobar2000.org/) as my music player. It's a great piece of software but as my collection grew, the UX experience diminished. This, combined with the fact that foobar2000 doesn't work as well on Mac, made me consider making Doombox.

Now, creating an application is by no means easy (especially with little experience), so to make sure it was even possible to create something like foobar2000, I created a simple proof-of-concept (PoC) application using just Electron.

![Doombox proof of concept comparison](/assets/images/doombox/comparison.jpg)

<caption>PoC comparison. [foobar2000] [Doombox PoC]</caption>

![Doombox proof of concept close-up](/assets/images/doombox/poc.jpg)

<caption>PoC close-up</caption>

The PoC includes the following:

 - Allow the user to select a folder containing music
 - Scan mp3 files within the selected folder for metadata
 - Insert the found metadata into a database
 - Group the found songs into albums
 - Display the grouped albums
 - The content is responsive

With the PoC working, the next step would be designing the UI.

#### Concept

As Doombox was meant to replace foobar2000, designing the initial version of the UI was relatively straightforward. When improving an already existing UI, I ask myself the following questions:

 - Which elements work?
 - Why do these elements so well, and do these elements affect other elements?
 - Which elements don't work?
 - Why don't these elements work, and do these elements affect other elements?
 - If I create and / or modify an element, will it fit in with the other elements?

As foobar2000 already had a lot of things I _did_ like, all I needed to do was change the things I _didn't_ like.

One of the things I didn't like was the relatively large player at the bottom of the screen. As I didn't use the drag-to-scroll feature often, it made sense to make the player smaller. Moving it into the sidebar creates more vertical space, allowing for more albums on screen.

![foorbar2000 ui](/assets/images/doombox/foobar.jpg)

<caption>Foobar UI</caption>

![Doombox ui concept](/assets/images/doombox/mockup.jpg)

<caption>Doombox UI concept</caption>

#### Version 0.7.0-alpha

![Doombox 0.7.0-alpha](/assets/images/doombox/alpha.png)

<caption>Doombox 0.7.0-alpha</caption>

The first official release version of Doombox is [0.7.0-alpha](https://github.com/chronoDave/Doombox/releases/tag/v0.7.0-alpha), which is more a prototype than an actual release. During development (and especially after release), I realized this version would have to be rewritten from the ground up for two reasons:

**The UI did not work as well as I thought it would**

The mockups were made at 1920 x 1080 resolution, but in reality I only used smaller resolutions. As the design wasn't made for smaller resolutions, it didn't work as well as I hoped.

**The code structure wouldn't allow me to iterate easily**

I wrote the code as-is, without much thinking about scaling, so I quickly ran into issues when trying to add new features.

To solve these problems, I scrapped most of the code from 0.7.0-alpha and started working on 1.x.x. It would have a better code structure and more support for smaller screens

#### Version 1.x.x

![Doombox 1.x.x](/assets/images/doombox/1.x.x.jpg)

<caption>Doombox 1.x.x</caption>

 - [1.0.0-alpha](https://github.com/chronoDave/Doombox/releases/tag/v1.0.0-alpha)
 - [1.1.0-alpha](https://github.com/chronoDave/Doombox/releases/tag/1.1.0-alpha)
 - [1.1.0-beta](https://github.com/chronoDave/Doombox/releases/tag/1.1.0-beta)

The first publicly usable release of Doombox. 1.x.x has more features and better UX compared to 0.7.0. Although this release is far better than 0.7.0, it still has a couple problems.

##### Performance

Arguably one of the hardest problems to solve, performance is something I have struggled with for quite some time. As my music collection grows, Doombox' performance decreases. The struggles with performance can be broken down in two distinct parts, **storage** and **rendering**

**Storage**

Storing things (like metadata) is quite simple in Doombox. Music gets scanned for metadata, which gets stored in a database. However, things get tricky when you're scanning 10k+ songs. Suddenly, that 16ms scan seems to take forever. When dealing with a large quantity of items like this, every millisecond counts.

With no (proper) way to benchmark the performance of the database, I spent a lot of time figuring out how to make Doombox faster. I quickly realized that for the next release benchmarks would be mandatory if I wanted more control over Doombox' performance.

**Rendering**

Rendering is by far biggest bottleneck. JavaScript is fast but the DOM is not. Trying to render several hundred complex components is asking for performance issues. I've tried rendering _all_ items using [virtualization](https://css-tricks.com/rendering-lists-using-react-virtualized/), but I quickly realized that was not scalable.

For the final release, 1.1.0-beta, I settled on infinite scrolling, similar to what Twitter uses. It's fairly fast, but ideally the scrolling would be uninterrupted.

<caption>Doombox 1.x.x</caption>

#### Version 2.x.x

![!Doombox 2.x.x](/assets/images/doombox/2.x.x.png)

<caption>Doombox 2.x.x (wip)</caption>

Version 2.x.x is (as of writing) the version I'm currently working on. Similar to 0.7.0 and 1.x.x, it's a complete rewrite of the previous version. For 2.x.x, I'm planning on doing the following things different.

**Stricter IPC typing (possibly with TypeScript)**

Version 1.x.x does have an [IPC standard](https://github.com/chronoDave/Doombox/blob/v1.x.x/SPEC.md), but the prop "options" often gets abused. To me, this indicates that the IPC standard doesn't work correctly, so for 2.x.x, I wish to avoid using this prop altogether.

**Less external dependencies**

This is a very personal desire, but I believe that having less external code makes your project easier to maintain. Ideally, you gain more freedom within your own project, but in reality it's often not that simple, but I strive to remove redundant code either way.

**More native support**

Pretty much a no-brainer, native support is always a good thing.

**Better testing coverage**

Throughout developing Doombox, I've come to realize the strength of automated testing. It's something often overlooked and sometimes seen as a waste of time, but I personally cannot imagine doing a large-scale project without it.

I don't have a coverage percentage or something similar in mind, however. My approach is simple: Write tests for things that will either break often or should never break.

**Removal of linked packages**

Doombox is a pseudo [monorepo](https://en.wikipedia.org/wiki/Monorepo) and uses [linking](https://classic.yarnpkg.com/en/docs/cli/link/) to import local packages. This is quite a pain to set-up (and remove), so this will be replaced with something else.

**Compact-first design**

Unlike previous version, 2.x.x will be designed compact-first, meaning it'll be designed for 320 x 240 instead of 1920 x 1080. This way I can make certain the application is responsive on (nearly) all sizes.

**Better performance on both front- and back-end**

Related to less external dependencies, testing coverage and stricter IPC typing, the goal is to create a more performant version of Doombox.

One of the big steps I've taken so far is replacing [NeDB](https://github.com/louischatriot/nedb) with my own database, [leaf-db](https://github.com/chronoDave/leaf-db).

#### Conclusion

Doombox is a personal project I love working on. So far, I've been working on it for nearly two years and I have no intention of stopping anytime soon. Besides [version 2.x.x](#version-2.x.x) I have many plans for Doombox, including a mobile version and streaming support.

#### Extra

![Doombox profile creation](/assets/images/doombox/profile.png)

<caption>Profile creation (dropped)</caption>

![Doombox remote database](/assets/images/doombox/remote.png)

<caption>Remote database support (dropped)</caption>

![Proposed dataflow](/assets/images/doombox/dataflow.png)

<caption>Proposed dataflow (dropped)</caption>

![MediaSession API support](/assets/images/doombox/mediasession.png)

<caption>MediaSession API support</caption>

<box pt="8px">

<i>Last updated October 4, 2020</i>

</box>
