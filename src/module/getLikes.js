const getLikes = async () => {
  // const res = await fetch(
  //   'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/likes',
  // );
  // await console.log(res);

  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/likes',
  );
  return res.json();
};

export default getLikes;
