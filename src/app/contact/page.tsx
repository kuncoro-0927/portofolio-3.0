export default function Contact() {
  return (
    <section className="">
      <h2 className="xl:text-4xl font-medium">My Tech Stack</h2>

      <div className="flex flex-col mt-14 gap-6">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="text-abu-abu text-sm font-medium">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="border border-white/10 bg-hitam px-4 py-3"
              placeholder="Cristiano Ronaldo"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-abu-abu text-sm font-medium">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="border border-white/10 bg-hitam px-4 py-3"
              placeholder="cristianoronaldo@gmail.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-abu-abu text-sm font-medium">
            How we can help you?
          </label>
          <textarea
            name="message"
            placeholder="Tell me what you need with..."
            rows={5}
            className="border border-white/10 bg-hitam px-4 py-3"
            id="message"
          ></textarea>
        </div>

        <button className="px-4 py-2 border border-transparent bg-white text-black w-fit rounded-full text-sm font-medium hover:bg-black hover:border hover:border-white hover:text-white duration-300 cursor-pointer">Let&apos;s get in touch</button>
      </div>
    </section>
  );
}
