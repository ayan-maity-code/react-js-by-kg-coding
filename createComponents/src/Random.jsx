function Random() {
  let random = Math.round(Math.random() * 100);
  return <h1>Random number is : {random}</h1>;
}

export default Random;
