import React from "react";
import ReactPlayer from "react-player";

import work1 from "../assets/video1.mp4";
import work2 from "../assets/video2.mp4";
import work3 from "../assets/video3.mp4";


const Works = () => {
  const works = [work1, work2, work3]

  return (
    <section className="w-full mx-auto mt-40 mb-20">
      <h1 className="capitalize text-3xl font-semibold mb-8 text-center">
        my <span className="text-green-626">Works</span>
      </h1>
      <div className="flex flex-col gap-10 items-center">
        {works.map(work => (
          <video src={work}
            loop
            muted
            controls
            className="video"
        ></video>
        ))}
      </div>
    </section>
    )
}

export default Works;

