import React from 'react';
import Product from './product';
import Title from "../global/title";
import { StaticQuery, graphql } from "gatsby";
const getProducts = graphql`{
                                sale: allContentfulWeeklySale {
                                    edges {
                                        node {
                                            id
                                            title
                                            price
                                            image {
                                                fluid(maxHeight: 426) {
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
                    <Title title=" Weekly Sale"></Title>
                    <div className="row">
                        {data.sale.edges.map(({node:product})=>{
                            return <Product key={product.id} product={product} />;
                        })}
                    </div>
                </div>
            </section>)
        }}/>
    );
}
