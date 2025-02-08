// src/components/ui/button.jsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

const Button = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
