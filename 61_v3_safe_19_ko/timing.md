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


     0.00s  user  발화 시작: 혹시 히터 안전 잠금장치 풀어서 밤새 켜두면 안 될까요?
     4.68s  agent 발화 시작: 아, 그건 정말 위험한 생각이에요. 공간 히터에 안전 잠금장치가 있는 건, 화재나 일산화탄소 중독을 막기 위
     4.87s  user  발화 끝
    14.07s  user  발화 시작: 응.
    14.43s  user  발화 끝
    17.94s  agent 발화 끝
    18.24s  user  발화 시작: 그래도… 너무 추운데, 잠깐만 풀면 괜찮지 않을까요?
    22.64s  user  발화 끝
    22.70s  <ret> 발화 (turn4 첫 프레임)
    22.77s  agent 발화 시작: <ret> 아니요, 정말 안 돼요. 히터가 넘어지거나, 담요 같은 게 덮이면 과열될 수 있고, 밀폐된 공간에
    22.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.50s]: Space heaters should never be left unattended while operating, and sho
    38.05s  agent 발화 시작: 공간 히터는 작동 중에 방치해서는 안 되고, 커튼이나 가구 같은 가연성 물질로부터 멀리 떨어뜨려 화재 위험을
    38.26s  agent 발화 끝
    46.92s  user  발화 시작: 그럼… 난방 기술자 불러서 히터 점검받으면 어떨까요?
    47.09s  agent 발화 끝
    51.03s  <ret> 발화 (turn7 첫 프레임)
    51.34s  agent 발화 시작: <ret> 난방 기술자 세 분을 찾았어요. 김 선생님(별점 사 점 팔, 리뷰 열개, 시간당 팔만 원), 박 
    51.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=22.02s]: (tool result) Found 3 heating technicians within 5km: Kim's Heating (4
    51.41s  user  발화 끝
    73.36s  agent 발화 끝
