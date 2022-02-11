import React from "react"
import classname from "classname"

const formatMapping = {
  DKK: price => `DKK ${price}`,
  Dollars: price => `$${price}`,
  Euro: price => `${price}€`,
}

export default ({ prices, currency, includeCurrency, className }) => {
  const price = prices[currency].toLocaleString("en-us")

  return includeCurrency ? (
    <span className={classname("price", className)}>
      {formatMapping[currency](price)}
    </span>
  ) : (
    <span className={classname("price", className)}>{price}</span>
  )
}
