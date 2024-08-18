import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// forces everything to lowercase, so its recommended you dont have anything url related (like public images) in upper case
	return NextResponse.rewrite(
		new URL(request.nextUrl.pathname.toLowerCase(), request.url)
	);
}
