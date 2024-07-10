import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "../../components/builder"
import Footer from "~/sections/Footer"
import { getMenus } from "~/utils/menuHelpers"
import Header from "~/sections/Header"

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

interface PageProps {
  params: {
    page: string[]
  }
}

export default async function Page(props: PageProps) {
  const builderModelName = "page"

  const getContent = () =>
    builder
      // Get the page content from Builder with the specified options
      .get(builderModelName, {
        userAttributes: {
          // Use the page path specified in the URL to fetch the content
          urlPath: "/" + (props?.params?.page?.join("/") || ""),
        },
        enrich: true,
      })
      // Convert the result to a promise
      .toPromise()

  const getFooterData = () =>
    builder.getAll("menu", {
      includeRefs: true,
      noTraverse: false,
      query: {
        "data.showInFooter": true,
      },
    })

  const getNewsletterData = () => builder.get("newsletter", { enrich: true }).toPromise()

  const [content, footerData, newsletterData] = await Promise.all([getContent(), getFooterData(), getNewsletterData()])

  const footerMenus = await getMenus(footerData)

  return (
    <>
      {/* Render the Builder page */}
      <Header menus={footerMenus} />
      <RenderBuilderContent content={content} model={builderModelName} options={{ enrich: true }} />
      <RenderBuilderContent content={newsletterData} model="newsletter" />
      <Footer footerMenus={footerMenus} />
    </>
  )
}
