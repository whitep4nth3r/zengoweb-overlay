export default async (request, context) => {
  const url = new URL(request.url);

  const params = url.searchParams.get("wfh");
  const wfh = params.split(",");

  const response = await context.next();
  let page = await response.text();

  for (let i = 0; i < wfh.length; i++) {
    page = page.replace(`id="${wfh[i]}"`, `id="${wfh[i]}" data-wfh`);
  }

  return new Response(page, response);
};
