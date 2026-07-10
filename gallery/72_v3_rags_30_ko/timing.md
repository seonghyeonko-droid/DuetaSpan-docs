# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "다연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-21",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "home",
#       "text": "User's home address is 857 Cedar Lane."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 유럽에서 인쇄술이 언제 처음 발명되었는지 궁금해요.
     3.57s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> 유럽에서 인쇄술이 처음 발명된 건… 천사백사십년쯤 된답니다. 새로운 지식을 얻으시는 걸 도와드릴 
     3.83s  user  발화 끝
     5.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.52s]: 금속 활자를 이용한 인쇄술은 13세기 중반 독일에서 요하네스 구텐베르크에 의해 발명되었습니다.
    16.25s  agent 발화 끝
