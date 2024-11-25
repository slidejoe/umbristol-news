---
# try also 'default' to start simple
theme: bricks
# some information about your slides, markdown enabled
title: umBristol News
info: |
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true

fonts:
  # basically the text
  sans: Lato
  # use with `font-serif` css class from UnoCSS
  serif: Lato
  # for code blocks, inline code, etc.
  mono: Fira Code
  
layout: cover
class: text-right
---

<style>
  img.logo {
    max-width: 250px;
    margin: auto;
  }

  ul {
    list-style: none!important;
  }

  .slidev-layout li {
    line-height: inherit;
    padding-bottom: 0.8em;

    &:last-child {
      padding-bottom: 0;
    }
  }
</style>

# umBristol

November 2024

<br />
<br />

<!-- Set wifi credentials in /components/wifi.vue -->
<wifi size="100" />

---
layout: section
---

# Emergency Exits

Don't panic!

---
layout: section
---

# Toilets

When you gotta go, you gotta go.

---
layout: section

---

# Wifi

Connect digitally as well as socially

<wifi mode="text" />

::right::

<wifi mode="qr" />


---
layout: intro
---

# The News

---
layout: section
---

# Releases

HQ have been busy

::right::

<!-- https://our.umbraco.com/download/releases -->

<v-clicks>

- 🚀 **Umbraco 15 release**
  
  Umbraco 15 was released on 14 November! 😱
- 👁️ **Umbraco Engage released**
  The new name for uMarketingSuite, bought by HQ
  https://umbraco.com/blog/introducing-umbraco-engage/

</v-clicks>

---
layout: section
---

# CFPs

Apply to talk/appear at these events

::right::

<v-clicks>

- ✨ **Umbraco Spark**
  Want to speak at Umbraco Spark? Closes *31 January*!
  https://sessionize.com/umbraco-spark-2025/
- 🎪 **Codegarden**
  Want to speak at Codegarden? Closes *14 February*!
  https://sessionize.com/codegarden-week-2025/
- 🛖 **CODECABIN 2025**
  Mid-week this time. Applications are open.
  https://CodeCab.in

</v-clicks>


---
layout: section
---

# Community News

Don't just watch the news, *be* the news!

::right::

<!-- https://umb.fyi/firehose/news -->

<v-clicks>

- 🧑‍🎄 **Umbraco Secret Santa**
  Exchange gifts with a random community member!
  https://UmbracoSecretSanta.com
- 🦋 **BlueSky Umbraco starter kit**
  Who to follow on BlueSky? Dean's got your back...
  http://notacu.lt/bsky-starter
- 📺 **Codegarden videos released**
  https://www.youtube.com/@UmbracoHQ
- 🎧 **Candid Contribuitons Podcast**
  Hackathons, Codecabin, a 5 year anniversary... *Wherever you get your podcasts.*
</v-clicks>

---
layout: section
---

# Upcoming events
November and beyond

::right::

<!-- https://umbracalendar.com/ -->

<v-clicks>

- 🐲 **UmbraCymru** &middot; Wednesday Lunchtime &middot; Online
  https://www.meetup.com/umbracymru/events/298562669
- 🚇 **Umbraco London Pub Quiz** &middot; 5 December &middot; London
  https://www.meetup.com/the-london-umbraco-meetup/events/304109015
- 🤖 **.NET SW &times; umBristol xmas** &middot; 10 December &middot; Bristol
  https://www.meetup.com/dotnetsouthwest/events/304287701/
- 🎄 **Umbraco Virtual Xmas** &middot; 11 December &middot; Online
  https://www.meetup.com/umbraco-virtual/events/304650892
- ✨ **Umbraco Spark** &middot; 7 March 2025 &middot; Bristol
  Early bird tickets available
  https://umbracospark.com/
</v-clicks>

---
layout: items
cols: 2
---

# Sponsored by
Pizza to eat, drinks to drink and a place to do it all!

## True Digital

::items::

<person img="/images/true/rich.png" name="Rich McCloskey" />
<person img="/images/true/matt.jpg" name="Matt Sutherland" />

---
layout: items
cols: 2
---

# Let's go!
Handing over to these lovely people&hellip;

::items::

<person img="/images/gibe/matt-begent.jpg" name="Matt Begent" caption="SkrivLet" />
<person img="/images/method4/owain.png" name="Owain Jones" caption="How to Make Umbraco Truly Friendly!" />