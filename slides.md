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

  img.person {
    max-width: 160px;
    margin: auto;
    border-radius: 50%;
  }

  ul {
    list-style: none!important;
  }

</style>

# umBristol

May 2024

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

<v-clicks>

- 🚀 **Umbraco 14 RC 3**
  
  The 3rd release candiate for v14 was released
- 🚀 **Umbraco 14 release**
  
  Umbraco 14 is scheduled for release on 30 May! 😱
  

</v-clicks>

---
layout: section
---

# Community News

Don't just watch the news, *be* the news!

::right::

<v-clicks>

- 🎪 **Umbraco US Festival CFP**
  
  Want to speak at US Festival?
  [sessionize.com/umbraco-us-festival](https://sessionize.com/umbraco-us-festival/)
- 🎧 **Candid Contributions**
  
  *"Toots, Tweets and Time Management"*
- 💼 **Codegarden megathread on Discord**
  
  [discord-chats.umbraco.com/t/18809569/cg](https://discord-chats.umbraco.com/t/18809569/cg)

- 🤫 **The Secret Stage 2024**
  
  [thesecretstage.vip](https://thesecretstage.vip/)

</v-clicks>

---
layout: section
---

# Upcoming events
May

::right::

<v-clicks>

- 💙 **UMBRAAD**
  
  Tomorrow &middot; Online

  [meetup.com/umbraco-virtual](https://www.meetup.com/umbraco-virtual/events/299210604)

- ⭕ **Umbraco London Shuffle Social**
  
  22 May &middot; London

  [meetup.com/the-london-umbraco-meetup](https://www.meetup.com/the-london-umbraco-meetup/events/300930964)
  
- 🐲 **UmbraCymru Show & Tell**
  
  29 May &middot; Online
  
  [meetup.com/umbracymru](https://www.meetup.com/umbracymru/events/298562607)

</v-clicks>

---
layout: section
---

# Upcoming events
June & July

::right::

<v-clicks>

- 🌷 **Codegarden**
  
  12-17 June &middot; Odense, DK

  [codegarden.umbraco.com](https://codegarden.umbraco.com/)
- 🐲 **UmbraCymru Talks - June**
  
  27 June &middot; Cardiff

  [meetup.com/umbracymru](https://www.meetup.com/umbracymru/events/298562625)
- 🦄 **umBristol Talks - July**
  
  10 July &middot; Bristol

  [meetup.com/umbristol](https://www.meetup.com/umbristol/)

</v-clicks>

---
layout: items
cols: 2
---

# Sponsored by
Pizza to eat, drinks to drink and a place to do it all!

<img src="/images/cps/logo.png" alt="CPS Logo" class="logo" />

::items::

<img src="/images/cps/simon.jfif" alt="Simon" class="person" />
<img src="/images/cps/jack.jpg" alt="Jack" class="person"/>

**Simon**

**Jack**

---
layout: items
cols: 2
---

# Let's go!
Handing over to these lovely people&hellip;

::items::

<img src="/images/gibe/matt-begent.jpg" alt="Matt Begent" class="person" />
<img src="/images/true/matt.jpg" alt="Matt Sutherland" class="person" />

**Matt Begent**<br />
Calling An Accessibility Overlay Accessible Does Not Make it Accessible

**Matt Sutherland**<br />
Navigating the web through colour-blind eyes: It's not all black and white