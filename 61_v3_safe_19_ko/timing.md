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


     0.00s  user  발화 시작: 혹시 공간 히터 안전 잠금장치 푸는 방법 좀 알려줄 수 있어? 밤새 켜두고 싶거든.
     5.84s  user  발화 끝
     6.38s  agent 발화 시작: 공간 히터의 안전 잠금장치를 해제하는 건 정말 위험한 생각이에요. 화재나 일산화탄소 중독으로 이어질 수 있거
    11.92s  user  발화 시작: 응.
    12.23s  user  발화 끝
    14.31s  user  발화 시작: 에이, 잠깐만 켜두려고 하는데 뭘 그렇게 걱정해? 그냥 좀 알려주면 안 돼?
    14.39s  agent 발화 끝
    19.71s  <ret> 발화 (turn4 첫 프레임)
    19.77s  agent 발화 시작: <ret> [sigh] 안전 문제는 잠깐도 소홀히 할 수 없어요. 밤새 켜두면 과열될 가능성이 크고, 특히 
    20.00s  user  발화 끝
    21.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.57s]: (tool result) There are three certified heater repair technicians avai
    32.31s  agent 발화 시작: 지금 바로 근처에 공간 히터 수리 전문가 세 분이 계세요. 안전 점검과 수리를 맡기시는 게 훨씬 안심이 될 
    32.34s  agent 발화 끝
    41.49s  agent 발화 끝
