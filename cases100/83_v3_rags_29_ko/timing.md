# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "은정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "gym",
#       "text": "User has a gym membership near the station."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "anniversary",
#       "text": "User's anniversary is October 1."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-06-05",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-09",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-12",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: pga 투어에서 가장 많은 우승을 한 선수는 누구인가요?
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.21s  ⚡SPAN 주입 [d'=0.84s / d_lead=10.66s]: Sam Snead holds the record for the most wins on the PGA Tour, with 82 
     4.27s  agent 발화 시작: <ret> pga 투어에서 가장 많은 우승을 한 선수는 샘 스니드 선수인데, 총 팔십이번 우승을 기록하고 있
     4.31s  user  발화 끝
    14.93s  agent 발화 끝
