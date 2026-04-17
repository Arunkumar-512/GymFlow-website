import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import DeleteButton from "@/app/components/Buttons/DeleteButton";
import RoleDropdown from "@/app/components/Buttons/RoleDropdown";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  if (session.user.role !== "ADMIN") redirect("/dashboard");

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-10">
      
      {/* 🔹 Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Manage {users.length} registered users and their permissions
          </p>
        </div>

        <div className="hidden sm:block px-4 py-2 bg-white/70 backdrop-blur-md border border-gray-200 rounded-full shadow-sm text-sm font-medium text-gray-700">
          Total: {users.length} Users
        </div>
      </div>

      {/* Mobile View (Cards) - Visible only on small screens */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((user: typeof users[0]) => (
          <div key={user.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 truncate max-w-[200px]">{user.email}</span>
                <span className="text-xs text-gray-400">ID: {user.id.slice(0, 12)}...</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <RoleDropdown id={user.id} currentRole={user.role} />
              <DeleteButton id={user.id} />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Desktop View (Table) - Visible on md and up */}
      <div className="hidden md:block bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50/50 border-b">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider text-xs">User</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider text-xs">Role</th>
                <th className="px-6 py-4 text-right font-semibold text-gray-600 uppercase tracking-wider text-xs">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user: typeof users[0]) => (
                <tr key={user.id} className="group hover:bg-white transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800">{user.email}</span>
                        <span className="text-[10px] text-gray-400 font-mono italic">ID: {user.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <RoleDropdown id={user.id} currentRole={user.role} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    {/* Note: Kept opacity-0 but added md:opacity-100 for better tablet usability */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <DeleteButton id={user.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🔹 Empty State */}
      {users.length === 0 && (
        <div className="py-20 flex flex-col items-center justify-center bg-white/50 rounded-2xl border-2 border-dashed border-gray-200">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">No users found</h3>
          <p className="text-gray-500 text-sm mt-1">New registrations will appear here automatically.</p>
        </div>
      )}
    </div>
  );
}