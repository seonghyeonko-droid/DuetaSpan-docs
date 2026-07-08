# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     4.00s  <ret> 발화 (turn1 첫 프레임)
     4.16s  user  발화 끝
     4.23s  agent 발화 시작: <ret> Certainly, let’s see about scheduling a visit for you.
     5.04s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.04s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    11.32s  agent 발화 끝
    11.36s  user  발화 시작: Is that the earliest time available that day?
    13.68s  <ret> 발화 (turn3 첫 프레임)
    13.84s  agent 발화 시작: <ret> Let me quickly check the availability for that propert
    13.94s  user  발화 끝
    15.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.45s]: (tool result) The Grandview Lofts has viewings available at ten AM, no
    22.28s  agent 발화 끝
    22.46s  user  발화 시작: Actually, could we push that to the afternoon— I mean, the l
    27.81s  <ret> 발화 (turn5 첫 프레임)
    28.05s  agent 발화 시작: <ret> Of course, let’s find the latest available slot for yo
    28.07s  user  발화 끝
    29.65s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.60s]: (tool result) The Grandview Lofts has viewings available at ten AM, no
    35.60s  agent 발화 끝
    35.86s  user  발화 시작: Great. And can you send me directions to The Grandview Lofts
    39.21s  agent 발화 시작: <ret> Absolutely, I can provide directions for you. Head nor
    39.26s  <ret> 발화 (turn7 첫 프레임)
    39.60s  user  발화 끝
    40.86s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.76s]: (tool result) Directions to The Grandview Lofts are: head north on Elm
    46.30s  agent 발화 끝
    46.98s  user  발화 시작: That sounds straightforward enough. What's the rental applic
    51.61s  user  발화 끝
    51.87s  agent 발화 시작: The application process typically involves a credit check an
    56.45s  user  발화 시작: Is there a fee for the application?
    56.59s  agent 발화 끝
    58.53s  <ret> 발화 (turn11 첫 프레임)
    58.69s  agent 발화 시작: <ret> Let me look up the application fee for The Grandview L
    58.80s  user  발화 끝
    60.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.05s]: (tool result) The application fee for The Grandview Lofts is fifty dol
    64.95s  agent 발화 끝
    65.96s  user  발화 시작: Fifty dollars— that seems—
    67.70s  agent 발화 시작: It’s fairly standard for properties in this area, considerin
    67.71s  user  발화 끝
    70.88s  user  발화 시작: Is a guarantor required if my income is slightly below their
    71.50s  agent 발화 끝
    75.03s  agent 발화 시작: A guarantor may be required if your income doesn’t meet the 
    75.05s  user  발화 끝
    81.80s  agent 발화 끝
    82.96s  user  발화 시작: Okay. What about parking? Is parking included?
    85.64s  <ret> 발화 (turn17 첫 프레임)
    85.79s  agent 발화 시작: <ret> I can check the parking situation at The Grandview Lof
    85.85s  user  발화 끝
    86.44s  ⚡SPAN 주입 [d'=0.80s / d_lead=3.86s]: (tool result) Parking at The Grandview Lofts is available for seventy-
    92.61s  user  발화 시작: Seventy-five dollars a month, huh? That's a bit steep.
    92.74s  agent 발화 끝
    95.40s  agent 발화 시작: It is a premium location, which often reflects in the associ
    95.61s  user  발화 끝
   100.35s  agent 발화 끝
   101.66s  user  발화 시작: Right. Are pets allowed at The Grandview Lofts?
   104.51s  <ret> 발화 (turn21 첫 프레임)
   104.66s  agent 발화 시작: <ret> I’ll look into the pet policy at that building for you
   104.81s  user  발화 끝
   106.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: (tool result) The Grandview Lofts allows cats and small dogs with a on
   111.26s  user  발화 시작: Three hundred dollars… okay. And what are the lease terms?
   111.28s  agent 발화 끝
   114.80s  agent 발화 시작: Lease terms are typically twelve months, but they sometimes 
   114.95s  user  발화 끝
   120.11s  agent 발화 끝
