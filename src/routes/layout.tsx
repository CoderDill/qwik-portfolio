import { component$ } from '@builder.io/qwik';
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <div class="min-h-screen grid grid-flow-col bg-slate-300">
          <div class="col-span-3 grid content-evenly justify-center place-items-center border-r-4 border-indigo-500">
            <h1 class="">Matthew Dillon</h1>
            <Link class="">About</Link>
            <Link class="">Skills</Link>
            <Link class="">Projects</Link>
            <Link class="">Experience</Link>
          </div>

          <div class="col-span-9">Probably a Slot</div>
        </div>
      </main>
    </>
  );
});
