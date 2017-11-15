import Zygote from './utils/global'

window.zygote = new Zygote()
zygote.inject()
	.hydrate()