import Link from 'next/link';
import Card from '@/components/ui/Card';
import LinkButton from '@/components/ui/LinkButton';

export default function CourseCard({
  title,
  description,
  imageUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <Card imageUrl={imageUrl}>
      <h2 className="text-2xl font-semibold text-black mb-2">{title}</h2>
      <p className="text-gray-600 pr-4">{description}</p>
      <div className="flex justify-end gap-4 mt-auto pt-8">
        <LinkButton href="" variant="secondary">
          Details
        </LinkButton>
        <LinkButton href="">Learn</LinkButton>
      </div>
    </Card>
  );
}
