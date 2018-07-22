import Config from '@/config/config'

/**
 * This class can be called to define the meta tags from a page.
 *
 * @param title | Page title
 */

class Meta {
  constructor (title) {
    this.title = Config.application.name
    this.titleTemplate = '%s - ' + title
    this.meta = [
      {
        chatset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'author',
        content: Config.application.meta.author
      },
      {
        name: 'description',
        content: Config.application.meta.description
      },
      {
        name: 'keywords',
        content: Config.application.meta.keywords
      },
      {
        name: 'theme-color',
        content: Config.application.meta.themeColor
      }
    ]
    this.link = [
      {
        rel: 'favicon',
        href: ''
      }
    ]
    this.base = {
      href: '/'
    }
  }
}

export default Meta