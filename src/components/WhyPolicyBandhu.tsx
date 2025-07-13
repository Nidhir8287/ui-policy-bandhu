import React from 'react'

function WhyPolicyBandhu() {
    
    const images = [
        {
            src: '/informationNotAdvice.png',
            header: 'Information, not advice',
            text: 'Zero bias, pure facts'
        },
        {
            src: '/toThePoint.png',
            header: 'To-the-point answers',
            text: 'Not fluff, just what you need'
        },
        {
            src: '/clarifier.png',
            header: 'Clarifies polciy-never recommends',
            text: 'We explain, you decide'
        },
        {
            src: '/noSales.png',
            text: 'No "buy now", affiliate links or recommendation',
            header: 'No Sales pitches'
        }
    ]
  return (
    <div className='bg-white'>
        <div className='mx-28 flex flex-col gap-5 py-20'>
            <span className='text-3xl text-black font-semibold'>
                Why <span className='text-[#7979DC]'>PolicyBandhu?</span>
            </span>
            <div className='flex gap-8 justify-between'>
                {
                    images.map((image)=>(
                        <div className='flex flex-col gap-2 items-center'>
                            <img src={image.src} />
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium text-lg text-black max-w-52 leading-tight'>{image.header}</span>
                                <span className='font-thin text-sm text-black max-w-52'>{image.text}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default WhyPolicyBandhu


{/* <section className="section-padding px-4">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-high">
            Why PolicyBadhu?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
            {usps.map((usp, index) => (
              <Card
                key={index}
                className="p-4 md:p-6 hover:shadow-lg transition-all hover-scale bg-card border-border/50 card-shadow animate-fade-in"
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="text-primary mt-1 flex-shrink-0">
                      {usp.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-high text-base md:text-lg">
                        {usp.title}
                      </h3>
                      <p className="text-sm text-mid leading-relaxed">
                        {usp.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
        