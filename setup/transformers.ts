import type { MarkdownTransformContext } from '@slidev/types'
import { defineTransformersSetup } from '@slidev/types'

function meetupAutoLinks(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /https?:\/\/(?:www\.?)(meetup\.com\/[\w-]+)[\S]*/gm,
      (url, display) => {
        return `[${ display }](${ url })`
      },
    )
  }

  function myAutoLinks(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /(^|[^\("])(https?:\/\/([^\s]+[\w])\/?)/gm,
      (match, prefix, url, display) => {
        console.log(match, prefix, url, display);
        return `${prefix}[${ display }](${ url })`
      },
    )
  }

function multiLineBullets(ctx: MarkdownTransformContext) {
    // Only works for the first new line, I don't have time to make it work for multiple!
    ctx.s.replace(
      /(- .*?)(\n\s+[^-])/g,
      (match, p1, p2) => {
        //console.log({ p1, p2 });
        return p1 + p2.replace(/\n\s+/g, '<br />')
      }
    )
}

export default defineTransformersSetup(() => {
  return {
    pre: [meetupAutoLinks, myAutoLinks, multiLineBullets],
    preCodeblock: [],
    postCodeblock: [],
    post: [],
  }
})