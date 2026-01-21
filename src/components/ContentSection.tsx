'use client';

import { ChapterSection } from '@/data/chapters';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Scorecard, BarChart, PieChart } from './charts/ChartVisuals';
import { BadTable, GoodTable } from './charts/TableVisuals';

interface ContentSectionProps {
    section: ChapterSection;
    index: number;
}

export default function ContentSection({ section, index }: ContentSectionProps) {
    return (
        <section
            id={section.id}
            className="mb-12 scroll-mt-8"
        >
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg shadow-lg">
                    {index + 1}
                </span>
                <h2 className="text-2xl font-bold text-gray-800">
                    {section.title}
                </h2>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-gray-800 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-table:border-collapse prose-td:border prose-td:border-gray-200 prose-td:px-4 prose-td:py-2 prose-th:border prose-th:border-gray-200 prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        table: ({ node, ...props }) => <table className="w-full border-collapse my-4 text-sm" {...props} />,
                        thead: ({ node, ...props }) => <thead className="bg-gray-100" {...props} />,
                        tr: ({ node, ...props }) => <tr className="even:bg-gray-50" {...props} />,
                        th: ({ node, ...props }) => <th className="border border-gray-200 px-4 py-2 font-semibold text-left" {...props} />,
                        td: ({ node, ...props }) => <td className="border border-gray-200 px-4 py-2" {...props} />,
                        a: ({ node, ...props }) => <a className="text-primary-600 hover:text-primary-700 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                        blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 bg-primary-50 rounded-r-lg italic text-gray-700" {...props} />,
                    }}
                >
                    {section.content}
                </ReactMarkdown>
            </div>

            {/* Tips */}
            {section.tips && section.tips.length > 0 && (
                <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">💡</span>
                        <h4 className="font-semibold text-green-800">เคล็ดลับ</h4>
                    </div>
                    <ul className="space-y-1">
                        {section.tips.map((tip, i) => (
                            <li key={i} className="text-green-700 flex items-start gap-2">
                                <span className="text-green-500">•</span>
                                {tip}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Warnings */}
            {section.warnings && section.warnings.length > 0 && (
                <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">⚠️</span>
                        <h4 className="font-semibold text-amber-800">ข้อควรระวัง</h4>
                    </div>
                    <ul className="space-y-1">
                        {section.warnings.map((warning, i) => (
                            <li key={i} className="text-amber-700 flex items-start gap-2">
                                <span className="text-amber-500">•</span>
                                {warning}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Examples */}
            {section.examples && section.examples.length > 0 && (
                <div className="mt-6 space-y-4">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        <span>📋</span>
                        ตัวอย่าง
                    </h4>
                    {section.examples.map((example, i) => (
                        <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                            <h5 className="font-medium text-gray-800 mb-2">{example.title}</h5>
                            <p className="text-gray-600 mb-4">{example.description}</p>

                            {(example.before || example.after) && (
                                <div className="grid md:grid-cols-2 gap-4">
                                    {example.before && (
                                        <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                                            <div className="text-sm font-medium text-red-700 mb-2">❌ ก่อนแก้ไข</div>
                                            <pre className="text-sm text-red-600 whitespace-pre-wrap">{example.before}</pre>
                                        </div>
                                    )}
                                    {example.after && (
                                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                                            <div className="text-sm font-medium text-green-700 mb-2">✅ หลังแก้ไข</div>
                                            <pre className="text-sm text-green-600 whitespace-pre-wrap">{example.after}</pre>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            {/* Visuals */}
            {section.visual === 'scorecard-demo' && (
                <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span>📊</span> ตัวอย่างการแสดงผลจริง
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className='flex flex-col gap-4'>
                            <h5 className="font-medium text-gray-600 text-center">Scorecard</h5>
                            <Scorecard title="เกษตรกรทั้งหมด" value="1,245" subtext="ราย" trend="up" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h5 className="font-medium text-gray-600 text-center">Bar Chart</h5>
                            <BarChart
                                title="พื้นที่ปลูกแยกตามตำบล"
                                data={[
                                    { label: 'บางระทึก', value: 450, color: 'bg-green-500' },
                                    { label: 'ศาลายา', value: 320, color: 'bg-green-400' },
                                    { label: 'คลองโยง', value: 280, color: 'bg-green-300' },
                                ]}
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h5 className="font-medium text-gray-600 text-center">Pie Chart</h5>
                            <PieChart
                                title="สัดส่วนชนิดพืช"
                                data={[
                                    { label: 'ข้าว', value: 60, color: '#34D399' },
                                    { label: 'ไม้ผล', value: 30, color: '#FBBF24' },
                                    { label: 'ผัก', value: 10, color: '#60A5FA' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            )}
            {section.visual === 'bad-vs-good-table' && (
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <BadTable />
                    <GoodTable />
                </div>
            )}
        </section>
    );
}
