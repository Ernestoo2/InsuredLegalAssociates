import React from "react";
import Image from "next/image";
import Link from "next/link";
import { news } from "./type"; 
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function NewsList() {
  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10">
          <span className="block text-lg text-[#253043] mb-1">News</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2E45] leading-tight text-center">The Latest News<br />And Blog From Northman</h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {news.map((item) => (
            <div key={item.id} className="flex md:flex-row max-w-[500px] overflow-hidden">
              <div className="relative w-1/2 ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-6 gap-4">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold  text-[#1E2E45] ">{item.title}</h3>
                  <hr className="text-[#1E2E45]" />
                  <p className="text-[#253043] text-sm ">{item.description}</p>
                </div>                
                <Link
                  href={`/news/${item.id}`}
                  className="inline-block bg-[#1E2E45] hover:bg-[#253043] text-white font-semibold px-6 py-2 transition w-max"
                >
                  Read now
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination placeholder */}
        <div className="flex justify-center items-center active:bg-[777777] mt-10 gap-2">
          <button className="px-3 py-1 ">First</button>
          <MdOutlineKeyboardArrowLeft size={20}/>
          <button className="px-3 py-1 ">1</button>
          <button className="px-3 py-1 ">2</button>
          <button className="px-3 py-1">3</button>
          <MdOutlineKeyboardArrowRight size={20}/>
          <button className="px-3 py-1">Last</button>
        </div>
      </div>
    </section>
  );
} 