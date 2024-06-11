import { useQuery } from "@tanstack/react-query"
import { QUERY_KEYS } from "../../../../utils/libs/tanstack/query-keys"
import axios from "axios"
import { IPost } from "../../../../types/models"

const {
  VITE_APP_API_URL
} = import.meta.env

export const useIndexPosts = () => {
  return useQuery({
    queryKey: [ QUERY_KEYS.INDEX_POSTS ],
    queryFn: async () => {
      return await axios.get<IPost[]>(`${VITE_APP_API_URL}/posts`)
    }
  })
}