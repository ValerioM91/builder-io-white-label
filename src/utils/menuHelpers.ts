import { type BuilderContent, builder } from "@builder.io/sdk"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

export type Menu = {
  id: string
  name: string
  labelLink?: string
  links: {
    id: string
    label: string
    href: string
    external: boolean
  }[]
}

type Link = {
  label: string
  labelLink?: string
  externalLink?: string
  internalLink?: {
    "@type": "@builder.io/core:Reference"
    model: "page"
    id: string
  }
  link: {
    "@type": "@builder.io/core:Reference"
    model: "link"
    id: string
  }
}

export const getMenus = async (data: BuilderContent[]) => {
  const idMap = new Map<string, string>()

  const getLink = async (id: string) => {
    const {
      data: { url },
    } = await builder.get("page", {
      entry: id,
      includeUrl: true,
      fields: "data.url",
    })

    if (Array.isArray(url) && url.length > 0) {
      return idMap.set(id, url[0])
    } else if (typeof url === "string") {
      return idMap.set(id, url)
    }
  }

  const linkIDs = data.flatMap(menu =>
    menu.data?.links.map((link: Link) => link.internalLink?.id).filter(Boolean),
  ) as string[]

  await Promise.all(linkIDs.map(getLink))

  const menus = data.reduce((acc: Menu[], menu) => {
    const { id, name, data } = menu

    if (!data || !id || !name) return acc
    acc.push({
      id,
      name,
      labelLink: data.labelLink,
      links: menu.data?.links.map((link: Link) => ({
        id: link.link.id,
        label: link.label,
        href: link.externalLink || idMap.get(link.internalLink?.id || "") || null,
        external: Boolean(link.externalLink),
      })),
    })
    return acc
  }, [])

  return menus
}
