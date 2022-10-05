export default function Terms() {
    return (
      <div className=" rounded-xl center">
        <div className="mx-auto w-96 max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-16 lg:px-8">
          <div className="lg:w-xl">
            <h2 className="text-4xl  font-bold tracking-tight text-gray-700 sm:text-2xl" id="newsletter-headline">
              Terms and Condtions
            </h2>
            <p>
                <h5>
                    Terms and condtion is written to make prop
                </h5>
            </p>
          </div>
        </div>
        <div className="relative w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
      {/* Image */}
      <div className="flex h-40 bg-blue-500 rounded-xl items-center justify-center">
        <h1 className="absolute mx-auto text-center right text-2xl text-white">
          Image goes here
        </h1>
      </div>

      {/* Description */}
      <div className="p-2 border-b-2">
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          beatae nulla, atque et sunt ad voluptatum quidem impedit numquam quia?
        </h6>
      </div>

      {/* Tech stack used */}
      <div className="flex flex-wrap items-center m-2">
        <span className=" border border-blue-300 rounded-2xl px-2 my-3 mx-3">
          #React
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #Redux
        </span>
        <span className=" border border-blue-300 rounded-2xl px-2 my-1 mx-1">
          #Javascript
        </span>
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
        <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
          Go to Project
        </button>
        <button className="border-2 border-blue-600 rounded-2xl text-blue-600 shadow-sm p-1 px-2 m-2">
          Github
        </button>
      </div>
      <div className="flex flex-wrap border-t-2 items-center m-auto">
        <span className="text-blue-700 px-2 my-3 mx-3">follow</span>
        <span className="m-2 items-center">like</span>
        <span className="m-2 items-right">retweet</span>

      </div>
      </div>
    </div>
    )
  }
  