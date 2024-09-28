type Meta = {
   id: string,
   title: string,
   date: string,
   tags: string[],
}

type BlogPost = {
   meta: Meta,
   Content:  ReactElement<any, string | JSXElementConstructor<any>>,
}