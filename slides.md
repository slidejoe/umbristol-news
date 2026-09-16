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


- 🚀 **Umbraco 17.7.0 & 18.2.0**

  Both land *tomorrow* (Thursday 17th). Various UX improvements and connection strings written to appsettings files that exist.

- 🔒 **Umbraco 13.16.2**

  Out on Monday — dependency security patches

- 🛡️ **August security advisory**

  Four vulnerabilities patched across CMS, Forms and AI. No patches fo v14-16.

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

- 🌍 **Umbraco HQ is now a certified B Corp**
  Only the second CMS vendor to manage it
  https://umbraco.com/blog/

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

- 💂 **London Meetup** &middot; 17th Sept &middot; SampsonMay
  Discussion evening — tomorrow!
  https://www.meetup.com/the-london-umbraco-meetup/events/316459256/

- 🐲 **UmbraCymru** &middot; 24th Sept &middot; Spindogs, Cardiff
  September talks, just over the bridge
  https://www.meetup.com/umbracymru/events/314939244/

- 🏢 **Next umBristol** &middot; 21st Oct &middot; Runway East
  October talks, sign up soon

</v-click>

<v-click at="1">

- 🗽 **Umbraco U.S. Festival** &middot; 30th Sept+ &middot; Chicago, IL
  https://umbracofestival.us/

- 🎡 **UMBUK26** &middot; 16th Oct &middot; CodeNode, London
  £125 +VAT with code `UMBRISTOL`!
  https://2026.umbracofoundation.co.uk/

- ✈️ **Umbracokalaset 2026** &middot; 20th Oct &middot; Stockholm, SE
  https://www.umbracokalaset.se/

</v-click>

---
layout: items
cols: 3
---

<style scoped>
  .slidev-vclick-hidden {
    display: none;
  }
</style>

# ![Bump](/images/bump/logo.svg){style="height:1.5em;display:inline-block;margin-bottom:.5em;"}

is sponsoring today's meetup venue and food

::items::

<person img="/images/bump/callum.jpg" name="Callum Whyte" caption="Chief Bumpster" />
<person img="/images/bump/jason.jpg" name="Jason Elkin" caption="Lead Developer" />
<person img="/images/bump/joe.jpg" name="Joe Glombek" caption="Senior Developer" />

---
layout: items
cols: 2
---

# Let's go! <lucide-rocket />
Handing over to&hellip;

::items::

<person img="/images/bump/callum.jpg" name="Callum Whyte" caption="Headless Publishing with Umbraco Automate" />
<person img="/images/bump/joe.jpg" name="Joe Glombek" caption="Ghosts of Umbraco Past" />