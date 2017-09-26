import Controller from './controller'

/**
 * 核心控制器
 */
export class PageController extends Controller {
  constructor (page) {
    super(page)

    this.type = 'page'
  }
}
