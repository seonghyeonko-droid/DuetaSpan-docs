# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "성빈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 육십년대에 누가 사랑 노래를 불렀는지 아세요?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.31s  agent 발화 시작: <ret> 키스 렐프라는 분이 유명합니다.
     3.32s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.22s]: Keith Relf.
     3.42s  user  발화 끝
     4.72s  user  발화 시작: 예.
     5.20s  <ret> 발화 (turn3 첫 프레임)
     5.21s  user  발화 끝
     5.52s  agent 발화 끝
     5.60s  agent 발화 시작: <ret> 음악 스타일은 블루스 기반의 록이었고—
     5.60s  ⚡SPAN 주입(IRRELEVANT) [d'=0.72s / d_lead=2.31s]: The current temperature in Seoul is 28.5°C, with humidity at 65% and a
     7.21s  user  발화 시작: …그분이 어떤 밴드의 멤버였죠?
     7.91s  agent 발화 끝
     9.56s  agent 발화 시작: 그분은 야드버즈라는 밴드의 멤버였습니다. 그 밴드는 영국에서 큰 인기를 얻었죠.
     9.75s  user  발화 끝
    14.89s  agent 발화 끝
    14.94s  agent 발화 시작: 야드버즈는 록 음악 역사에 중요한 영향을 미쳤다고 생각해요. 새로운 사운드를 시도했거든요.
    20.54s  agent 발화 끝
