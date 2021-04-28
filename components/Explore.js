import ExploreItem from './ExploreItem'
import Image from 'next/image'

function Explore() {
  return (
    <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-3 md:gap-6 px-6 lg:gap-12 lg:px-12 lg:flex h-92">
      <ExploreItem
        title="The Starry Night"
        description="The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence."
        src={
          <Image
            className="object-cover w-full"
            src="/starynight.png"
            width={800}
            height={960}
            alt="The Starry Night"
          />
        }
      />
      <ExploreItem
        title="Christ in the Storm on the Sea of Galilee"
        description="The Storm on the Sea of Galilee is a 1633 oil-on-canvas painting by the Dutch Rembrandt van Rijn.It was previously in the Isabella Stewart Gardner Museum in Boston but was stolen in 1990 and remains missing."
        src={
          <Image
            className="object-cover w-full"
            src="/sea.png"
            width={800}
            height={960}
            alt="The Storm on the Sea of Galilee"
          />
        }
      />
      <ExploreItem
        title="Girl with a Pearl Earring"
        description="Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries,  it became known by its present title towards the end of the 20th."
        src={
          <Image
            className="object-cover w-full"
            src="/girl.png"
            width={800}
            height={960}
            alt="Girl with a Pearl Earring"
          />
        }
      />
    </div>
  )
}

export default Explore
