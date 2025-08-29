import React from 'react';

const ALL_PEOPLE = [
  {
    name: 'Pankaj Kumar',
    wrote: `I always struggled to understand the fine print of my health insurance plan, but with PolicyBandhu, everything is so clear and easy to grasp. It's a lifesaver!`,
    picture: 'https://media.licdn.com/dms/image/v2/D4D03AQEw_q_h29ku0g/profile-displayphoto-shrink_400_400/B4DZWKWKXbGkAg-/0/1741782820811?e=1759363200&v=beta&t=KLbljh_2ml8MTYZ2UVv3Rtkiq5DWcRxH12rJygh2ePc'
  },
  {
    name: 'Pradumn Kumar',
    wrote: `I wish I had found PolicyBandhu earlier! It made navigating my health insurance so simple. No more confusion or uncertainty`,
    picture: `https://media.licdn.com/dms/image/v2/D5603AQFuUlqld5QPTA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1676384620234?e=1759363200&v=beta&t=NILTTm2BgUZjEadg8q4zvehHM5mNDxJOpW9TlBZGufY`
  },
  {
    name: 'Rashmi Das',
    wrote: `I’ve been confused for months about my health insurance. PolicyBandhu broke it down in such simple terms. Now I can make informed decisions!`,
    picture: 'https://media.licdn.com/dms/image/v2/D5603AQF3VqFZyz2s3Q/profile-displayphoto-shrink_400_400/B56Zc.Enp4HUAg-/0/1749093088712?e=1759363200&v=beta&t=CuJ52zFOOBYTHpXM-5Gce91rpz4xN0iBMQOQV_sggsI'
  },
  {
    name: 'Paras Ahi',
    wrote: `Great tool! I was able to ask questions about my policy and get instant, easy-to-understand answers. Will definitely use it again.`,
    picture: 'https://media.licdn.com/dms/image/v2/C4D03AQFoO8JKhBUuqg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1654098183644?e=1759363200&v=beta&t=H_fivw68fwOJpKjp1iEe1ox-8qiKRenJ_g6qV577qL4',
  },
  {
    name: 'Srishti Srivastav',
    wrote: 'I always found insurance jargon overwhelming. PolicyBandhu made it easy for me to comprehend and gave me confidence to choose the right plan.',
    picture: 'https://media.licdn.com/dms/image/v2/D4D03AQFPZQ_hDIwJSA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732553760781?e=1759363200&v=beta&t=moXxgNJ63nKY1YR1evotMzGM6lRyuJ4l28ZWIH8Puj4',
  },
  {
    name: 'Tanishq Saini',
    wrote: 'I had no idea what my health insurance policy actually covered. PolicyBandhu’s clear explanations turned all that around for me.',
    picture: 'https://media.licdn.com/dms/image/v2/C4D03AQHrzTku6I-yrQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1640623159014?e=1759363200&v=beta&t=e0fzt18N8JV7E4wGzDfT3235C1YSFWe3qp9lkd-23Yg',
  },
  {
    name: 'Vimmi Priyadarshini',
    picture: 'https://media.licdn.com/dms/image/v2/C4E03AQFIDwqYR-xRyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1654815774394?e=1759363200&v=beta&t=FFMYm6aG-N2ssTjR1EwbYhm5LCAc_-XTVz_ZeOm4FcY',
    wrote: `PolicyBandhu helped me understand all the complex clauses in my policy. I now feel secure knowing what I'm covered for`
  }
];

function Testimony() {
  const items = [...ALL_PEOPLE, ...ALL_PEOPLE]; // duplicate for infinite scroll illusion

  return (
    <div className="overflow-hidden relative w-full bg-[#F3F3FF] py-12">
  <div className="text-center mb-8">
    <p className="text-black text-3xl font-semibold inline">Loved by people like </p>
    <span className="text-[#7979DC] text-3xl font-semibold">you</span>
  </div>

  {/* This is the scrolling container */}
  <div className="w-full overflow-hidden">
    <div className="animate-marquee flex gap-6 w-[200%] min-h-72">
      {items.map(({ name, picture, wrote }, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-80 bg-white rounded-xl p-6 shadow-md whitespace-normal"
        >
          <div className="flex items-center gap-4 mb-3">
            <img src={picture} alt={name} className="h-12 w-12 rounded-full object-cover" />
            <div className="text-sm font-medium text-black">{name}</div>
          </div>
          <div className="text-sm text-black">{wrote}</div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

export default Testimony;
