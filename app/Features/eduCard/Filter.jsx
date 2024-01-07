'use client';
import React from 'react';
import Select from 'react-select';

function EnhancedFilter() {
  const filters = [
    { label: 'Sınav Türü', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Yaş', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Cinsiyet', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Ders', options: ['Option 1', 'Option 2', 'Option 3'] },
    { label: 'Girilecek Sınav', options: ['Option 1', 'Option 2', 'Option 3'] },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#f2f2f2',
      borderColor: state.isFocused ? '#1f1f1f' : '#ccc',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#0080FF' : '#f2f2f2',
      color: state.isSelected ? '#fff' : '#333',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#333',
    }),
  };

  return (
    <div className="p-4 w-full max-w-xs mx-auto bg-mainColor rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Filtreleme</h1>
      {filters.map((filter, index) => (
        <div key={index} className="mb-2">
          <label className="block text-sm font-medium mb-1">{filter.label}</label>
          <Select
            options={filter.options.map((option) => ({ value: option, label: option }))}
            styles={customStyles}
            isMulti
          />
        </div>
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Filtrele
      </button>
    </div>
  );
}

export default EnhancedFilter;

