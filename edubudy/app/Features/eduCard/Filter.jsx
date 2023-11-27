import React from 'react'

function Filter() {
    const filters = [
        { label: 'Sınav Türü', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Yaş', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Cinsiyet', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Ders', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Girilecek Sınav', options: ['Option 1', 'Option 2', 'Option 3'] },
      ];
  return (
    <div className="p-4 w-auto md:w-1/6 bg-mainColor text-white overflow-y-auto max-h-screen">
            <h1 className="text-2xl font-bold mb-4">Filtreleme</h1>
            {filters.map((filter, index) => (
            <div key={index} className="mb-4">
                <label className="block text-sm font-medium mb-1">{filter.label}</label>
                <select className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-600 text-white text-sm">
                {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex}>{option}</option>
                ))}
                </select>
            </div>
            ))}
        </div>
  )
}

export default Filter