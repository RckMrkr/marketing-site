import { useStaticQuery, graphql } from "gatsby"
import { useState } from "react";

export default () => {

  const { site: {siteMetadata: {prices, defaultCurrency}} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultCurrency
            prices {
              migration {
                DKK
                Dollars
                Euro
              }
              integration {
                DKK
                Dollars
                Euro
              }
              monitoring {
                DKK
                Dollars
                Euro
              }
            }
          }
        }
      }      
    `
  );

  const [currency, setCurrency] = useState(defaultCurrency);

  return { prices, currency, setCurrency };

}