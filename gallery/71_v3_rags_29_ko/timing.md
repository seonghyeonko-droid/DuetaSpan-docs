# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "연원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-03",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 그 악당 샌드위치 만드는 사람…
     2.91s  user  발화 시작: …배우 이름이 뭐야?
     2.91s  user  발화 끝
     4.04s  <ret> 발화 (turn2 첫 프레임)
     4.65s  agent 발화 시작: <ret> 그 악당 샌드위치 만드는 사람은 프레데릭 "프레드" 스톨러라고 해요. 코미디언이기도 하시고요.
     4.65s  user  발화 끝
     4.96s  ⚡SPAN 주입 [d'=0.92s / d_lead=6.40s]: Frederick "Fred" Stoller is an American actor and comedian.
    11.06s  agent 발화 끝
