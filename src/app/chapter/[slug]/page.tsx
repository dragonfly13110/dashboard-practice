import { notFound } from 'next/navigation';
import { chapters } from '@/data/chapters';
import Sidebar from '@/components/Sidebar';
import ContentSection from '@/components/ContentSection';
import ChapterNavigation from '@/components/ChapterNavigation';
import TableOfContents from '@/components/TableOfContents';

interface ChapterPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return chapters.map((chapter) => ({
        slug: chapter.id,
    }));
}

export function generateMetadata({ params }: ChapterPageProps) {
    const chapter = chapters.find(c => c.id === params.slug);

    if (!chapter) {
        return {
            title: 'ไม่พบหน้าที่ต้องการ',
        };
    }

    return {
        title: `บทที่ ${chapter.number}: ${chapter.title} | Looker Studio Learning`,
        description: chapter.subtitle,
    };
}

export default function ChapterPage({ params }: ChapterPageProps) {
    const chapter = chapters.find(c => c.id === params.slug);

    if (!chapter) {
        notFound();
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <main className="flex-1 lg:ml-0">
                {/* Hero Header */}
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white">
                    <div className="max-w-4xl mx-auto px-6 py-12 lg:px-8">
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <span className="text-sm">บทที่ {chapter.number}</span>
                            <span>•</span>
                            <span className="text-sm">{chapter.duration}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-5xl">{chapter.icon}</span>
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{chapter.title}</h1>
                                <p className="text-xl text-white/80">{chapter.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-6 py-12 lg:px-8">
                    {/* Table of Contents */}
                    <TableOfContents sections={chapter.sections} />

                    {/* Sections */}
                    {chapter.sections.map((section, index) => (
                        <ContentSection key={section.id} section={section} index={index} />
                    ))}

                    {/* Navigation */}
                    <ChapterNavigation currentChapterId={chapter.id} />
                </div>
            </main>
        </div>
    );
}
