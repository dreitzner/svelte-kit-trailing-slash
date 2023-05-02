import { dev } from '$app/environment';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const trailingSlash = 'ignore';

export const load = async ({ params, url }) => {
	const output = {
		pathname: url.pathname
	};

	console.log('+page.server.js pathname', url.pathname);

	return output;
};
