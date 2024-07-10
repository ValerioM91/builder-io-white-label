import Link from "~/components/Link"
import type { Menu } from "~/utils/menuHelpers"

type FooterProps = {
  footerMenus: Menu[]
}

const Footer = ({ footerMenus }: FooterProps) => {
  return (
    <footer className="w-full bg-content-base py-12 text-gray-50 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
          {footerMenus.map((menu, index) => (
            <div className="space-y-4" key={menu.id + index}>
              <h3 className="text-lg font-bold md:text-xl">{menu.name}</h3>
              <ul className="space-y-2">
                {menu.links.map((link, index) => {
                  return (
                    <li key={link.id + index}>
                      <Link href={link.href} variant="link" colorSchema="whitePrimary" prefetch={false}>
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm md:mt-16 lg:mt-20">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
