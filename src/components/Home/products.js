import React from 'react';
import Product from './product';
import Title from "../global/title";
import { StaticQuery, graphql } from "gatsby";
const getProducts = graphql`{
                                products: allContentfulProteinItem{
                                    edges {
                                        node {
                                            id
                                            title
                                            price
                                            image{
                                                fluid(maxHeight:426){
                                                src
                                                ...GatsbyContentfulFluid_tracedSVG
                                            
                                                }
                                            }
                                        }
                                    }
                                }
                            }` 
export default function Products() {
    return (
        <StaticQuery query={getProducts} render={data =>{
            return(<section className="py-5">
                <div className="container">
                    <Title title=" Our Products"></Title>
                    <div className="row">
                        {data.products.edges.map(({node:product})=>{
                            return <Product key={product.id} product={product} />;
                        })}
                    </div>
                </div>
            </section>)
        }}/>
    );
}
