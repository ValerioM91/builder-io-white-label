import { forwardRef } from "react"
import { cn } from "~/utils/cn"

type InputProps = React.ComponentPropsWithoutRef<"input">

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest }, ref) => {
  return (
    <input
      data-1p-ignore // This disables 1Password from auto-filling the input
      data-lpignore // This disables LastPass from auto-filling the input
      ref={ref}
      className={cn(
        "placeholder:text-content-light relative z-10 block w-full rounded-md border border-base-300 bg-white px-5 py-3 text-content-base",
        className,
      )}
      {...rest}
    />
  )
})
Input.displayName = "Input"

export default Input
