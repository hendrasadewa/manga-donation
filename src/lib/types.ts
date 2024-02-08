import type { PostgrestError } from '@supabase/supabase-js';

export interface Book {
	id: string;
	created_at: Date;
	name: string;
	description: string;
	quantity: number;
	image_src: string;
	is_available: true;
	mal_url: string;
}

export interface BooksResponse {
	data: Book[] | null;
	error: PostgrestError | null;
	meta: {
		count: number | null;
		status: number;
	};
}
