'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { chapters } from '@/data/chapters';
import { useState } from 'react';

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (chapterId: string) => {
        return pathname === `/chapter/${chapterId}`;
    };

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50"
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
          fixed lg:sticky top-0 left-0 z-40
          w-80 h-screen
          bg-white/80 backdrop-blur-lg
          border-r border-gray-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          overflow-y-auto
        `}
            >
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                    <Link href="/" className="block">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl">📊</span>
                            <div>
                                <h1 className="font-bold text-lg gradient-text">Looker Studio</h1>
                                <p className="text-sm text-gray-500">สำหรับงานส่งเสริมการเกษตร</p>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="p-4">
                    <div className="space-y-2">
                        {chapters.map((chapter) => (
                            <Link
                                key={chapter.id}
                                href={`/chapter/${chapter.id}`}
                                onClick={() => setIsOpen(false)}
                                className={`
                  block p-4 rounded-xl transition-all duration-200
                  ${isActive(chapter.id)
                                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                                        : 'hover:bg-gray-100 text-gray-700'}
                `}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">{chapter.icon}</span>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className={`
                        text-xs font-medium px-2 py-0.5 rounded-full
                        ${isActive(chapter.id) ? 'bg-white/20' : 'bg-gray-100'}
                      `}>
                                                บทที่ {chapter.number}
                                            </span>
                                            <span className={`text-xs ${isActive(chapter.id) ? 'text-white/80' : 'text-gray-400'}`}>
                                                {chapter.duration}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold mt-1 truncate">{chapter.title}</h3>
                                        <p className={`text-sm truncate ${isActive(chapter.id) ? 'text-white/80' : 'text-gray-500'}`}>
                                            {chapter.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white/80">
                    <div className="text-center text-sm text-gray-500">
                        <p>🌾 สำหรับเจ้าหน้าที่ส่งเสริมการเกษตร</p>
                    </div>
                </div>
            </aside>
        </>
    );
}
