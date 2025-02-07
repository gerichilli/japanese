import { getCourses } from '@/lib/api';
import { Course } from '@/models/course';
import Container from '@/components/layout/Container';
import CourseCard from '@/components/course/CourseCard';

export default async function Home() {
  const courses: Course[] = await getCourses();

  return (
    <Container className="w-full py-16">
      <ul className="grid grid-cols-2 gap-8">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course.id}
              imageUrl={course.imageUrl}
              title={course.title}
              description={course.description}
            />
          ))
        ) : (
          <p>No course</p>
        )}
      </ul>
    </Container>
  );
}
