# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "시빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-25",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-08-31",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 지금 웹사이트에서 스크롤 좀 올려 줄 수 있어?
     3.29s  <ret> 발화 (turn1 첫 프레임)
     3.33s  user  발화 끝
     3.60s  agent 발화 시작: <ret> 네, 스크롤을 위로 올렸습니다. 혹시 더 필요하신 건 없으세요?
     3.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) Successfully pressed the up arrow key on the scrollable 
     8.18s  agent 발화 끝
     8.63s  user  발화 시작: 좀 더 올려줘.
     9.38s  <ret> 발화 (turn3 첫 프레임)
     9.59s  user  발화 끝
     9.61s  agent 발화 시작: <ret> 조금 더 위로 올렸습니다. 지금 괜찮으신가요?
     9.62s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.19s]: (tool result) Successfully pressed the up arrow key on the scrollable 
    12.79s  agent 발화 끝
