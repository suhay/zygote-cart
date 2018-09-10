import dotenv from 'dotenv'
import {
	submitStripeOrder,
	sendSparkpostConfirmation,
} from '../export/server'
dotenv.config({ silent: true })

export async function handler({ body }, _, callback) {

	const res = await submitStripeOrder({
		stripeApiSecret: process.env.STRIPE_API_SECRET,
		body,
		verbose: true,
	})

	await sendSparkpostConfirmation({
		sparkpostApiSecret: process.env.SPARKPOST_API_SECRET,
		body,
		from: `noreply@escaladeinc.com`,
		bcc: `krose@escaladesports.com`,
		logo: `https://project-boilerplate.netlify.com/backend-logo.png`,
		verbose: true,
	})

	callback(null, {
		statusCode: 200,
		body: JSON.stringify(res),
	})

}