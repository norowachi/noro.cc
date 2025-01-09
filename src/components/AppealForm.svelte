<script lang="ts">
  const token = document.cookie.match(/token=(.*?)(;|$)/)?.[1];

  async function submit(e: SubmitEvent) {
    e.preventDefault();

    if (!token) return alert("You must be logged in to submit an appeal.");

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const punishment = document.querySelector(
      "input[name=punishment]:checked",
    )?.id;
    if (!punishment) return alert("You must select a punishment to appeal.");
    formData.set("punishment", punishment);

    const response = await fetch("/api/appeal", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token!,
      },
    });

    const data = await response.json();
    return alert(data.message);
  }
</script>

<form
  onsubmit={submit}
  class="w-full px-2 md:px-[15%] flex flex-col justify-start absolute left-1/2 -translate-x-1/2"
>
  <div class="mb-4">
    <span class="border-l-4 pl-2 rounded-sm border-gray-600 text-lg mb-2">
      What are you disputing?
    </span>
    <div class="flex flex-col">
      <div class="inline-flex items-center pt-2 space-x-2">
        <input
          type="radio"
          id="warn"
          name="punishment"
          class="bottom-0 h-5 left-0 right-0 top-0 w-5"
          required
        />
        <label for="warn" class="w-full cursor-pointer">A Warn</label>
      </div>
      <div class="inline-flex items-center pt-2 space-x-2">
        <input
          type="radio"
          id="mute"
          name="punishment"
          class="bottom-0 h-5 left-0 right-0 top-0 w-5"
          required
        />
        <label for="mute" class="w-full cursor-pointer">A Mute</label>
      </div>
      <div class="inline-flex items-center pt-2 space-x-2">
        <input
          type="radio"
          id="ban"
          name="punishment"
          class="bottom-0 h-5 left-0 right-0 top-0 w-5"
          required
        />
        <label for="ban" class="w-full cursor-pointer">A Ban</label>
      </div>
    </div>
  </div>
  <div class="mb-4">
    <span class="border-l-4 pl-2 rounded-sm border-gray-600 text-lg mb-2">
      What was the reasoning for your punishment?
    </span>
    <textarea
      id="reason"
      name="reason"
      maxlength="1024"
      class="w-full h-32 rounded-2xl bg-gray-500 text-white text-center text-wrap p-2 mt-2 border-2 border-black dark:border-white focus:outline-none focus:border-purple-600 focus:dark:border-purple-800"
      required
    ></textarea>
  </div>
  <div class="mb-4">
    <span class="border-l-4 pl-2 rounded-sm border-gray-600 text-lg mb-2">
      Why should we revert this punishment?
    </span>
    <textarea
      id="appeal"
      name="appeal"
      maxlength="4084"
      class="w-full h-32 rounded-2xl bg-gray-500 text-white text-center text-wrap p-2 mt-2 border-2 border-black dark:border-white focus:outline-none focus:border-purple-600 focus:dark:border-purple-800"
      required
    ></textarea>
  </div>
  <div class="mb-4">
    <input
      type="checkbox"
      id="terms"
      class="bottom-0 h-5 left-0 right-0 top-0 w-5"
      required
    />
    <label for="terms" class="cursor-pointer">
      I agree to the processing of my information provided in this form, and my
      user ID and name with this website and the server's staff.
    </label>
    <br />
    <div class="text-center mt-2">
      <span class="font-black text-xl text-red-600">!</span>
      <span class="text-lg text-red-600">
        Never share your password or any other sensitive information
      </span>
      <span class="font-black text-xl text-red-600">!</span>
    </div>
  </div>
  <button class="w-32 p-4 bg-blue-500 justify-center m-auto rounded-lg mb-10">
    Send
  </button>
</form>
