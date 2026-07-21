# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "가안",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-04",
#       "category": "phone",
#       "text": "User uses an Xperia 1."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "trip",
#       "text": "User is planning a trip to the Scottish Highlands in April."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "commute",
#       "text": "User walks 20 minutes to the office."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "skill",
#       "text": "User is getting fairly good at salsa dancing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 달러에서 유로로 지금 환율이 어떻게 돼요?
     2.49s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.72s  agent 발화 시작: <ret> 지금 달러 한 개가 유로로 영 점 구 이유로 정도 돼요.
     3.63s  ⚡SPAN 주입 [d'=1.14s / d_lead=4.12s]: (tool result) As of July 10, 2026, at 2:35 PM PST, one US dollar equal
     6.77s  user  발화 시작: 아, 그렇군요. 그럼 부산 해운대…
     6.84s  agent 발화 끝
    10.10s  user  발화 끝
    11.88s  user  발화 시작: …근처에 괜찮은 이탈리아 식당 있나요?
    13.16s  ⚡지연 SPAN 주입(선제발표 직전): La Boheme is an Italian restaurant located at 279, Haeundae-daero, Hae
    14.23s  agent 발화 시작: <ret> 해운대대로 이백칠십구에 있는 라 보엠이라는 이탈리아 식당이 평점 사 점 이에 리뷰가 천이백삼십사개
    14.42s  user  발화 끝
    21.37s  agent 발화 끝
