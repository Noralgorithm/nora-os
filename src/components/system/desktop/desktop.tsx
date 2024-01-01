interface Props {
  children: React.ReactNode
}

export default function Desktop({ children }: Props) {
  return (
    <section className="-z-10 grid h-full w-full grid-rows-7 bg-black p-10">
      {children}
    </section>
  )
}
