
export default function WeNeedAChange() {
  return (
    <div className="bg-white">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="absolute hidden h-full w-1/2 lg:block" />
          <div className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-3xl font-bold tracking-tight text-green-primary">
                    We need a change
                  </h1>
                  <ul class="list-disc ml-3 indent-2">
                    <li > Despite increasing pressures on food supply, about one-third of the total food produced for human consumption is wasted. </li>
                    <li >Smallscale farmers lack resources needed to comply with industry standards. Especially monitoring environmental and supply chain variables.</li>

                    <li>The quality of food products are not adequately maintained during primary production, processing, distribution & storage due to lack of neccesary infrastructure and technology.</li>

                    <li>post harvest storage services aren't accessible for most of these farmers. As a result, millions of tons of produce are lost due to poor storage. </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              src="/farmer1.png"
              alt="A farmer carrying axe and water"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
