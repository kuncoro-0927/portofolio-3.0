"use client";

import { useActionState } from "react";
import { useReveal } from "../hooks/useReveal";
import { sendContact, type ContactState } from "../actions/contact";

const initial: ContactState = { ok: false, message: "" };

export default function Contact() {
  const [state, action, pending] = useActionState(sendContact, initial);

  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const divref = useReveal<HTMLDivElement>({ delay: 0.3 });
  return (
    <section className="">
      <h2 ref={h2ref} className="text-2xl lg:text-4xl font-medium">
        Let&apos;s Talk
      </h2>

      <form action={action}>
        <div ref={divref} className="flex flex-col mt-8 lg:mt-14 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-abu-abu text-sm font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="border border-white/10 bg-hitam px-4 py-3"
                placeholder="Cristiano Ronaldo"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-abu-abu text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="border border-white/10 bg-hitam px-4 py-3"
                placeholder="cristianoronaldo@gmail.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-abu-abu text-sm font-medium"
            >
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

          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
          <button
            type="submit"
            disabled={pending}
            className="px-4 py-2 border border-transparent bg-white text-black w-fit rounded-full text-sm font-medium hover:bg-black hover:border hover:border-white hover:text-white duration-300 cursor-pointer"
          >
            {pending ? "Loading..." : "Let's get in touch"}
          </button>

          {state.message && (
            <p
              role="status"
              className={state.ok ? "text-green-500 text-sm" : "text-red-500 text-sm"}
            >
              {state.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
