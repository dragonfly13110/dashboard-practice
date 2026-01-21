
import React from 'react';

export const BadTable = () => (
    <div className="bg-red-50 p-4 rounded-lg border border-red-200 w-full overflow-x-auto">
        <div className="mb-2 text-red-700 font-semibold flex items-center gap-2">
            <span>❌</span> ตารางที่ผิด (Bad Data)
        </div>
        <table className="w-full text-sm text-left text-gray-600">
            <thead>
                <tr>
                    <th className="border border-red-200 p-2 bg-red-100" colSpan={3}>ข้อมูลเกษตรกร (หัวตารางหลายแถว)</th>
                </tr>
                <tr>
                    <th className="border border-red-200 p-2 bg-red-100">ชื่อ - สกุล</th>
                    <th className="border border-red-200 p-2 bg-red-100">พืชที่ปลูก</th>
                    <th className="border border-red-200 p-2 bg-red-100">พื้นที่</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-red-200 p-2 bg-white">สมชาย</td>
                    <td className="border border-red-200 p-2 bg-white">ข้าว</td>
                    <td className="border border-red-200 p-2 bg-white">15 ไร่</td>
                </tr>
                <tr>
                    <td className="border border-red-200 p-2 bg-white"></td>
                    <td className="border border-red-200 p-2 bg-white">มะม่วง</td>
                    <td className="border border-red-200 p-2 bg-white">5</td>
                </tr>
                <tr>
                    <td className="border border-red-200 p-2 bg-white font-bold">รวม</td>
                    <td className="border border-red-200 p-2 bg-white"></td>
                    <td className="border border-red-200 p-2 bg-white font-bold">20</td>
                </tr>
            </tbody>
        </table>
        <div className="mt-2 text-xs text-red-600">
            * ปัญหา: หัวตารางรวม, มีช่องว่าง, มีหน่วยปนตัวเลข, มีแถวรวม
        </div>
    </div>
);

export const GoodTable = () => (
    <div className="bg-green-50 p-4 rounded-lg border border-green-200 w-full overflow-x-auto">
        <div className="mb-2 text-green-700 font-semibold flex items-center gap-2">
            <span>✅</span> ตารางที่ถูกต้อง (Good Data)
        </div>
        <table className="w-full text-sm text-left text-gray-600">
            <thead>
                <tr>
                    <th className="border border-green-200 p-2 bg-green-100">ชื่อ_สกุล</th>
                    <th className="border border-green-200 p-2 bg-green-100">พืช</th>
                    <th className="border border-green-200 p-2 bg-green-100">พื้นที่_ไร่</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-green-200 p-2 bg-white">สมชาย</td>
                    <td className="border border-green-200 p-2 bg-white">ข้าว</td>
                    <td className="border border-green-200 p-2 bg-white">15</td>
                </tr>
                <tr>
                    <td className="border border-green-200 p-2 bg-white">สมชาย</td>
                    <td className="border border-green-200 p-2 bg-white">มะม่วง</td>
                    <td className="border border-green-200 p-2 bg-white">5</td>
                </tr>
                <tr>
                    <td className="border border-green-200 p-2 bg-white">สมหญิง</td>
                    <td className="border border-green-200 p-2 bg-white">ข้าว</td>
                    <td className="border border-green-200 p-2 bg-white">10</td>
                </tr>
            </tbody>
        </table>
        <div className="mt-2 text-xs text-green-600">
            * แก้ไข: หัวตารางแถวเดียว, เติมข้อมูลให้เต็ม, แยกหน่วยออก, ไม่มีแถวรวม
        </div>
    </div>
);
