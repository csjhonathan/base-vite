/**
 * @description Interface for paths of the app
 * @file This file defines the paths of the app
 * @since 0.1.0
 */

import { ITemplateProps } from '../templates';

/**
 * @interface IPath
 * @property {string} id - The ID of the path
 * @property {string} display - The display of the path
 * @property {string} path - The path of the path
 * @property {React.LazyExoticComponent<()=> JSX.Element>} element - The element of the path
 * @description The Path interface
 */
export interface IPath {
	id: string;
	display?: string;
	path: string;
	element: React.LazyExoticComponent<()=> JSX.Element>;
	template: React.LazyExoticComponent<(props: ITemplateProps)=> JSX.Element>;
}