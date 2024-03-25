type PolymorphicAsProp<E extends React.ElementType> = {
   as?: E
}

type PolymorphicProps<E extends React.ElementType> = React.PropsWithChildren<
   React.ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>
>
