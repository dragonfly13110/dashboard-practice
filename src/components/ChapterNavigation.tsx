'use client';

import Link from 'next/link';
import { chapters } from '@/data/chapters';

interface ChapterNavigationProps {
    currentChapterId: string;
}

export default function ChapterNavigation({ currentChapterId }: ChapterNavigationProps) {
    const currentIndex = chapters.findIndex(c => c.id === currentChapterId);
    const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
    const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

    return (
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
            {/* Previous */}
            {prevChapter ? (
                <Link
                    href={`/chapter/${prevChapter.id}`}
                    className="group flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100 transition-all"
                >
                    <span className="text-2xl group-hover:-translate-x-1 transition-transform">←</span>
                    <div className="text-left">
                        <div className="text-sm text-gray-500">บทก่อนหน้า</div>
                        <div className="font-semibold text-gray-800 group-hover:text-primary-600">
                            {prevChapter.icon} {prevChapter.title}
                        </div>
                    </div>
                </Link>
            ) : (
                <div />
            )}

            {/* Next */}
            {nextChapter ? (
                <Link
                    href={`/chapter/${nextChapter.id}`}
                    className="group flex items-center gap-3 p-4 rounded-xl hover:bg-gray-100 transition-all"
                >
                    <div className="text-right">
                        <div className="text-sm text-gray-500">บทถัดไป</div>
                        <div className="font-semibold text-gray-800 group-hover:text-primary-600">
                            {nextChapter.icon} {nextChapter.title}
                        </div>
                    </div>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            ) : (
                <Link
                    href="/"
                    className="group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg transition-all"
                >
                    <div className="text-right">
                        <div className="text-sm text-white/80">เสร็จสิ้น!</div>
                        <div className="font-semibold">กลับหน้าหลัก 🎉</div>
                    </div>
                    <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            )}
        </div>
    );
}
