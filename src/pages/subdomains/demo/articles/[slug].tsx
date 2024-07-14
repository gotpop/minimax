import AppTheme from "@layouts/app-theme"
import ArticlePage from "src/themes/demo/components/ArticlePage"
import Footer from "@components/Footer"
import GridConfig from "@components/GridConfig"
import MegaMenu from "@components/HeaderMegaMenu"
import MobileMenuTrigger from "@components/MobileMenuTrigger"
import Surface from "src/themes/demo/components/Surface"
import { articlesData } from "src/themes/demo/data/articlesData"
import h from "@utils/jsxFactory"

type PageProps = {
  slug: string
}

const pageArticlePage = async ({
  slug,
}: PageProps): Promise<JSX.Element> => {
  const slugPage = "/articles/" + slug
  const varStr = "--transition-article: article-"
  const articlesArr = Array.from(articlesData.entries())

  const articlePage = articlesArr.map(
    ([key, article], index) => {
      const { href } = article

      return href === slugPage ? (
        <ArticlePage
          {...article}
          style={
            "view-transition-name: article-" +
            (index + 1) +
            "; " +
            varStr +
            (index + 1)
          }
        />
      ) : null
    }
  )

  return (
    <AppTheme title={`Gallery | ${slug}`} subdomain="demo">
      <GridConfig>
        <MobileMenuTrigger />
        <MegaMenu />
        <Surface>
          <div class="inner">{articlePage}</div>
        </Surface>
        <Footer />
      </GridConfig>
    </AppTheme>
  )
}

export default pageArticlePage
