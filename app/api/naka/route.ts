import { NextResponse } from "next/server";
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
    try {
        // 現在の日付を取得してファイル名を作成
        const today = new Date();
        const fileName = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}.json`;
        
        // dbフォルダのパスを作成
        const dbDir = path.join(process.cwd(), 'db');
        const filePath = path.join(dbDir, fileName);

        // dbフォルダが存在しない場合は作成
        await fs.mkdir(dbDir, { recursive: true });

        // JSONファイルを作成（既存のファイルは上書き）
        const data = {
            accessTime: today.toISOString(),
            message: "Hello World"
        };
        
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ 
            message: "File created successfully",
            fileName: fileName 
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: "Failed to create file" },
            { status: 500 }
        );
    }
}
