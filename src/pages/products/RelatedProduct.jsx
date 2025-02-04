/* eslint-disable react/prop-types */
import Card from "../../components/card/Card"
import Heading from "../../components/ui/Heading"
const RelatedProduct = ({relatedProducts}) => {
  return (
     <div className="w-full mt-12">
                <Heading className=" font-semibold mb-4">Related Products</Heading>
                <div className=" flex items-center flex-wrap justify-center gap-6">
                  {relatedProducts.slice(0,3).map((item) => (
                    <Card key={item.id} product={item} />
                  ))}
                </div>
              </div>
  )
}

export default RelatedProduct