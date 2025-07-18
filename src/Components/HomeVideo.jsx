

function HomeVideo() {
  return (
    
      <div className="max-w-7xl ">
          <div className="flex justify-center items-center ">
          <div className=" max-w-full videoContainer w-full sm:w-4/5 md:w-3/4 sm:h-72 md:h-80 lg:h-[600px] bg-[#010616] rounded-md overflow-hidden shadow-lg">
            <video
            src="/public/BannerVideo/BannerVideo.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        </div>
   
  )
}

export default HomeVideo
