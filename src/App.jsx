import { RouterProvider } from "react-router";
import router from "./router.jsx";
  import { ToastContainer, toast } from 'react-toastify';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
function App() {
  return(
<>
   <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />;
      <ToastContainer />
   </QueryClientProvider>
 
  </>
  )
  
  
}

export default App;