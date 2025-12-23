import React from "react";
import Image from "next/image";
import { longestCase, news, NewsProps } from "./type";
import Link from "next/link";

interface NewsDetailProps {
    newsItem: NewsProps;
}

export default function NewsDetail({ newsItem }: NewsDetailProps) {  

    const shuffled = news.filter((item) => item.id !== newsItem.id).sort(() => 0.5 - Math.random());
    const recommended = shuffled.slice(0, 3);
    
    return (
        <section className="w-full py-16 bg-[#F6F6F2]">
            <div className="max-w-6xl mx-auto px-4">
                {/* News Main Image and Detail */}
                <div className="relative w-full h-72 mb-8">
                    <Image
                        src={newsItem.image}
                        alt={newsItem.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </div>
                <div className="flex flex-col items-center">
                    <span className="block text-xl text-[#253043] mb-1">News Detail</span>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-4">{newsItem.title}</h3>
                            <p className="text-[#253043] text-base mb-6 whitespace-pre-line">{newsItem.detail}</p>
                        </div>
                    </div>
                    <aside className="w-full md:w-80 flex-shrink-0">
                        <div className="p-6 mb-8">
                            <h4 className="text-lg font-semibold mb-4">Recommendation News</h4>
                            <ul className="space-y-4">
                                {recommended.map((item) => (
                                    <li key={item.id} className="flex items-center gap-4">
                                        <div className="relative w-26 h-30 flex-shrink-0">
                                            <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#1E2E45] text-sm">{item.title}</h3>
                                            <hr className="my-3 text-[#253043]" />
                                            <p className="text-xs text-[#253043]">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* Longest Handled Cases Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-[#1E2E45] mb-10">Longest Handled Cases</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {longestCase.map((item) => (
                            <div key={item.id} className="flex flex-col items-center p-6">
                                <div className="relative w-full h-56 mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1E2E45] mb-2 text-center">{item.title}</h3>
                                <p className="text-[#253043] text-sm text-center mb-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-[#253043] text-base mt-4">
                        <p>Insured Legal Associates has a proven track record of helping clients achieve justice in property, business, family, and criminal law. Our expertise and dedication have set new standards in the legal field, ensuring every client receives the best possible outcome.</p>
                    </div>
                </div>

                {/* Related News Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-10 text-[#1E2E45]">Related News</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {shuffled.map((item) => (
                            <div key={item.id} className=" p-6 flex flex-col items-center">
                                <div className="relative w-full h-40 mb-4">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1E2E45] mb-2 text-center">23 Cases Have Successfully</h3>
                                <hr className="w-full my-2 border-[#253043]" />
                                <p className="text-[#253043] text-sm mb-4 text-center">{item.description}</p>
                                <Link href={`/news/${item.id}`} className="bg-[#1E2E45] hover:bg-[#253043] text-white font-semibold px-6 py-2 w-full text-center">Read now</Link>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
} 