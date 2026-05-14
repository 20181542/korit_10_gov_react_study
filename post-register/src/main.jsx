import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Global } from '@emotion/react'
import { global } from './styles/global.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

//서버 전역 상태 => 서버로부터 가저온 데이터 즉 응답받은데이터를 전역상태로 관리 (캐싱)
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <Global styles={global} />
         <App />
      </BrowserRouter>
   </QueryClientProvider>
)