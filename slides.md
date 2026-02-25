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
hide: true
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


- 🚀 **Umbraco 17.2.0 release**
  
  "Root properties" (without a tab or section) and more minor v13 features

- 🤖 **Umbraco MCP Developer v17.1.0 release**
  
  Agents can update individual document properties and nested block content without replacing the document, create-media-folder tool


---
layout: section
---

# CFPs <lucide-message-circle-question />

Apply to talk/appear at these events

::right::

- 🐄 **DDD South West**
  Applications open until 7th March.

  https://DDDSouthWest.com



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

- 🎼 **Umbraco Compose demo by CTO, Filip Bech-Larsen.**
  https://www.youtube.com/watch?v=VnxqTnMjSYE
- 🎼 **Umbraco Compose example project**
  https://www.youtube.com/watch?v=tXdbHn14Gn8
- ❇️ **Introducing Umbraco AI**
  https://mattbrailsford.dev/introducing-umbraco-ai
- 🤿 **DevRel Deep Dive: Creating Backoffice Extensions with AI Skills**
  https://www.youtube.com/watch?v=GR-NZra1528

</v-click>

<v-click at="1">

- 🏆 **Umbraco Award applications open**
  Until 27th March
  https://codegarden.umbraco.com/awards/umbraco-solution-awards
- 🛠️ **Contributing Partners 2025 announced**
  https://umbraco.com/blog/announcing-umbraco-contributing-partners-2025

</v-click>

---
layout: section
---

# Events <lucide-calendar-heart />
<date /> and beyond

::right::

<!-- https://umbracalendar.com/ -->

<v-clicks>

- ✨ **Umbraco Spark & related events**  &middot; 19-20 March &middot; Bristol
  Tickets available! Sign up for the other events too:
  https://umbracospark.com/2026-umbraco-spark

- 🐄 **DDD South West** &middot; 16 May &middot; Bristol
  FREE event at the weekend!
  https://DDDSouthWest.com

- 🌷 **Codegarden** &middot; 10-11 June &middot; Odense, DK
  Speaker programme expected soon
  https://codegarden.umbraco.com/


</v-clicks>

---
layout: items
cols: 2
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

# ![true](/images/true/logo.svg){style="height:1.5em;display:inline-block;margin-bottom:.5em;"}

is sponsoring today's meetup venue, food and drink

::items::

<person img="/images/true/matt.jpg" name="Matt Sutherland" caption="Head of Technology" />
<person v-click.hide img="/images/true/richard-osman.jpg" name=" Rich McCloskey" caption="Managing Director" />
<person v-click="1" img="/images/true/rich.png" name=" Rich McCloskey" caption="Managing Director" />

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

