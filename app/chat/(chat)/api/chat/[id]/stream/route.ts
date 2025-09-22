// Minimal imports for disabled streaming endpoint

export async function GET() {
  // Disable streaming functionality - return 204 No Content
  return new Response(null, { status: 204 });
}
