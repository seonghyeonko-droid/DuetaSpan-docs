# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "서람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-13",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 일산에 괜찮은 분위기의 카페 알아봐 줄 수 있어? 조용하고, 공부하기 좋은 곳이면 더 좋겠어.
     7.86s  <ret> 발화 (turn1 첫 프레임)
     8.20s  agent 발화 시작: <ret> 일산 정발산로 백사십이에 있는 커피빈 일산점은 조용하고 편안한 분위기라 공부하거나 일하기 좋고, 
     8.20s  user  발화 끝
     8.70s  ⚡SPAN 주입 [d'=0.84s / d_lead=9.37s]: The Coffee Bean & Tea Leaf Ilsan branch offers a quiet atmosphere with
    17.57s  user  발화 시작: 음… 콘센트 있는 자리였으면 좋겠고, 창가 자리도 있으면 좋겠어.
    17.57s  agent 발화 끝
    22.84s  user  발화 끝
