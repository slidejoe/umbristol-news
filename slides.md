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
<wifi size="100" />

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

<!-- https://our.umbraco.com/download/releases -->

<v-clicks>

- 🚀 **Umbraco 15.3 releases**
  
  New TipTap features, Property Value Preset, Workspace Info App, more clipboard compatible editors & make your own
- 🔒 **Security patches**

  March: v10+, April: v14+
</v-clicks>

<!--
Tiptap:
 - Style Select menu
 - Custom Stylesheets
 - Font Family menu
 - Font Size menu
 - Table menu
 - Text Direction (right-to-left)
 - Generic markup (allows for <div> and <span> tags)

v13 features:

- Property Value Preset
  - A replacement for using SendingContentNotification to predefine/preset a Property Value. This preset is now available as an extension type in the frontend to define or calculate a preset value for a property editor.
- Workspace Info App
  - Another replacement for using SendingContentNotification to remove or overwrite exciting elements in the Info View on Documents. The Workspace Info App now allows you to both remove, overwrite, or add more elements to the Info Workspace View on documents. 
- Clipboard Feature & Extension Types
  - Four new extension types related to the clipboard feature, allow you to traverse, clone, or copy values from a property editor — or paste values into a property editor.
  - Plus, unlike in Umbraco 13, you can now implement clipboard features for a property editor without changing the code of the property editor.
-->

---
layout: section
---

# CFPs <lucide-message-circle-question />

Apply to talk/appear at these events

::right::

<v-clicks>

- 🦅 **US Festival**
  Applications open until 9 May.

  https://UmbracoFestival.us/
- 🛖 **CODECABIN 2025**
  Mid-week this time. Applications are open.

  https://CodeCab.in

</v-clicks>


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

- 📖 **Join the Docs team**
  Join a community team. Apply before 5 May.
  https://umbra.co/Docs-Signups-M
- 🔙 **Umbraco Rollback Previewer**
  Visual comparison using the rollback tool
  `Umbraco.Community.RollbackPreviewer`
- 👁️ **Personalization: How to Make It Actually Work**
  HQ's video guide to using Umbraco Engage
  https://youtu.be/xk7OIWJ3R24
- ✨ **Spark photos are live**
  https://umbracospark.com

</v-click>

<v-after>

- ✨ **Spark photos are live**
  https://umbracospark.com
- ☕ **umbraCoffee - March 25**
  IsItCodegardenYet??? MVPs, releases and more!
  https://youtube.com/@umbraCoffee
- 💥 **Umbraco Impact Report**
  https://umbra.co/3FQYNJ3
- 🗞️ **Skrift #115**
  *HTMX & Umbraco* and *Property Editors for Bellissima*<br/>
  https://skrift.io

</v-after>

---
layout: section
---

# Events <lucide-calendar-heart />
<date /> and beyond

::right::

<!-- https://umbracalendar.com/ -->

<v-clicks>

- 🐄 **DDD South West** &middot; This Saturday &middot; Bristol
  *Free* event on Saturday
  https://dddsouthwest.com
- 🌷 **Codegarden** &middot; 18-20 June &middot; Odense, DK
  Programme live and Early Bird ends 1 May!
  https://codegarden.umbraco.com/

</v-clicks>

---
layout: items
cols: 2
---

# ![Umbraco](/images/umbraco/logo.svg){style="height:1.5em;display:inline-block;margin-bottom:.5em;"}

is sponsoring today's meetup venue, food and drink

![Gibe](/images/gibe/logo.svg){style="height:1.5em;display:inline-block;margin-bottom:.2em;"}  <span style="opacity: 0.5;">is hosting</span>

::items::

<person img="/images/gibe/cat.jpg" name="Cat Todd" caption="Queen of Spark" />
<person img="/images/gibe/matt-begent.jpg" name="Matt Begent" caption="Accessibility Reporter (Me)" /> 

---
layout: items
cols: 2
---

# Let's go! <lucide-rocket />
Handing over to these lovely people&hellip;

::items::

<person img="/images/absurd/adam-and-richard.jpg" name="Richard Jackson & Adam Prendergast" caption="Build Your Own Developer Blog with Umbraco 15 & Astro" /> 
<person img="/images/mondo-media/carl-sargunar.png" name="Carl Sargunar" caption="Hosting Umbraco in Containers" />
