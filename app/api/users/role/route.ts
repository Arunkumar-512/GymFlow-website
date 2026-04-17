import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    const { id, role } = await req.json();

    await prisma.user.update({
      where: { id },
      data: { role },
    });

    return Response.json({ message: "Role updated" });
  } catch (error) {
    return Response.json(
      { error: "Failed to update role" },
      { status: 500 }
    );
  }
}