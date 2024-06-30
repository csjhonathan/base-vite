import { Router } from './router';

import { QueryClient, QueryClientProvider } from 'react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router/>
		</QueryClientProvider>
	);
}

export default App;
