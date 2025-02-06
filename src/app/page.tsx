import { getCourses } from "@/lib/api";
import { Course } from "@/models/course";
import Image from 'next/image';
import Container from '@/components/layout/Container';


export default async function Home() {
  const courses: Course[] = await getCourses();

  return <Container className="w-full max-w-4xl p-20">
    <ul className='flex gap-6'>
      {
        courses && courses.length > 0 ?courses.map((course) => (
          <li key={course.id} className="border border-[#C1ECE4] rounded-lg p-4">
             <div className="relative w-full h-48">
              <Image
                src={course.imageUrl}
                alt={course.title}
                fill
                className="object-cover rounded"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h2 className="text-lg font-semibold mt-2">{course.title}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
          </li>
        )) : <p>No course</p>
      }
    </ul>
  </Container>;
}
