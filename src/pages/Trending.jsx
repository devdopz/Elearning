import CourseGrid from "../components/Course/CourseGrid";
import Header from "../components/Header/Header";

export default function Trending() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-20">
        <CourseGrid />
      </main>
    </>
  );
}
