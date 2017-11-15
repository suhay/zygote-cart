import Zygote from './utils/global'

window.zygote = new Zygote()
zygote.inject()
	.hydrate()
	.addProduct({
		name: 'test 1'
	})