const getComments = async (id) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/comments?item_id=${id}`,
  );
  return res.json();
};

export default getComments;