// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "kpk79uc4", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  apiVersion: '2022-09-09',
  useCdn: true // `false` if you want to ensure fresh data
})