
import React from 'react';

export const Scorecard = ({ title, value, subtext, trend }: { title: string, value: string, subtext?: string, trend?: 'up' | 'down' | 'neutral' }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow border border-gray-200 w-full max-w-[240px]">
            <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
            <div className="text-3xl font-bold text-gray-800 mb-2">{value}</div>
            {subtext && <div className="text-sm text-gray-400">{subtext}</div>}
            {trend && (
                <div className={`text-xs flex items-center mt-2 ${trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-gray-500'}`}>
                    <span className="mr-1">{trend === 'up' ? '▲' : trend === 'down' ? '▼' : '•'}</span>
                    {trend === 'up' ? 'เพิ่มขึ้น' : trend === 'down' ? 'ลดลง' : 'คงที่'}
                </div>
            )}
        </div>
    );
};

export const BarChart = ({ title, data }: { title: string, data: { label: string, value: number, color?: string }[] }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    return (
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
            <h3 className="text-gray-700 font-semibold mb-4">{title}</h3>
            <div className="space-y-3">
                {data.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                        <div className="w-24 text-sm text-gray-600 text-right truncate">{item.label}</div>
                        <div className="flex-1 h-6 bg-gray-100 rounded-r overflow-hidden relative">
                            <div
                                className={`h-full rounded-r ${item.color || 'bg-blue-500'}`}
                                style={{ width: `${(item.value / maxValue) * 100}%` }}
                            ></div>
                        </div>
                        <div className="w-12 text-sm text-gray-500">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const PieChart = ({ title, data }: { title: string, data: { label: string, value: number, color: string }[] }) => {
    // Create conic-gradient string
    let currentAngle = 0;
    const total = data.reduce((acc, curr) => acc + curr.value, 0);
    const gradientParts = data.map(item => {
        const start = currentAngle;
        const percentage = (item.value / total) * 100;
        const end = currentAngle + percentage;
        currentAngle = end;
        return `${item.color} ${start}% ${end}%`;
    });

    return (
        <div className="bg-white p-4 rounded-lg shadow border border-gray-200 flex flex-col items-center">
            <h3 className="text-gray-700 font-semibold mb-4 w-full text-left">{title}</h3>
            <div className="flex items-center gap-6">
                <div
                    className="w-32 h-32 rounded-full"
                    style={{ background: `conic-gradient(${gradientParts.join(', ')})` }}
                ></div>
                <div className="space-y-2">
                    {data.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-gray-600">{item.label}</span>
                            <span className="text-gray-400">({item.value}%)</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
