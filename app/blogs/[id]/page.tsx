"use client";

import { useParams } from "next/navigation";

const blogs = [
  {
    id: "1",
    title:
      "Which field hockey stick is best for my position and/or skill level",
    image: "/blog1.png",
    date: "29-Dec-2022",
    content:
      "Beginner field hockey players should choose a stick with a wood or fiberglass composition. Wood sticks will provide the most forgiving feel and the best touch on the ball, while fiberglass sticks also provide an excellent first touch with a lightweight feel. Having a flexible stick will help them learn the fundamentals, so they can get accustomed to trapping the ball without too much rebound off the stick. It should feature a larger hitting surface to help players get a touch on the ball. A maxi toe or hook head shape will offer you the largest surface area, ensuring you make great contact with the ball when trapping it or driving it down the field.",
  },
  {
    id: "2",
    title: "After Match Football Care Tips",
    image: "/blog2.png",
    date: "29-Dec-2022",
    content:
      "Unless you are at a professional football club, taking proper care after the match is important. Hydrate yourself properly, stretch muscles, and give your body time to recover. Store your gear correctly and clean your shoes. These habits will help improve performance and prevent injuries.",
  },
  {
    id: "3",
    title: "The Daileigh Fashion Guide",
    image: "/blog3.png",
    date: "29-Dec-2022",
    content:
      "The Daileigh’s Ashleigh Hutchinson wants her readers to understand how to style simple outfits. Minimal clothing with proper accessories creates elegant fashion. Choose neutral colors and combine them with statement pieces.",
  },
  {
    id: "4",
    title: "Food Junk to Food Jewels",
    image: "/blog4.png",
    date: "29-Dec-2022",
    content:
      "Transform unhealthy food habits into healthy lifestyle choices. Replace junk foods with fresh vegetables, fruits, and balanced meals. Small improvements in daily diet can create big health benefits over time.",
  },
  {
    id: "5",
    title: "Basic + Advanced Broccoli Recipes",
    image: "/blog5.png",
    date: "29-Dec-2022",
    content:
      "Broccoli is a powerful superfood. Basic recipe includes steamed broccoli with salt and butter. Advanced recipes include broccoli pasta, stir fry, and baked broccoli with cheese. These meals are healthy and easy to prepare.",
  },
];

export default function BlogDetails() {
  const params = useParams();
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return <div className="p-10">Blog not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-8">

        <img
          src={blog.image}
          className="w-full h-[420px] object-cover rounded-xl mb-6"
        />

        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          {blog.title}
        </h1>

        <div className="text-sm text-gray-500 mb-6">
          {blog.date}
        </div>

        <p className="text-gray-700 leading-8 whitespace-pre-line">
          {blog.content}
        </p>

      </div>
    </div>
  );
}