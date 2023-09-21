import {stripe} from '@/utils/index'
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){
    const params = req.nextUrl.searchParams;
    const startAfter = params.get('startAfter');
    const limit = params.get('limit');
    const products = await stripe.products.list({
        active: true,
        limit: limit ? Number(limit) : 10,
        starting_after: startAfter ? String(startAfter) : undefined,
    });
    return Response.json(products);
}