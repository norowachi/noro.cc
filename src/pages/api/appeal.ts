export const prerender = false;
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const punishment = data.get("punishment");
  const reason = data.get("reason") as string;
  const appeal = data.get("appeal") as string;
  const token = request.headers.get("Authorization");

  if (!token) {
    return new Response(
      JSON.stringify({
        message: "Unauthorized",
      }),
      { status: 401 },
    );
  }

  if (!punishment || !reason || !appeal) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 },
    );
  }

  const result = await fetch("https://discord.com/api/v10/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch(() => {});

  if (!result) {
    return new Response(
      JSON.stringify({
        message: "Unauthorized",
      }),
      { status: 401 },
    );
  }

  const user = await result.json();

  const embed = {
    color: 9699539,
    fields: [
      {
        name: "What are you disputing?",
        value: punishment,
      },
      {
        name: "What was the reasoning for your punishment?",
        value: `${reason}`.substring(0, 1024),
      },
    ],
    timestamp: new Date().toISOString(),
  };

  if (appeal.length >= 1024) {
    appeal.match(/.{1,1021}/g)?.forEach((chunk, i, a) => {
      embed.fields.push({
        name: `Why should we revert this punishment? (Part ${i + 1}/${a.length})`,
        value: chunk + (i + 1 === a.length ? "" : "…"),
      });
    });
  }

  const webhookMsg = await fetch(import.meta.env.DISCORD_APPEALS_WEBHOOK, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: `<@${user.id}> | ${user.username}#${user.discriminator} | ${user.id}`,
      embeds: [embed],
    }),
  }).catch(console.error);

  if (!webhookMsg) {
    return new Response(
      JSON.stringify({
        message: "Failed to send appeal",
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      message: "Success! Await your answer soon.",
    }),
    { status: 200 },
  );
};
