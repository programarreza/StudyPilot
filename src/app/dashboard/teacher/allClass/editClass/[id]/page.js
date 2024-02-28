import EditClassForm from "@/components/EditClassForm";

const getClassById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/clases/${id}`, {
      cache: "no-store",
    });
    console.log(id);

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditClass({ params }) {
  const { id } = params;
  const {cls} = await getClassById(id);
  const { title, description, price } = cls;

  return (
    <EditClassForm
      id={id}
      title={title}
      description={description}
      price={price}
    />
  );
}
