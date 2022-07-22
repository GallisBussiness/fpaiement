export class Pack {
  name: string;
  price: number;
  options: [PackOption?];
}

export class PackOption {
  name: string;
  price: number;
}
