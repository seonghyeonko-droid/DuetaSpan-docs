# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하서",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 음… 혹시 씨 아이 에이가 표적으로 삼았던 흑인 인권 운동가는 누구예요?
     4.87s  <ret> 발화 (turn1 첫 프레임)
     5.11s  agent 발화 시작: <ret> 아쉽게도, 로크스예요. 현재로서는 씨 아이 에이가 표적으로 삼았던 흑인 인권 운동가에 대한 정보가
     5.11s  ⚡SPAN 주입 [d'=0.64s / d_lead=7.43s]: (no information found)
     5.11s  user  발화 끝
    12.54s  user  발화 시작: 아, 그렇군요… 다른 걸 물어볼게요.
    12.54s  agent 발화 끝
    14.87s  agent 발화 시작: 어떤 점이든 편하게 말씀해 주세요.
    14.87s  user  발화 끝
    17.19s  agent 발화 끝
