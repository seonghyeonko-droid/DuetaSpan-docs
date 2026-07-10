# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "현람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-15",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 글자들의 머리글자가 다른 의미를 나타내는 경우 있잖아, 그게 뭐라고 하지?
     6.19s  <ret> 발화 (turn1 첫 프레임)
     6.35s  user  발화 끝
     6.35s  agent 발화 시작: <ret> 글자들의 머리글자를 모아서 만든 단어는, 다른 단어들의 첫 글자를 따서 만든 약어라고 해요.
     6.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: An acronym is a word formed from the initial letters of other words an
    11.95s  agent 발화 끝
    12.03s  agent 발화 시작: 그런 약어를 통해 좀 더 간결하게 소통할 수 있겠죠.
    15.08s  agent 발화 끝
