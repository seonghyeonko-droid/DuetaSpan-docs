# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "민완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 리버데일 시즌 일의 십이화는 언제 방영됐어요?
     3.18s  <ret> 발화 (turn1 첫 프레임)
     3.34s  agent 발화 시작: <ret> 리버데일 시즌 일의 십이화는 이천십칠년 오월 사일에 방영됐어요. 혹시 다른 에피소드에 대해서도 궁
     3.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.24s]: The twelfth episode of Riverdale’s first season aired on May 4, 2017.
     3.34s  user  발화 끝
    10.58s  agent 발화 끝
