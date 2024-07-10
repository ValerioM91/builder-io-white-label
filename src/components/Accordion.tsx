"use client"

import * as React from "react"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "~/utils/cn"

const AccordionRoot = React.forwardRef<
  React.ElementRef<typeof Accordion.Root>,
  React.ComponentPropsWithoutRef<typeof Accordion.Root>
>(({ className, children, ...props }, ref) => (
  <Accordion.Root ref={ref} className={cn("rounded-md shadow-[0_2px_10px] shadow-black/5", className)} {...props}>
    {children}
  </Accordion.Root>
))
AccordionRoot.displayName = Accordion.Root.displayName

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Accordion.Item>,
  React.ComponentPropsWithoutRef<typeof Accordion.Item>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={cn(
      "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-primary",
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
))
AccordionItem.displayName = Accordion.Item.displayName

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Accordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof Accordion.Trigger>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={cn(
        "group flex flex-1 items-center justify-between bg-white px-6 py-5 leading-none shadow-[0_1px_0] shadow-primary/30 outline-none transition-all hover:bg-primary/5",
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
))
AccordionTrigger.displayName = Accordion.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Accordion.Content>,
  React.ComponentPropsWithoutRef<typeof Accordion.Content>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={cn("overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-4">{children}</div>
  </Accordion.Content>
))
AccordionContent.displayName = Accordion.Content.displayName

export { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent }
