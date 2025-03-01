import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card"
      className={cn(
        "bg-white text-primary rounded-xl border border-zinc-200 shadow-sm dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-800",
        className
      )}
      {...props} />)
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props} />)
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-title"
      className={cn("leading-none font-semibold tracking-tight", className)}
      {...props} />)
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-description"
      className={cn("text-zinc-500 text-sm dark:text-zinc-400", className)}
      {...props} />)
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("p-4 pt-0", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    (<div
      data-slot="card-footer"
      className={cn("flex items-center p-4 pt-0", className)}
      {...props} />)
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
