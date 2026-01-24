interface CouseSlugPageProps {
  params: Promise<{ courseSlug: string }>;
}

export default async function CourseSlugPage({ params }: CouseSlugPageProps) {
  const { courseSlug } = await params;
  return <div>CourseSlugPage: {courseSlug}</div>;
}
