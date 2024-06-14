import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { Paths } from './paths';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{
					Paths.map(({ path, element: Element }) => (
						<Fragment key={path}>
							<Route 
								path={path}
								element={
									<Suspense>
										<Element/>
									</Suspense>
								}
							/>
						</Fragment>
					))
				}
			</Routes>
		</BrowserRouter>
	);
};