import Controller from './controller'

/**
 * 核心控制器
 */
export class FrameController extends Controller {
  constructor (frame) {
    super(frame)

    this.type = 'frame'
  }

  build (options, instance) {
    console.log(options)
  }
}
