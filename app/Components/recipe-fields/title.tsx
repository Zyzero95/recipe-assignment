import { Recipe } from "@/app/Interfaces/interfaces"

export default function Title({data}: {data: Recipe}) {
  return (<h1>{data.name}</h1>);
}
