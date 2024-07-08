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

</style>

# umBristol

July 2024

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

- 🚀 **Umbraco 14 release**
  
  Umbraco 14 was released on 30 May! 😱
- 🚀 **Umbraco 13.4**
  
  Performance enhancements, bugfixes etc
  

</v-clicks>

---
layout: section
---

# Community News

Don't just watch the news, *be* the news!

::right::

<v-clicks>

- 🎪 **Umbraco US Festival CFP**
  
  Want to speak at US Festival? Closes *15 July*!
  [sessionize.com/umbraco-us-festival](https://sessionize.com/umbraco-us-festival/)
- 📦 **Various packages updated with v14 support**

  Check your favourite packages
- 📦 **BegeWrite**

  EditorJS editor for Umbraco
- 🎧 **Candid Contribuitons Podcast**

  Live from Codegarden 2024! *Wherever you get your podcasts.*
</v-clicks>

---
layout: section
---

# Upcoming events
July

::right::

<v-clicks>

- 🦉 **Umbraco Leeds - Virtual**
  
  Thursday &middot; Online

  [meetup.com/umbleeds](https://www.meetup.com/umbleeds/events/301981551)

- 🐲 **UmbraCymru - Virtual**
  
  31 July &middot; Online
  
  [meetup.com/umbracymru](https://www.meetup.com/umbracymru/events/298562637)

</v-clicks>

---
layout: section
---

# Upcoming events
August

::right::

<v-clicks>

- 🐲 **UmbraCymru Talks - August**
  
  29 August &middot; Cardiff

  [meetup.com/umbracymru](https://www.meetup.com/umbracymru/events/298562625)
- 🦄 **umBristol Social - August**
  
  TBC &middot; Bristol

  [meetup.com/umbristol](https://www.meetup.com/umbristol/)

</v-clicks>

---
layout: items
cols: 2
---

# Sponsored by
Pizza to eat, drinks to drink and a place to do it all!

<!-- <img src="/images/true/logo.png" alt="True Logo" class="logo" /> -->

## True Digital

::items::

<person img="/images/true/rich.png" name="Rich McCloskey" />
<person img="/images/true/matt.jpg" name="Matt Sutherland" />

---
layout: items
cols: 3
---

# Let's go!
Handing over to these lovely people&hellip;

::items::

<person img="/images/true/sean.jpg" name="Sean Thorne" caption="Codegarden recap" />
<person img="/images/true/george.jpg" name="Georgina Bidder" caption="The Bittersweet Reality of Diabetes Tech" />
<person img="/images/true/matt.jpg" name="Matt Sutherland" caption="Fighting ghosts and monsters" />