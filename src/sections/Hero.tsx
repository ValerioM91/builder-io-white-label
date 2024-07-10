import Image from "next/image"
import Heading, { type HeadingType } from "~/components/Heading"
import Link from "~/components/Link"

type HeroProps = {
  heading: string
  headingType: HeadingType
  content?: string
  link?: {
    text: string
    url: string
    colorSchema: "primary" | "secondary" | "tertiary"
    variant: "solid" | "outline"
  }
  image?: string
}

const Hero = ({ heading, headingType, link, content, image }: HeroProps) => {
  return (
    <section className="w-full bg-gradient-to-r from-base-200 to-base-100 py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6 md:space-y-8">
            <Heading headingType={headingType} size="lg">
              {heading}
            </Heading>
            {content && <p className="max-w-[600px] text-lg md:text-xl">{content}</p>}
            <div>
              {link?.url && link.text && (
                <Link href={link.url} variant={link.variant} colorSchema={link.colorSchema}>
                  {link.text}
                </Link>
              )}
            </div>
          </div>
          <Image
            src={image || "./placeholder-themed.svg"}
            width={600}
            height={600}
            alt="Hero Image"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
