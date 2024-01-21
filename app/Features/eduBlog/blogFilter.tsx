import React from 'react';
import styles from './BlogPost.module.css';
import {text} from "node:stream/consumers";


function BlogFilter() {
    const filters = [
        { label: '', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Yaş', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Cinsiyet', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Ders', options: ['Option 1', 'Option 2', 'Option 3'] },
        { label: 'Girilecek Sınav', options: ['Option 1', 'Option 2', 'Option 3'] },
      ];
    return <>
        <div className="p-4 w-full max-w-xs mx-auto bg-mainColor rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Filtreleme</h1>
            <form>
                <div>
                    <div className="flex items-center">
                        <label htmlFor="voice-search" className="sr-only">Ara</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="voice-search"
                                   className="bg-gray-700  border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Bloglar da arayın ..." required/>
                        </div>
                        <button type="submit"
                                className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Ara
                        </button>
                    </div>
                    <div>
                        <label htmlFor="countries_multiple"
                               className="block mb-2 mt-10 text-sm font-medium text-gray-900 dark:text-white">Kategori
                            Seçin</label>
                        <select multiple id="countries_multiple"
                                className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="#1">Teknoloji (9)</option>
                            <option value="#1">Dersler</option>
                            <option value="#2">YKS</option>
                            <option value="#3">Sınavlar</option>
                            <option value="#4s">Matematik</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="countries_multiple"
                               className="block mb-2 mt-10 text-sm font-medium text-gray-50 dark:text-white">Etiket
                            Seçin</label>
                        <select multiple id="countries_multiple"
                                className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="#1">Teknoloji</option>
                            <option value="#2">Yazılım</option>
                            <option value="#3">Geliştirme</option>
                            <option value="#4s">Süreci</option>
                            <option value="#4s">Programlama</option>
                            <option value="#4s">Programlama Dilleri</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="countries_multiple"
                               className="block mb-2 mt-10 text-sm font-medium text-gray-50 dark:text-white">Tarih
                            Seçin</label>
                        <input type="datetime-local" id="voice-search"
                               className="bg-gray-700 border border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Bloglar da arayın ..." required/>
                        <input type="datetime-local" id="voice-search"
                               className="bg-gray-700 border mt-2.5 border-gray-300 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Bloglar da arayın ..." required/>
                    </div>
                </div>
            </form>

            {/*{filters.map((filter, index) => (*/}
            {/*    <div key={index} className="mb-4">*/}
            {/*        <label className="block text-sm font-medium mb-1">{filter.label}</label>*/}
            {/*        <select*/}
            {/*            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-gray-600 text-white text-sm">*/}
            {/*            {filter.options.map((option, optionIndex) => (*/}
            {/*                <option key={optionIndex}>{option}</option>*/}
            {/*            ))}*/}
            {/*        </select>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    </>
}

export default BlogFilter;
