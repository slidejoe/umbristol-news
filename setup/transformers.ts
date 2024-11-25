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
    /https?:\/\/([^\s]+[\w])\/?/gm,
    (url, display) => {
      return `[${ display }](${ url })`
    },
  )
}

function multiLineBullets(ctx: MarkdownTransformContext) {
    ctx.s.replace(
      /(- .*?)(\n\s+[^-])/g,
      (match, p1, p2) => {
        return p1 + p2.replace(/\n\s+/g, '<br />')
      },
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