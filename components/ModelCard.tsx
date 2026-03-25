import Link from "next/link";
interface ModelCardProps {
  id: string;
  firstName: string;
  lastName: string;
  images: { url: string }[];
}

const ModelCard = ({id, firstName, lastName, images, gender }: ModelCardProps & { gender: string }) => {
  return (
    <Link href={`/models/${gender}/${id}`} className="model-card block">
      <div className="aspect-[3/4] overflow-hidden bg-secondary">
        <img 
          src={images[0].url} 
          alt={firstName}
          className="model-card-image"
          loading="lazy"
        />
      </div>
      <h3 className="model-card-name">{firstName} {lastName}</h3>
    </Link>
  );
};

export default ModelCard;
