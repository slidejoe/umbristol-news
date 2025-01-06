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

dotNetConf, January 2025

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

- 🚀 **Umbraco 15.1.1 release**
  
  Cleanup, UFM improvements, TipTap improvements, Bugfixes
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

- 📅 **24 Days in Umbraco**
  Fantastic collection of articles from across the community
  https://24days.in/umbraco-cms
- 🦋 **BlueSky for Umbraco Developers**
  A guide to BlueSky from Matt Brailsford
  https://mattbrailsford.dev/getting-started-on-bluesky-for-umbraco-developers
- 😊 **Contentment v5.1**
  https://github.com/leekelleher/umbraco-contentment
- ☕ **umbraCoffee - November 24**
  Umbraco v15, Festivals Summary, EOTY...?
  https://youtube.com/@umbraCoffee
</v-clicks>

---
layout: section
---

# Upcoming events
November and beyond

::right::

<!-- https://umbracalendar.com/ -->

<v-clicks>

- 🐲 **Umbraco Winter Keynote** &middot; Thursday &middot; Online
  https://umbra.co/SignUp-mastodon
- ✨ **Umbraco Spark** &middot; 7 March &middot; Bristol
  Tickets available (cheaper before February), Kevlin Henney announced as speaker
  https://umbracospark.com/
- 🌷 **Codegarden** &middot; 18-20 June &middot; Odense, DK
  Save the date! CFP open
  https://codegarden.umbraco.com/
</v-clicks>

---
layout: items
cols: 2
---

# Sponsored by
Pizza to eat, drinks to drink and a place to do it all!

## Gibe Digital

::items::

<person img="/images/gibe/pete.webp" name="Pete Williams" />
<person img="/images/gibe/steve.webp" name="Steve Temple" />

---
layout: items
cols: 2
---

# Let's go!
Handing over to these lovely people&hellip;

::items::

<person img="/images/umbraco/lotte.jpg" name="Lotte Pitcher" caption="Releasing HybridCache into the Wild with Umbraco" /> 
<person img="/images/bump/jason.jpg" name="Jason Elkin" caption="System.ArgumentNullException: Value cannot be null. Parameter name: sessionTitle" />
