"use client";

import { useState } from "react";
import Link from "next/link";

const blogs = [
  {
    id: "1",
    title: "Which field hockey stick is best for my position",
    desc: "Beginner field hockey players should choose a stick with...",
    image: "/blog1.png",
    date: "29-Dec-2022",
    category: "Sports",
  },
  {
    id: "2",
    title: "After Match Football Care Tips",
    desc: "Unless you are at a professional football club...",
    image: "/blog2.png",
    date: "29-Dec-2022",
    category: "Sports",
  },
  {
    id: "3",
    title: "The Daileigh Fashion Guide",
    desc: "The Daileigh’s Ashleigh Hutchinson wants her readers...",
    image: "/blog3.png",
    date: "29-Dec-2022",
    category: "Fashion",
  },
  {
    id: "4",
    title: "Food Junk to Food Jewels",
    desc: "Transform unhealthy food habits into healthy lifestyle...",
    image: "/blog4.png",
    date: "29-Dec-2022",
    category: "Food",
  },
  {
    id: "5",
    title: "Basic + Advanced Broccoli Recipes",
    desc: "Learn simple and advanced broccoli dishes...",
    image: "/blog5.png",
    date: "29-Dec-2022",
    category: "Food",
  },
];

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = blogs.filter((blog) => {
    return (
      (category === "All" || blog.category === category) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-white min-h-screen">
      {/* breadcrumb */}
      <div className="bg-gray-100 px-6 py-4 text-sm text-gray-500">
        Home &gt; Blogs
      </div>

      <div className="px-6 py-8">
        {/* filter */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 px-4 py-3 rounded-lg text-gray-500 hover:border-red-400 focus:border-red-500 outline-none"
          >
            <option value="All">Select Category</option>
            <option value="Sports">Sports</option>
            <option value="Fashion">Fashion</option>
            <option value="Food">Food</option>
          </select>

          <input
            placeholder="Search Blog"
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-200 px-4 py-3 rounded-lg placeholder:text-gray-400 text-gray-600 hover:border-red-400 focus:border-red-500 outline-none"
          />

          <select className="border border-gray-200 px-4 py-3 rounded-lg text-gray-500 hover:border-red-400 outline-none">
            <option>Show: 12</option>
          </select>
        </div>

        {/* grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div className="group border rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer bg-white">
                
                {/* image */}
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    className="w-full h-56 object-cover transition duration-300 group-hover:scale-105"
                  />

                  {/* read more overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-white text-base font-semibold opacity-0 group-hover:opacity-100 transform group-hover:scale-110 transition duration-300">
                      Read More
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-gray-700 text-lg hover:text-red-500 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    {blog.desc}
                  </p>

                  <div className="mt-4 text-sm text-gray-400 border-t pt-3">
                    📅 {blog.date}
                  </div>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}