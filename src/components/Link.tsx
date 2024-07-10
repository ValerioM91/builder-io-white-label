import NextLink, { type LinkProps } from "next/link"
import { type VariantProps } from "class-variance-authority"
import { cn } from "~/utils/cn"
import { buttonStyles } from "~/utils/buttonVariants"

export type Link = LinkProps &
  VariantProps<typeof buttonStyles> & {
    children?: React.ReactNode
    className?: string
  }

const Link = ({ children, className, variant, colorSchema, fullWidth, uppercase, size, ...rest }: Link) => {
  return (
    <NextLink {...rest} className={cn(buttonStyles({ variant, colorSchema, fullWidth, uppercase, size }), className)}>
      {children}
    </NextLink>
  )
}

export default Link
