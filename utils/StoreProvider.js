"use client"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function StoreProvider({children}) {
 
  return (
    <QueryClientProvider client={queryClient}  >
        {children}
    </QueryClientProvider>
  )
}
