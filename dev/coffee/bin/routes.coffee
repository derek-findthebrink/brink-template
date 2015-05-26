express = require('express')
router = express.Router()

siteTitle = 'systemT | template'
siteUrl = 'localhost:3000'

router.get('/', (req,res,next)->
	res.render('pages/home', {title: siteTitle }))

module.exports = router