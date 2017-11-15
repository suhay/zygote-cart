import Zygote from './utils/global'

window.zygote = new Zygote()
zygote.inject()
	.addProduct("Test 1")
	.addProduct("Test 2")