# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "Hannah",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "home",
#       "text": "User's home address is 839 Cedar Lane."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find grocery stores in M | S2 Hmm, are there any closer to South | S3 Milam's sounds good. Can you give  | S4 That’s great, thanks. It’s just… h

     0.00s  user  발화 시작: I need to find grocery stores in Miami.
     2.27s  <ret> 발화 (turn1 첫 프레임)
     2.57s  ⚡SPAN 주입 [d'=0.30s / d_lead=9.02s]: (tool result) {"results": [{"name": "Whole Foods Market", "address": "
     2.89s  agent 발화 시작: <ret> [happy] Certainly. I found Whole Foods Market on Bisca
     2.89s  user  발화 끝
    11.91s  user  발화 시작: Yeah.
    11.91s  agent 발화 끝
    12.27s  user  발화 시작: Hmm, are there any closer to South Beach? I’m staying near O
    12.27s  user  발화 끝
    16.80s  <ret> 발화 (turn5 첫 프레임)
    16.96s  agent 발화 시작: Right.
    16.96s  user  발화 끝
    17.32s  agent 발화 시작: <ret> [curious] Yes, there are a couple closer to Ocean Driv
    17.32s  agent 발화 끝
    17.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=11.91s]: (tool result) {"results": [{"name": "Milam's Market", "address": "736 
    29.22s  user  발화 시작: Okay.
    29.22s  agent 발화 끝
    29.58s  user  발화 시작: Milam's sounds good. Can you give me directions from Ocean D
    29.58s  user  발화 끝
    34.64s  agent 발화 시작: Oh.
    34.64s  user  발화 끝
    34.96s  <ret> 발화 (turn9 첫 프레임)
    35.00s  agent 발화 시작: <ret> [happy] Of course. It's about one point two miles, tak
    35.00s  agent 발화 끝
    35.90s  ⚡SPAN 주입 [d'=0.94s / d_lead=9.02s]: (tool result) {"distance": "1.2 miles", "duration": "5 minutes", "inst
    44.02s  user  발화 시작: That’s great, thanks. It’s just… hard to believe things stil
    44.02s  agent 발화 끝
    50.51s  agent 발화 시작: [sigh] It's completely understandable that grief continues t
    50.51s  user  발화 끝
    62.06s  agent 발화 끝
