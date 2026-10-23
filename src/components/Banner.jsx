import myBanner from "../assets/banner-stack.png";

function Banner() {
    return (
        <div className="flex max-w-4xl mx-auto my-4 ">
            <div className="w-[50%] my-20">
                <h1><span className="text-black text-4xl">Build Your ideal</span>  <br /> <span className="text-4xl text-pink-400">Development Stack</span> </h1>
                <p className="my-4">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex gap-3">
                    <button className="bg-pink-400 rounded-lg px-2 py-1 w-42.5 h-10.5 ">Explore Technologies</button>
                    <button className="bg-pink-400 rounded-lg px-2 py-1 w-42.5 h-10.5 ">Learn More</button>
                </div>
            </div>
            <div className="w-[50%]">
                <img src={myBanner} alt="" />
            </div>



        </div>
    )
}

export default Banner;