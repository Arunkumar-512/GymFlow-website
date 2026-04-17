import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    });

    return Response.json({ message: "User deleted" });
  } catch (error) {
    return Response.json(
      { error: "Failed to delete" },
      { status: 500 }
    );
  }
}