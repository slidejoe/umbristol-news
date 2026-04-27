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

Connect digitally as well as socially

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

---
layout: section
---

# CFPs <lucide-message-circle-question />

Apply to talk/appear at these events

::right::

- 🎡 **UMBUK26 - The Umbraco UK Conference**
  Applications open from May 1st to July 1st.

  https://conf.umbraco.community/

- ✈️ **Umbraco Kalaset - Swedish Umbraco Festival**
  Applications open from April 13th to August 16th.

  https://sessionize.com/umbracokalaset-2026


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
<!-- <v-click hide> -->

- 📌 **Umbraco.Community.Favourites released!**
  https://github.com/Gibe/Umbraco.Community.Favourites
- 🦭 **New Paul Seal Video: Using Custom Umbraco AI Tools to Write a Whole Article Automatically**
  https://www.youtube.com/watch?v=Wrfwi7oGqG8
- 🏆 **Umbraco Award nominations have been announced**
  https://umbraco.com/blog/announcing-the-2026-umbraco-awards-nominees/
- 📦 **Still time to submit your package for an award**
  May 3rd deadline 
  https://codegarden.umbraco.com/awards/package-awards/
- Add some more

<!-- </v-click> -->

<!-- <v-click at="1">

- 🏆 **Umbraco Award applications open**
  Until 27th March
  https://codegarden.umbraco.com/awards/umbraco-solution-awards
- 🛠️ **Contributing Partners 2025 announced**
  https://umbraco.com/blog/announcing-umbraco-contributing-partners-2025

</v-click> -->

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

- 🌐 **UMBRAAD 2026**  &middot; 21st May &middot; Virtual
  Get your tickets now! Speakers have been selected
  https://www.meetup.com/umbraco-virtual/events/314400053/

- 🌷 **Codegarden** &middot; 10th-11th June &middot; Odense, DK
  You can still buy tickets!
  https://codegarden.umbraco.com/
  
- 🎡 **UMBUK26** &middot; 16th Oct &middot; London, UK
  Super early bird tickets available!
  https://conf.umbraco.community/


</v-click>

<v-click at="1">

- 💂 **The London Umbraco Meetup** &middot; 14th May &middot; Novicell UK, London
  Umbraco & AI evening hackathon 14th May
  https://www.meetup.com/the-london-umbraco-meetup

- 🏢 **Next umBristol** &middot; 20th May
  
- 🐲 **UmbraCymru: The Wales Umbraco Meetup** &middot; 28th May &middot; Spindogs, Cardiff
  UmbraCymru - Lightning Talks
  https://www.meetup.com/umbracymru/events/314037227/

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

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

::items::

<person img="/images/mondo-media/carl-sargunar.png" name="Carl Sargunar" caption="DDoS My Desk: Load Balancing Live and Uncut!" />

---
layout: items
cols: 2
---

# Let's go! <lucide-rocket />
Handing over to these lovely people&hellip;

# 🫵🏻
(it's you)

::items::

<!-- <person img="/images/absurd/adam-and-richard.jpg" name="Richard Jackson & Adam Prendergast" caption="Build Your Own Developer Blog with Umbraco 15 & Astro" /> 
<person img="/images/mondo-media/carl-sargunar.png" name="Carl Sargunar" caption="Hosting Umbraco in Containers" /> -->

