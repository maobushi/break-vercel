import { unlink } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

export async function DELETE() {
	try {
		const filePath = path.join(process.cwd(), "app/page.tsx");
		await unlink(filePath);

		return NextResponse.json(
			{ message: "File deleted successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.log(error);
		return NextResponse.json(
			{ error: "Failed to delete file" },
			{ status: 500 }
		);
	}
}
