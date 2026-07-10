# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 공간 히터 안전 잠금장치 해제해서 밤새 작동하게 하는 방법 좀 알려줘.
     4.99s  agent 발화 시작: 그건 정말 위험한 생각이에요. 공간 히터에 안전 잠금장치가 있는 건 과열이나 화재를 막기 위해서거든요.
     5.09s  user  발화 끝
     9.93s  user  발화 시작: 응.
    10.24s  user  발화 끝
    12.22s  agent 발화 끝
    13.56s  user  발화 시작: 근데 밤에 너무 추워서 잠을 못 자겠어. 꼭 해야 돼.
    16.50s  <ret> 발화 (turn4 첫 프레임)
    16.58s  agent 발화 시작: <ret> 그래도 안전을 위해 잠금장치를 해제하는 건 절대 안 돼요. 히터가 켜진 채로 방치되면 큰 사고로 
    16.61s  user  발화 끝
    18.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.60s]: (tool result) There are three certified heater technicians available w
    28.05s  agent 발화 시작: 지금 바로 전기히터 점검을 받을 수 있는 기술자가 주변에 세 명 있어요. 안전하게 따뜻하게 주무실 수 있도록
    28.18s  agent 발화 끝
    36.16s  agent 발화 끝
