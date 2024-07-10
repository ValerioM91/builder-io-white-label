import { type VariantProps, cva } from "class-variance-authority"
import { cn } from "~/utils/cn"

export enum HeadingType {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "h5" = "h5",
  "h6" = "h6",
}

const headingVariants = cva("font-bold tracking-tight", {
  variants: {
    size: {
      xs: "text-lg md:text-xl lg:text-2xl",
      sm: "text-xl md:text-2xl lg:text-3xl",
      md: "text-2xl md:text-3xl lg:text-4xl",
      default: "text-3xl md:text-4xl lg:text-5xl",
      lg: "md:text-5xl lg:text-6xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type Heading = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    headingType?: HeadingType
  }

const Heading = ({ headingType, className, children, size, ...rest }: Heading) => {
  let Ht: React.ElementType = "h2"

  if (headingType && HeadingType[headingType]) {
    Ht = headingType
  }

  return (
    <Ht className={cn(headingVariants({ size }), className)} {...rest}>
      {children}
    </Ht>
  )
}
export default Heading
