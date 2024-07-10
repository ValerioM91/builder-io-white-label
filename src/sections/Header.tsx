"use client"

import * as React from "react"
import NextLink from "next/link"

import { cn } from "~/utils/cn"
import type { Menu } from "~/utils/menuHelpers"

import Link from "~/components/Link"
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "~/components/NavigationMenu"

type HeaderProps = {
  menus: Menu[]
}

const Header = ({ menus }: HeaderProps) => {
  return (
    <header className="flex h-20 w-full items-center bg-gradient-to-r from-base-200 to-base-100 px-4 md:px-6">
      <NextLink className="mr-6 flex items-center" href="/">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
        <span className="sr-only">Builder White Label</span>
      </NextLink>

      <NavigationMenuRoot>
        <NavigationMenuList>
          {menus.map(menu => {
            return (
              <NavigationMenuItem key={menu.id}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="m-0 grid list-none gap-x-2.5 p-6 sm:min-w-[500px] sm:grid-cols-[0.75fr_1fr]">
                    {menu.links?.map(link => (
                      <li className="row-span-3 grid" key={link.id}>
                        <NextLink
                          className="flex h-full w-full select-none flex-col justify-end rounded-md border p-6 no-underline outline-none"
                          href={link.href}
                        >
                          {link.label}
                        </NextLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
          })}

          <NavigationMenuItem>
            <NavigationMenuLink
              className="block select-none rounded px-3 py-2 font-medium leading-none no-underline outline-none"
              href="https://github.com/radix-ui"
            >
              Github
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenuRoot>

      <Link href="/" className="shrink-0">
        Get Started
      </Link>
    </header>
  )
}

export default Header

const ListItem = React.forwardRef<React.ElementRef<typeof NextLink>, React.ComponentPropsWithoutRef<typeof NextLink>>(
  ({ className, children, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <NextLink
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
          ref={forwardedRef}
          href="#"
        >
          <div className="mb-1 font-medium leading-tight">{"title"}</div>
          <p className="leading-[1.4]">{children}</p>
        </NextLink>
      </NavigationMenuLink>
    </li>
  ),
)

ListItem.displayName = "ListItem"
