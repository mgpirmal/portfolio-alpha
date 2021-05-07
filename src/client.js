// used to talk to sanity

import sanityClient from "@sanity/client"

export default sanityClient({
    projectId:"yqk7ggtf",
    dataset: "production"
})