import React from "react";
import ReactPlayer from "react-player";

import work1 from "../assets/video1.mp4";
import work2 from "../assets/video2.mp4";
import work3 from "../assets/video3.mp4";


const Works = () => {
  const works = [work1, work2, work3]

  return (
    <section className="w-11/12 mx-auto mt-10 sm:w-3/4 lg:w-11/12 xl:w-3/4 2xl:w-[64rem]">
      <h1 className="capitalize text-4xl font-semibold mb-8 text-center">
        my <span className="text-green-626">Works</span>
      </h1>
      <div className="flex flex-col items-center">
        {works.map(work => (
          <ReactPlayer
          url={work}
          loop
          muted
          controls
          style={{marginBottom: "4rem"}}
        />
        ))}
      </div>
    </section>
    )
}

export default Works;

