import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const itemsUrl = searchParams.get('url');

    if (!itemsUrl) {
        return new NextResponse('Missing URL parameter', { status: 400 });
    }

    try {
        // Basic validation to ensure we're only proxying GitHub URLs
        const urlObj = new URL(itemsUrl);
        if (!urlObj.hostname.includes('github.com') && !urlObj.hostname.includes('githubusercontent.com')) {
            return new NextResponse('Invalid URL host', { status: 400 });
        }

        const token = process.env.GITHUB_TOKEN;
        const headers: HeadersInit = {};

        if (token) {
            headers['Authorization'] = `token ${token}`;
        }

        const response = await fetch(itemsUrl, { headers });

        if (!response.ok) {
            return new NextResponse(`Failed to fetch image: ${response.statusText}`, { status: response.status });
        }

        const blob = await response.blob();
        const buffer = await blob.arrayBuffer();

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'image/jpeg',
                'Cache-Control': 'public, max-age=3600'
            }
        });

    } catch (error) {
        console.error('Proxy error:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
