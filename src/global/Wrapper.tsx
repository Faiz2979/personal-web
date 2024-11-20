import cn from "clsx";
import { ReactNode } from "react";

interface props {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function Section(props: props) {
  return (
    <section
      id={props.id}
      className={cn("px-[30px] lg:px-[100px] py-[82px]", props.className)}
    >
      {props.children}
    </section>
  );
}