// See https://svelte.dev/docs/kit/types#app.d.ts

import type { SanityLocals } from '@sanity/sveltekit';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// eslint-disable-next-line @typescript-eslint/no-empty-object-type
		interface Locals extends SanityLocals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
