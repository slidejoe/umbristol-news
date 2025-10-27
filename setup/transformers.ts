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
        //console.log(match, prefix, url, display);
        return `${prefix}[${ display }](${ url })`
      },
    )
  }

function multiLineBullets(ctx: MarkdownTransformContext) {
  ctx.s.replace(
    /(?:- .*?)+(?:(?:\n[^\S\r\n]+[^\S\r\n-]).*)+/g,
    (match) => {
      return match.replace(/(?<=\S)\n[^\S\r\n]+(?=\S)/g, '<br />')
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
