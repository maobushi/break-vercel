import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
	try {
		// JSONファイルのパスを取得
		const jsonDirectory = path.join(process.cwd(), "db");
		const fileContents = await fs.readFile(
			jsonDirectory + "/2024-11-05.json",
			"utf8"
		);

		// JSONをパース
		const data = JSON.parse(fileContents);

		// レスポンスを返す
		console.log(data);
		return NextResponse.json(data);
	} catch (error) {
		// エラーハンドリング
		console.log(error);
		return NextResponse.json(
			{ error: "ファイルの読み込みに失敗しました" },
			{ status: 500 }
		);
	}
}
