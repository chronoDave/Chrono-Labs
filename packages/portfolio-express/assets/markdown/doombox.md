###### About

Doombox is a music player designed and built to support a large, personal music library. It's [open source](https://github.com/chronoDave/Doombox), free and high customizable. It's built with [Electron](https://www.electronjs.org/) and [React](https://reactjs.org/) and supports both Windows and Mac computers.

You can download it for free on [GitHub](https://github.com/chronoDave/Doombox/releases).

###### Humble Beginnings

Before I started working on Doombox, I used a program called [foobar2000](https://www.foobar2000.org/) as my music player. It's great software but as my collection grew, the UX experience diminished. This, combined with the fact that foobar2000 doesn't work as well on Mac, made me think about creating Doombox.

Now, creating an application is by no means easy, especially with lack of experience. To make sure it was even possible to create something like foobar2000, I created a simple proof-of-concept (PoC) application using just Electron.

![Doombox proof of concept comparison](/assets/images/doombox_2.jpg)

![Doombox proof of concept close-up](/assets/images/doombox_1.jpg)

The PoC includes the following things:

 - Allow the user to select a folder containing music
 - Scan mp3 files within the selected folder for metadata
 - Insert the found metadata into a database
 - Group the found songs into albums
 - Display the grouped albums
 - The content is responsive

With the PoC working, the next step would be designing the UI.

###### UI Concept Design

As Doombox was meant to replace foobar2000, designing the initial version of the UI was relatively straightforward. When I want to improve an already existing UI, I ask myself the following questions:

 1) Which elements work?
 2) Why do these elements so well, and do these elements affect other elements?
 3) Which elements don't work?
 4) Why don't theese elements work, and do these elements affect other elements?
 5) If I create and / or modify an element, will it fit in with the other elements?

As foobar2000 already had a lot of things I _did_ like, all I needed to do was change the things I _didn't_ like.

One of the things I didn't like was the relatively large player at the bottom of the screen. As I didn't use the drag-to-scroll feature often, it made sense to make the player smaller. Moving it into the sidebar creates more vertical space, allowing for more albums on screen.

![Doombox ui concept](/assets/images/doombox_3.jpg)

###### First version

![Doombox 0.7.0-alpha](/assets/images/doombox_4.png)

The first official release version of Doombox is [0.7.0-alpha](https://github.com/chronoDave/Doombox/releases/tag/v0.7.0-alpha), which is more a prototype than an actual release. During development (and especially after release), I realized this version would have to be rewritten from the ground up for two reasons:

 - **The UI did not work as well as I thought it would**

The mockups were made at 1920 x 1080 resolution, but in reality I only used small resolutions. As the design wasn't made for smaller resolutions, it didn't work as well as I hoped it would.

 - **The code structure wouldn't allow me to iterate easily**

I wrote the code as-is, without much thinking. It was by no means scalable or consistent, so I quickly ran into issues when trying to add new features.

###### UI Concept Redesign

To accomdate for smaller screens, a lot of blank space has been removed from the design.

###### Second version

 - Features it had
 - Why I scrapped
   - Code structure
   - UI

###### UI Concept - Design as I go

 - Why I chose this approach
 - Goals for the future

###### Bonus - Scrapped ideas

One of the ideas I had was profiles. The idea was that when Doombox was used by different users (or across multiple computers), playlists and settings could be saved. However, in reality, I never found that this was needed. Perhaps in the future when Doombox becomes larger this could be redesigned and added back in.

![Doombox profile creation](/assets/images/doombox_profile_2.jpg)

![Doombox profile creation close-up](/assets/images/doombox_profile_1.png)

Another idea was remote databases. In theory, it would make sense to have a single database in the cloud to manage metadata. In practice, this is rather complicated. For example, which data is leading? The cloud data or local data? And what happens if you go offline?

![Doombox remote data](/assets/images/doombox_remote_1.png)

###### Conclusion

<i>Last updated September 19, 2020</i>
