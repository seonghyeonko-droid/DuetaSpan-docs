# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "유빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
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
#       "date": "2025-12-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 대칭 연방제가 언제 존재했는지 궁금해.
     2.87s  <ret> 발화 (turn1 첫 프레임)
     3.05s  user  발화 끝
     3.11s  agent 발화 시작: <ret> 죄송하지만, 대칭 연방제에 대한 정보는 찾을 수 없었어요. 관련 기록이 없는 것 같아요.
     3.11s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.86s]: (no information found)
     7.97s  agent 발화 끝
     8.58s  user  발화 시작: 아, 그렇구나.
     9.40s  user  발화 끝
     9.43s  agent 발화 시작: 혹시 다른 주제에 대해 이야기해 볼까요?
    10.15s  user  발화 시작: 응.
    10.46s  user  발화 끝
    11.40s  agent 발화 시작: 새로운 곳에 적응하는 건 쉽지 않지만, 제가 옆에서 함께 할게요.
    11.41s  agent 발화 끝
    13.62s  user  발화 시작: 어어.
    14.26s  user  발화 끝
    14.81s  agent 발화 끝
    14.97s  user  발화 시작: 음… 이 동네에서 괜찮은 식당 좀 찾아줄래?
    17.24s  <ret> 발화 (turn8 첫 프레임)
    17.48s  agent 발화 시작: <ret> 서울 가든(한국 음식, 별점 사 점 오), 리틀 이탈리아(이탈리아 음식, 별점 사 점 이), 버거
    17.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.72s]: (tool result) Restaurants found: Seoul Garden (Korean, 4.5 stars), Lit
    17.55s  user  발화 끝
    28.20s  agent 발화 끝
