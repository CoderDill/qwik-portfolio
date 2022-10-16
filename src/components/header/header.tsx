import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-full grid grid-flow-col bg-slate-300">
      <div class="col-span-3">
        <h1>Matthew Dillon</h1>
        <Link class="">About</Link>
        <Link class="">Skills</Link>
        <Link class="">Projects</Link>
        <Link class="">Experience</Link>
      </div>
      <div class="col-span-9">content</div>
    </div>
  );
});
