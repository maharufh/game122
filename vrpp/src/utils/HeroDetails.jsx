export function HeroDetails() {
  let h1 = {
    id: 101,
    name: "yash",
    place: "Karnataka",
    movies: 23,
    imgUrl:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/yash-arrogant-242454224-1x1.jpg?VersionId=rFnDc3msUjgkBYPYHEX_zGtufMoU7Dor",
  };

  let h2 = {
    id: 102,
    name: "prabhas",
    place: "Chennai",
    movies: 21,
    imgUrl:
      "https://static.punjabkesari.in/multimedia/2023_10image_18_04_165867572rgfetgthy.jpg",
  };

  let h3 = {
    id: 103,
    name: "Mahesh",
    place: "Hydrabad",
    movies: 13,
    imgUrl:
      "https://images.forbesindia.com/blog/wp-content/uploads/media/images/2015/Dec/img_84347_mahesh_babu_sm.jpg?im=Resize,width=500,aspect=fit,type=normal",
  };

  let h4 = {
    id: 104,
    name: "NTR",
    place: "Karnataka",
    movies: 25,
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7MyHHyxejG2zu7awp3_CtviFNeMwe6gVhea396L0q3tYeJqpjf_L89ZK4iaoIkERCWc&usqp=CAU",
  };

  // THIS MUST BE AN ARRAY 👇
  return [h1, h2, h3, h4];
}
