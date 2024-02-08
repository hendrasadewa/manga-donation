import { supabase } from '$lib/supabase/client';
import type { Book, BooksResponse } from '$lib/types';
import type { PostgrestSingleResponse } from '@supabase/supabase-js';

export async function load(): Promise<BooksResponse> {
	const response = (await supabase
		.from('books')
		.select('*')) as PostgrestSingleResponse<Book[]>;
	return {
		data: response.data,
		error: response.error,
		meta: {
			count: response.count,
			status: response.status
		}
	};
}
