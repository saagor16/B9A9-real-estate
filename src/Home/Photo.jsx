const Photo = () => {
  return (
    <div className="container mx-auto">
      <section className="py-6 dark:bg-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1688742009886-844256fb6ca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzb3J0JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1700985958192-f2045c1c8e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzb3J0JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1666101131755-bfe156da4825?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc29ydCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
            />
            <img
              className="object-cover w-full dark:bg-gray-500 aspect-square"
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc29ydCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photo;
