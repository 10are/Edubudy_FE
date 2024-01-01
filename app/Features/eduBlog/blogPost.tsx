import React from 'react';
import styles from './BlogPost.module.css';
import {text} from "node:stream/consumers";

interface BlogPostProps {
    title: string;
    category: string;
    tags: string[];
    author: string;
    content: string;
    date: string;
    commentCount: string;
    imageUrl: string;
    userImageUrl: string;
}

const BlogPostUI:
    React.FC<BlogPostProps> = ({title, category, commentCount ,author, content, tags, date, imageUrl, userImageUrl}) => {
    return <>


        <div className="max-w-sm rounded-xl overflow-hidden shadow-sm shadow-white h-max">
            <img className="w-full" style={{height: "25%"}} src={imageUrl} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title} </div>
                <div className="flex flex-row">
                    <div className="basis-1/3 font-black text-sm mb-2 ">{date} </div>
                    {/*<div className="basis-1/2 font-bold text-sm mb-2">@{author}</div>*/}
                </div>
                <p className="text-gray-400 text-base"> {content} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {
                    tags.map((item, index) => (
                        <><span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item}</span></>
                    ))
                }
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="grid gap-x-8 gap-y-4 grid-cols-2">
                    <div className="flex items-center">
                        <img className="w-10 h-10 mr-2.5 rounded-full" src={userImageUrl}
                             alt="Sunset in the mountains"/>

                        {author}
                    </div>
                    <div className="flex items-center">

                        <p className="text-gray-400">241K Yorum - {date}</p>
                    </div>

                </div>
            </div>
        </div>

    </>
    {/*<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">*/
    }

    {/*    /!*<div className="border-b mb-5 flex justify-between text-sm">*!/*/
    }
    {/*    /!*    <div className="text-indigo-600 flex items-center pb-2 pr-2 border-b-2 border-indigo-600 uppercase">*!/*/
    }
    {/*    /!*        <svg className="h-6 mr-3" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"*!/*/
    }
    {/*    /!*              x="0px" y="0px" viewBox="0 0 455.005 455.005"*!/*/
    }
    {/*    /!*             style={{background: "new 0 0 455.005 455.005"}} >*!/*/
    }
    {/*    /!*    <g>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M353.664,232.676c2.492,0,4.928-1.241,6.354-3.504c2.207-3.505,1.155-8.136-2.35-10.343l-173.3-109.126 c-3.506-2.207-8.136-1.154-10.343,2.35c-2.207,3.505-1.155,8.136,2.35,10.343l173.3,109.126 C350.916,232.303,352.298,232.676,353.664,232.676z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M323.68,252.58c2.497,0,4.938-1.246,6.361-3.517c2.201-3.509,1.14-8.138-2.37-10.338L254.46,192.82 c-3.511-2.202-8.139-1.139-10.338,2.37c-2.201,3.51-1.14,8.138,2.37,10.338l73.211,45.905 C320.941,252.21,322.318,252.58,323.68,252.58z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M223.903,212.559c-3.513-2.194-8.14-1.124-10.334,2.39c-2.194,3.514-1.124,8.14,2.39,10.334l73.773,46.062 c1.236,0.771,2.608,1.139,3.965,1.139c2.501,0,4.947-1.251,6.369-3.529c2.194-3.514,1.124-8.14-2.39-10.334L223.903,212.559z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M145.209,129.33l-62.33,39.254c-2.187,1.377-3.511,3.783-3.503,6.368s1.345,4.983,3.54,6.348l74.335,46.219 c1.213,0.754,2.586,1.131,3.96,1.131c1.417,0,2.833-0.401,4.071-1.201l16.556-10.7c3.479-2.249,4.476-6.891,2.228-10.37 c-2.248-3.479-6.891-4.475-10.37-2.228l-12.562,8.119l-60.119-37.38l48.2-30.355l59.244,37.147l-6.907,4.464 c-3.479,2.249-4.476,6.891-2.228,10.37c2.249,3.479,6.894,4.476,10.37,2.228l16.8-10.859c2.153-1.392,3.446-3.787,3.429-6.351 c-0.018-2.563-1.344-4.94-3.516-6.302l-73.218-45.909C150.749,127.792,147.647,127.795,145.209,129.33z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M270.089,288.846c2.187-3.518,1.109-8.142-2.409-10.329l-74.337-46.221c-3.518-2.188-8.143-1.109-10.329,2.409 c-2.187,3.518-1.109,8.142,2.409,10.329l74.337,46.221c1.232,0.767,2.601,1.132,3.953,1.132 C266.219,292.387,268.669,291.131,270.089,288.846z"> </path>*!/*/
    }
    {/*    /!*        <path*!/*/
    }
    {/*    /!*            d="M53.527,192.864c-2.187,3.518-1.109,8.142,2.409,10.329l183.478,114.081c1.232,0.767,2.601,1.132,3.953,1.132 c2.506,0,4.956-1.256,6.376-3.541c2.187-3.518,1.109-8.142-2.409-10.329L63.856,190.455 C60.338,188.266,55.714,189.346,53.527,192.864z"> </path>*!/*/
    }
    {/*    /!*    </g>*!/*/
    }
    {/*    /!*</svg>*!/*/
    }
    {/*    /!*        <a href="#" className="font-semibold inline-block">Cooking BLog</a>*!/*/
    }
    {/*    /!*    </div>*!/*/
    }
    {/*    /!*</div>*!/*/
    }


    {/*        <div className="rounded overflow-hidden shadow-lg flex flex-col">*/
    }
    {/*            <a href="#"></a>*/
    }
    {/*            <div className="relative"><a href="#">*/
    }
    {/*                <img className="w-full"*/
    }
    {/*                     src={imageUrl}*/
    }
    {/*                     alt="Sunset in the mountains"/>*/
    }
    {/*                <div*/
    }
    {/*                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">*/
    }
    {/*                </div>*/
    }
    {/*            </a>*/
    }
    {/*                <a href="#!">*/
    }
    {/*                    <div*/
    }
    {/*                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">*/
    }
    {/*                        {category}*/
    }
    {/*                    </div>*/
    }
    {/*                </a>*/
    }
    {/*            </div>*/
    }
    {/*            <div className="px-6 py-4 mb-auto">*/
    }
    {/*                <a href="#"*/
    }
    {/*                   className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">Simplest*/
    }
    {/*                    Salad Recipe ever</a>*/
    }
    {/*                <p className="text-gray-500 text-sm">*/
    }
    {/*                    {content}*/
    }
    {/*                </p>*/
    }
    {/*            </div>*/
    }
    {/*            <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">*/
    }
    {/*        <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">*/
    }
    {/*            <svg height="13px" width="13px" version="1.1" id="Layer_1"*/
    }
    {/*                 xmlns="http://www.w3.org/2000/svg" x="0px"*/
    }
    {/*                 y="0px" viewBox="0 0 512 512" style={{background: "new 0 0 512 512;"}}>*/
    }
    {/*                <g>*/
    }
    {/*                    <g>*/
    }
    {/*                        <path*/
    }
    {/*                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">*/
    }
    {/*                        </path>*/
    }
    {/*                    </g>*/
    }
    {/*                </g>*/
    }
    {/*            </svg>*/
    }
    {/*            <span className="ml-1">6 mins ago</span>*/
    }
    {/*        </span>*/
    }

    {/*                <span*/
    }
    {/*                      className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">*/
    }
    {/*            <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/
    }
    {/*                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/
    }
    {/*                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">*/
    }
    {/*                </path>*/
    }
    {/*            </svg>*/
    }
    {/*            <span className="ml-1">39 Comments</span>*/
    }
    {/*        </span>*/
    }
    {/*            </div>*/
    }
    {/*        </div>*/
    }
    {/*    </div>*/
    }

    // return <>
    //
    //     {/*<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">*/}
    //     {/*    <div*/}
    //     {/*        className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">*/}
    //     {/*        <img*/}
    //     {/*            src={imageUrl}*/}
    //     {/*            alt="card-image"/>*/}
    //     {/*    </div>*/}
    //     {/*    <div className="p-6">*/}
    //     {/*        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">*/}
    //     {/*            UI/UX Review Check*/}
    //     {/*        </h5>*/}
    //     {/*        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">*/}
    //     {/*            The place is close to Barceloneta Beach and bus stop just 2 min by walk*/}
    //     {/*            and near to "Naviglio" where you can enjoy the main night life in*/}
    //     {/*            Barcelona.*/}
    //     {/*        </p>*/}
    //     {/*    </div>*/}
    //     {/*    <div className="p-6 pt-0">*/}
    //     {/*        <button*/}
    //     {/*            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"*/}
    //     {/*            type="button">*/}
    //     {/*            Read More*/}
    //     {/*        </button>*/}
    //     {/*    </div>*/}
    //     {/*</div>*/}
    //
    //     {/*<div className="flex flex-col md:flex-row pt-8 pr-3 lg:md-6 md:pl-0 sm:pr-3 sm:pl-0">*/}
    //     {/*    <div className="flex-1 pl-4">*/}
    //     {/*        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
    //     {/*            <div className="flex flex-col">*/}
    //     {/*                <div style={{*/}
    //     {/*                    backgroundImage: `url(${imageUrl})`,*/}
    //     {/*                    backgroundSize: 'cover',*/}
    //     {/*                    borderRadius: '10px',*/}
    //     {/*                    height: '200px',*/}
    //     {/*                    padding: '10px',*/}
    //     {/*                }}>*/}
    //     {/*                    <div className="flex flex-col mt-4">*/}
    //     {/*                        <p className="text-2xl font-bold text-gray-900">*/}
    //     {/*                            {title}*/}
    //     {/*                        </p>*/}
    //     {/*                        <div className="flex flex-row items-center mt-4">*/}
    //     {/*                            {category.map((item, index) => (*/}
    //     {/*                                <>*/}
    //     {/*                                    <div className="flex flex-row items-center">*/}
    //     {/*                                        <p className="text-xs font-bold text-gray-900">*/}
    //     {/*                                            {item}*/}
    //     {/*                                        </p>*/}
    //     {/*                                    </div>*/}
    //     {/*                                </>*/}
    //     {/*                            ))}*/}
    //     {/*                        </div>*/}
    //
    //     {/*                    </div>*/}
    {/*
    //     {/*                    </div>*/
    }
    //     {/*                </div>*/}
    //     {/*            </div>*/}
    //     {/*        </div>*/}
    //     {/*    </div>*/}
    //     {/*</div>*/}
    // </>
};

export default BlogPostUI;
