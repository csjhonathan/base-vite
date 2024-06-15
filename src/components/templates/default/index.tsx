import { NavLink } from 'react-router-dom';

import { getNavigationPaths } from '../../../router/paths';

import classNames from 'classnames';

import { ITemplateProps } from '../../../types/templates';

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '../../atoms/navigation-menu';

const DefaultTemplate = ({ children }: ITemplateProps) => {

	const navigationPaths = getNavigationPaths();

	return (
		<div className='h-screen'>
			<div className='container h-full'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							{
								navigationPaths.map((path) => (
									<NavLink key={path.id} to={path.path}>
										{({ isActive }) => (
											<NavigationMenuLink 
												href={path.path}
												className={
													navigationMenuTriggerStyle({
														className: classNames(
															'border-b-[2px] border-transparent h-14',
															'transition-all duration-300 rounded-none',
															'hover:text-slate-900 hover:border-slate-500 hover:bg-slate-100',
															{
																'text-blue-500 border-b-black': isActive,
																'text-gray-700': !isActive
															}
														)
													})
												}>
												{path.display}
											</NavigationMenuLink>
										)}
									</NavLink>
								))
							}
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className='pt-8'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default DefaultTemplate;