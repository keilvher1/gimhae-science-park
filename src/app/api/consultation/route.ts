import { NextRequest, NextResponse } from "next/server";
// Neon Serverless Driver ì¬ì©
// npm install @neondatabase/serverless ì¤ì¹ íì
// import { neon } from "@neondatabase/serverless";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { company, manager, phone, email, industry, area, moveDate, address, message } = body;

    // íìê° ê²ì¦
    if (!company || !manager || !phone) {
      return NextResponse.json(
        { error: "íì¬ëª, ë´ë¹ì, ì°ë½ì²ë íì ìë ¥ê°ìëë¤." },
        { status: 400 }
      );
    }

    // ââââââââââââââââââââââââââââââââââââââ
    // Neon DB ì°ë ì½ë (íê²½ë³ì ì¤ì  í ì£¼ì í´ì )
    // ââââââââââââââââââââââââââââââââââââââ
    // const sql = neon(process.env.DATABASE_URL!);
    //
    // await sql`
    //   INSERT INTO consultations
    //     (company_name, manager_name, phone, email, industry, required_area, move_date, address, message)
    //   VALUES
    //     (${company}, ${manager}, ${phone}, ${email || null}, ${industry || null},
    //      ${area || null}, ${moveDate || null}, ${address || null}, ${message || null})
    // `;

    // ìì: DB ì°ë ì ê¹ì§ë ì½ìì ë¡ê·¸ë§ ì¶ë ¥
    console.log("ìë´ ì ì²­ ì ì:", {
      company, manager, phone, email, industry, area, moveDate, address, message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "ìë´ ì ì²­ì´ ìë£ëììµëë¤." },
      { status: 200 }
    );
  } catch (error) {
    console.error("ìë´ ì ì²­ ì²ë¦¬ ì¤ë¥:", error);
    return NextResponse.json(
      { error: "ìë² ì¤ë¥ê° ë°ìíìµëë¤. ì ì í ë¤ì ìëí´ì£¼ì¸ì." },
      { status: 500 }
    );
  }
}
