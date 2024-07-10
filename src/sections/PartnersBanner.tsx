import { cn } from "~/utils/cn"

import Heading from "~/components/Heading"

type PartnersBannerProps = {
  heading: string
  content?: string
  logos?: { logo: string }[]
}

const PartnersBanner = ({ heading, content, logos }: PartnersBannerProps) => {
  if (!logos) return null

  return (
    <section className="bg-base-100 py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="space-y-3 text-center">
          <Heading size="xs" className="uppercase">
            {heading}
          </Heading>
          {content && (
            <p className="max-w-screen-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{content}</p>
          )}
        </div>
      </div>

      <div
        className={cn(
          "container pointer-events-none relative mx-auto mt-10 flex gap-10 overflow-hidden",
          "from-base-100 to-transparent before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 before:bg-gradient-to-r",
          "from-base-100 to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 after:bg-gradient-to-l",
        )}
      >
        <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10">
          {logos.map(({ logo }, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] object-contain"
            />
          ))}
        </div>
        <div aria-hidden="true" className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-10">
          {logos.map(({ logo }, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="aspect-square max-w-[clamp(10rem,28vmin,20rem)] object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
export default PartnersBanner
