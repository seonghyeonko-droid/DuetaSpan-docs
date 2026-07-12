# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "정호",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-25",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 영화 보러 가고 싶은데…
     2.44s  user  발화 끝
     3.54s  user  발화 시작: …혹시 근처에 괜찮은 영화관 있어요? — 아니, 이번 주 일요일로 바꿔야겠어요. 일요일에 보여주세요.
    10.02s  agent 발화 시작: 어떤 영화를 보고 싶으세요?
    10.08s  user  발화 끝
    11.40s  <ret> 발화 (turn3 첫 프레임)
    11.63s  agent 발화 시작: <ret> 일요일에 상영하는 영화는 '인사이드 아웃 이'가 있고, 상영 시간은 열시, 열두시 삼십분, 세시,
    11.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) {"movies": [{"title": "Inside Out 2", "times": 10:00, 12
    11.82s  agent 발화 끝
    14.18s  user  발화 시작: 와.
    14.82s  user  발화 끝
    19.28s  agent 발화 시작: 혹시 다른 영화도 찾아볼까요? 아니면 '인사이드 아웃 이' 예매를 도와드릴까요?
    19.42s  agent 발화 끝
    24.09s  agent 발화 끝
