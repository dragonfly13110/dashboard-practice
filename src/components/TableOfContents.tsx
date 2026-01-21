'use client';

import { ChapterSection } from '@/data/chapters';

interface TableOfContentsProps {
    sections: ChapterSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span>📑</span>
                เนื้อหาในบทนี้
            </h3>
            <nav className="space-y-2">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:shadow transition-all flex items-center gap-3 group"
                    >
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 group-hover:bg-primary-500 group-hover:text-white text-sm font-medium transition-colors">
                            {index + 1}
                        </span>
                        <span className="text-gray-600 group-hover:text-gray-800">
                            {section.title}
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );
}
