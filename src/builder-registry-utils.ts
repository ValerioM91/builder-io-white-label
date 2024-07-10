import { type Input } from "@builder.io/sdk"

export const HeadingType: Input = {
  name: "headingType",
  defaultValue: "h2",
  enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
  type: "enum",
  required: true,
}

export const ButtonLink: Input = {
  name: "link",
  type: "object",
  subFields: [
    {
      name: "text",
      type: "string",
      required: true,
    },
    {
      name: "url",
      type: "url",
      required: true,
    },
    {
      name: "colorSchema",
      type: "string",
      defaultValue: "primary",
      enum: ["primary", "secondary", "tertiary"],
    },
    {
      name: "variant",
      type: "string",
      defaultValue: "solid",
      enum: ["solid", "outline"],
    },
    {
      name: "external",
      type: "boolean",
      defaultValue: false,
      friendlyName: "Open in a new tab?",
    },
  ],
}
