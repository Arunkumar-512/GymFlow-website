"use client";

import { useRouter } from "next/navigation";

export default function RoleDropdown({
  id,
  currentRole,
}: {
  id: string;
  currentRole: string;
}) {
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newRole = e.target.value;

    await fetch("/api/users/role", {
      method: "PATCH",
      body: JSON.stringify({ id, role: newRole }),
    });

    router.refresh(); // 🔄 reload data
  };

  return (
    <select
      defaultValue={currentRole}
      onChange={handleChange}
      className="border px-2 py-1 rounded"
    >
      <option value="MEMBER">MEMBER</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  );
}