![Banner Doombox](/assets/images/header_doombox.jpg)

##### Description

<box>

Doombox is a music player designed and built for large music libraries. It's open-source, highly customizable, works on small screens and is completely free.

For more technical details, see [GitHub](https://github.com/chronoDave/Doombox).

</box>

##### History

<box>

<b>Frustration leads to innovation</b>

Before Doombox, I used a program called [foobar2000](https://www.foobar2000.org/) as my music player. It's fast, it works well, but it simply didn't work for me as my music collection grew. This, combined with the fact that it doesn't work as well on Mac, made me create Doombox.

The goal? To create a cross-platform, open-source, easily customizable free audio player that doesn't compromise on UX. If browsing through a physical collection of CD's can be enjoyable, why can't browsing through a digital collection be? 

<b>0.x.x - Prototyping phase</b>

By far the messiest and buggiest part of Doombox' history, `0.x.x` was plagued with bad descisions due to inexperience and experimentation. A small list of things I've tried and failed horribly:

 - Use GraphQL in combination with Mongoose as the database.
 - Making every IPC call unique, including send and receive.
 - Using `create-react-app`
 - No responsive design

Due to the numerous complications that arose from these descisions, work on `1.0.0` started fairly quickly.

<b>1.x.x - Initial release</b>

The current version (as of writing), has had three separate releases within its lifecycle. `1.0.0` is a complete rewrite and fixed a lot of issues found in `0.x.x`. It features:

 - Responsive design which works for resolutions as small as `640 x 480`
 - Normalized (and documented) IPC communication
 - Embedabble database ([NeDB](https://github.com/louischatriot/nedb))
 - Better overall performance
 - Better overall code structure
 - Unit tests

Despite the improvements, `1.0.0` still doesn't meet the original requirements. `1.0.0` relies too heavily on external packages due to lack of experience (such as `Neutrino` to avoid using manual webpack configs) and still has issues with responsiveness and configuration.

<b>2.x.x - Iterate</b>

`2.0.0`, much like `1.0.0` is a complete rewrite of the previous version. With roughly a year of user experience with Doombox, some requirements have changed. For example, the minimum screen size of `640 x 480` is still too big.

The plan for `2.0.0` is as follows:

 - Design small first, with a new minimum screen size of `320 x 240`.
 - Organize and cache data better, so performance is improved.
 - Design function first. Some UI elements in `1.0.0` are cumbersome or simply don't make sense.

</box>

##### Media

<box>

</box>

<i>Last updated September 12, 2020</i>