"use client"

import { builder, Builder } from "@builder.io/react"

import { ButtonLink, HeadingType } from "./builder-registry-utils"

import Hero from "./sections/Hero"
import ImageContent from "./sections/ImageContent"
import FAQs from "./sections/FAQs"
import Newsletter from "./sections/Newsletter"
import PartnersBanner from "./sections/PartnersBanner"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

// Builder.register("insertMenu", {
//   name: "Sections",
//   items: [{ name: "Hero" }, { name: "ImageContent" }, { name: "FAQs" }],
// })

Builder.registerComponent(Hero, {
  name: "Hero",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  inputs: [
    HeadingType,
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Elevate Your Business with Our Innovative Solutions",
    },
    {
      name: "content",
      type: "string",
      defaultValue:
        "Discover how our cutting-edge technology and expert guidance can transform your business and unlock new levels of success.",
    },
    { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
    ButtonLink,
  ],
  noWrap: true,
})

Builder.registerComponent(PartnersBanner, {
  name: "PartnersBanner",
  models: ["page", "blog"],
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  inputs: [
    HeadingType,
    {
      name: "heading",
      type: "string",
      required: true,
      defaultValue: "Companies that trust us",
    },
    {
      name: "content",
      type: "string",
    },
    {
      name: "logos",
      type: "list",
      subFields: [
        {
          name: "logo",
          type: "file",
          allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        },
      ],
    },
  ],
  noWrap: true,
})

Builder.registerComponent(ImageContent, {
  name: "ImageContent",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  inputs: [
    HeadingType,
    { name: "heading", type: "string", required: true, defaultValue: "Unlock Your Business Potential" },
    {
      name: "content",
      type: "string",
      defaultValue:
        "Discover how our cutting-edge technology and expert guidance can transform your business and unlock new levels of success.",
    },
    { name: "image", type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "svg"] },
    ButtonLink,
    { name: "reverse", type: "boolean", defaultValue: false, friendlyName: "Reverse column order?" },
  ],
  noWrap: true,
})

Builder.registerComponent(FAQs, {
  name: "Faqs",
  friendlyName: "Faqs",
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  inputs: [
    {
      name: "FAQs",
      friendlyName: "FAQs",
      type: "list",

      subFields: [
        {
          name: "question",
          type: "reference",
          model: "faq",
        },
      ],
    },
  ],
  noWrap: true,
})

Builder.registerComponent(Newsletter, {
  name: "Newsletter",
  models: ["newsletter"],
  image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "Stay up-to-date with our newsletter",
    },
    {
      name: "content",
      type: "string",
      defaultValue: "Get the latest news, updates, and exclusive offers delivered straight to your inbox.",
    },
    {
      name: "buttonLabel",
      type: "string",
      defaultValue: "Subscribe",
    },
  ],
  noWrap: true,
})
