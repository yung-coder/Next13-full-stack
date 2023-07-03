import NextAuth from "next-auth";

import { authOptions } from "@/libnext/session";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
