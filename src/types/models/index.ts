
/**
 * @description Interface for Post model
 * @file This file defines the Post model
 * @since 0.1.0
 */

/**
 * @type IPost
 * @property {number} id - The ID of the post
 * @property {string} title - The title of the post
 * @property {number} views - The views of the post
 * @description The Post model
 */
export interface IPost {
	id: number;
	title: string;
	views: number;
}