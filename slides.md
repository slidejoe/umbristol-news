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

<date year="true" />

<br />
<br />

<!-- Set wifi credentials in /components/wifi.vue -->
<!-- <wifi size="100" /> -->

---
layout: section
---

# Emergency Exits <lucide-door-open />

Don't panic!

---
layout: section
---

# Toilets <lucide-toilet />

When you gotta go, you gotta go.

---
layout: section
---

# Wifi <lucide-wifi />

Connect digitally

<wifi mode="text" />

::right::

<wifi mode="qr" />


---
layout: intro
---

# <lucide-newspaper /> The News

---
layout: section
---

# Releases <lucide-ship />

HQ have been busy

::right::

<!--
https://releases.umbraco.com/all-releases/
https://umb.fyi/tag/security
-->


- 🚀 **Umbraco 17.3.4 release**
  
  Database migration tweaks, auto-generated imaging HMAC key for new installs (broke some packages?), Central Package Management support in templates. Plus 183 fixes and improvements (35 from 22 community contributors, 8 first-timers!)

  Also, broke exports in Accessibility Reporter! Which I have now fixed!

- 🔒 **Umbraco 13.14.0**
  
  Releasing on Thursday. Resolves security vulnerability warnings with System.Security.Cryptography.Xml. 

---
layout: section
---

# CFPs <lucide-message-circle-question />

Apply to talk/appear at these events

::right::

- 🎡 **Umbraco UK Conference 2026**
  Applications open THIS Friday (May 1st) – July 1st!

  https://conf.umbraco.community/

- ✈️ **Umbraco Kalaset - Swedish Umbraco Festival**
  Applications close on August 16th.

  https://sessionize.com/umbracokalaset-2026

- 🔥 **UMBRAAD 2026 - Fireside chats**
  Navigating burnout when building for accessibility or cultivating business buy-in.

  https://umbraad.com/

---
layout: section
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

# Community <lucide-heart-handshake />

Don't just watch the news, *be* the news!

::right::

<!-- https://umb.fyi/firehose/news -->
<v-click hide>

- 📌 **Favourites wins inaugural Sparkies!**
  Pin your most-used content items!
  https://github.com/Gibe/Umbraco.Community.Favourites

- 🗺️ **Umbraco.Community.DeliveryApiModelMapper**
  Create custom models with the Delivery API - released at the Spark Package Jam
  https://github.com/Gibe/Umbraco.Community.DeliveryApiModelMapper

- 🦭 **New Paul Seal Video: Using Custom Umbraco AI Tools to Write a Whole Article Automatically**
  https://www.youtube.com/watch?v=Wrfwi7oGqG8

</v-click>

<v-click at="1">

- 🏆 **Umbraco Award nominations have been announced**
  https://umbraco.com/blog/announcing-the-2026-umbraco-awards-nominees/

- 📦 **Still time to submit your package for an award**
  May 3rd deadline 
  https://codegarden.umbraco.com/awards/package-awards/

</v-click>

---
layout: section
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

# Events <lucide-calendar-heart />
<date /> and beyond

::right::

<!-- https://umbracalendar.com/ -->

<v-click hide>

- 🚜 **DDD South West 2026** &middot; 16th May &middot; Bristol
  SOLD OUT! Get on the waiting list for a FREE ticket!
  https://dddsouthwest.com/

- 💂 **London Umbraco Meetup** &middot; 14th May &middot; London
  Umbraco & AI evening hackathon
  https://www.meetup.com/the-london-umbraco-meetup

- 🏢 **Next umBristol** &middot; 20th May
  
- 🐲 **UmbraCymru: The Wales Umbraco Meetup** &middot; 28th May &middot; Spindogs, Cardiff
  UmbraCymru - Lightning Talks. Joe is giving one of the talks!
  https://www.meetup.com/umbracymru/events/314037227/

</v-click>

<v-click at="1">

- 🌐 **UMBRAAD 2026**  &middot; 21st May &middot; Virtual
  Get your tickets now! Speakers have been selected
  https://www.meetup.com/umbraco-virtual/events/314400053/

- 🌷 **Codegarden** &middot; 10th-11th June &middot; Odense, DK
  You can still buy tickets!
  https://codegarden.umbraco.com/
  
- 🎡 **Umbraco UK Conference 2026** &middot; 16th Oct &middot; London, UK
  Super early bird tickets available!
  https://conf.umbraco.community/

</v-click>

---
layout: items
cols: 2
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

# ![true](/images/gibe/logo.svg){style="height:1.5em;display:inline-block;margin-bottom:.5em;"}

is sponsoring today's meetup venue, food and drink

::items::

<person img="/images/gibe/matt-begent.jpg" name="Matt Begent" caption="Host / Generic Developer" />
<person img="/images/gibe/cat.jpg" name="Cat Todd" caption="Organiser / Director of Pizza Purchasing" />

---
layout: items
cols: 2
---

# Let's go! <lucide-rocket />
Handing over to&hellip;

# 🫵🏻
(it's you)

::items::

<!-- <person img="/images/absurd/adam-and-richard.jpg" name="Richard Jackson & Adam Prendergast" caption="Build Your Own Developer Blog with Umbraco 15 & Astro" /> 
<person img="/images/mondo-media/carl-sargunar.png" name="Carl Sargunar" caption="Hosting Umbraco in Containers" /> -->

---
layout: items
cols: 2
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

<person img="/images/mondo-media/carl-sargunar.png" name="Carl Sargunar" caption="DDoS My Desk: Load Balancing Live and Uncut!" />
