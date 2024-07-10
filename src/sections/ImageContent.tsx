import Image from "next/image"
import Heading, { type HeadingType } from "~/components/Heading"
import Link from "~/components/Link"
import { cn } from "~/utils/cn"

type ImageContentProps = {
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
  reverse?: boolean
}

const ImageContent = ({ heading, headingType, content, link, image, reverse }: ImageContentProps) => {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <Image
            src={image || "./placeholder-themed.svg"}
            width={600}
            height={600}
            alt="Content Image"
            className={cn("mx-auto aspect-square overflow-hidden rounded-xl object-cover", {
              "order-1": reverse,
            })}
          />
          <div className="space-y-6 md:space-y-8">
            <Heading headingType={headingType}>{heading}</Heading>
            {content && <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">{content}</p>}
            <div>
              {link?.url && link.text && (
                <Link href={link.url} variant={link.variant} colorSchema={link.colorSchema}>
                  {link.text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ImageContent
