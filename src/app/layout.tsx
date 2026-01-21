import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "เรียนรู้ Looker Studio สำหรับงานส่งเสริมการเกษตร",
    description: "แหล่งเรียนรู้การสร้าง Dashboard ด้วย Looker Studio เพื่อใช้ในงานส่งเสริมการเกษตร ตั้งแต่การเตรียมข้อมูลจนถึงการออกแบบ Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="th">
            <body className="antialiased min-h-screen">
                {children}
            </body>
        </html>
    );
}
