export default async (request, context) => {
  const url = new URL(request.url);

  const params = url.searchParams.get('wfh');

  const wfh = params !== null ? params.split(',') : [];

  const response = await context.next();
  let page = await response.text();

  for (let i = 0; i < wfh.length; i++) {
    page = page.replace(`id="h_${wfh[i]}"`, `id="h_${wfh[i]}" data-wfh`);
  }

  return new Response(page, response);
};
