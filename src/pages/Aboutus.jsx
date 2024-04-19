import { NavLink } from "react-router-dom";

export default function Latest() {
  return (
    <>
      <main className="min-h-screen flex justify-center items-center flex-col">
        <NavLink className='fixed top-0 left-0 m-4 sm:m-10' to='/'><button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Back to Home</button></NavLink>
        <div className="max-w-3xl mx-auto p-4 mt-10">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ipsum eget enim iaculis pulvinar ut et orci. Nulla facilisi. Nulla facilisi. Sed condimentum sapien non purus efficitur hendrerit. Sed id enim nec tortor faucibus mollis at sed odio. Quisque condimentum ipsum eget magna tempor, a convallis libero rutrum. Donec nec quam nec metus fermentum convallis a a neque. Aenean rutrum, dui nec bibendum tristique, felis tortor iaculis est, eu sagittis lacus velit et felis. Curabitur ut scelerisque magna. Integer ac nisl nec purus ultricies finibus. Integer auctor, enim nec consequat laoreet, enim mi fringilla purus, vel condimentum lectus dui sit amet ipsum.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Vestibulum a arcu eu nulla tincidunt malesuada. Nullam ut eros justo. Integer varius pharetra convallis. Integer in ante id mi facilisis hendrerit in a est. Nulla facilisi. Mauris volutpat eros quis dui volutpat varius. Ut vel suscipit libero. Ut vehicula mi nec purus fringilla, ut commodo nulla pharetra. Fusce vitae felis sit amet elit gravida malesuada. Aliquam vitae dolor in dui congue laoreet. Nam auctor sagittis nunc vitae egestas. Mauris feugiat risus id mauris fermentum, eget bibendum justo tempus. Nulla facilisi. Duis varius libero eget metus bibendum, id luctus eros ultricies. Nam vestibulum eros vitae mauris lobortis viverra.
          </p>
        </div>
      </main>
    </>
  );
}
