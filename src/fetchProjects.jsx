import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_KEY,
  environment: import.meta.env.VITE_ENVIRONMENT,
  accessToken: import.meta.env.VITE_API_KEY
})


export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState([])

    const getData = async() => {
      try {
        const response = await client.getEntries({content_type: 'projects'})

        const projects = response.items.map((item) => {
          const {title, url, image} = item.fields
          const id = item.sys.id
          const img = image?.fields?.file?.url
          return {title, url, id, img}
        })

        setProject(projects)

        setLoading(false)
      } catch (error) {
        console.log(error.response)
        setLoading(false)
      }
    }

    useEffect(() => {
      getData()
    }, [])

    return {loading, project}
}


