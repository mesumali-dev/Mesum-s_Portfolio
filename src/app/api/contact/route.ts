// Deprecated: Migrated to Server Action sendContactEmail in src/app/actions.ts
export async function POST() {
    return new Response("Deprecated: Use sendContactEmail Server Action", { status: 410 });
}
