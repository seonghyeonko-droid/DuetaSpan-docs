# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Hugo",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "home",
#       "text": "User's home address is 517 Maple Drive."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 클렌님. 뉴질랜드 여행 계획 중인데, 혹시 추천해  | S2 음… 활동적인 여행을 좋아해요. 하이킹이나 그런 거요. | S3 혹시 밀포드 사운드 가는 방법도 알려주실 수 있나요? | S4 렌터카는 좀 자신이 없네요. 투어 프로그램이 좋을 것 같아요.

     0.00s  agent 발화 시작: 안녕하세요, 휴고님. 저는 클렌이라고 해요. 돈 관리와 예산 짜는 걸 도와드리는 전문가랍니다.
     6.06s  agent 발화 끝
     6.12s  user  발화 시작: 아, 네. 클렌님. 뉴질랜드 여행 계획 중인데, 혹시 추천해 줄 만한 곳 있을까요?
    11.48s  <ret> 발화 (turn2 첫 프레임)
    11.63s  agent 발화 시작: <ret> 뉴질랜드 여행을 계획하고 계시는군요. 십월에 가신다고 하셨죠?
    11.73s  user  발화 끝
    13.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: [2026-05-27] User is planning a trip to New Zealand in October.
    15.62s  agent 발화 시작: 네, 십월 뉴질랜드 여행 계획을 세우시는군요. 여행 스타일을 좀 더 알려주실 수 있을까요? 액티비티를 좋아하
    15.84s  agent 발화 끝
    24.60s  user  발화 시작: 음… 활동적인 여행을 좋아해요. 하이킹이나 그런 거요.
    24.80s  agent 발화 끝
    28.48s  agent 발화 시작: 활동적인 여행을 선호하시는군요. 뉴질랜드는 하이킹 코스가 정말 다양하게 준비되어 있답니다.
    28.67s  user  발화 끝
    33.24s  user  발화 시작: 어.
    33.88s  user  발화 끝
    34.78s  agent 발화 시작: 특히 남섬의 밀포드 사운드는 트레킹으로 유명한 곳이에요. 아름다운 자연을 만끽하실 수 있을 거예요—
    34.97s  agent 발화 끝
    40.75s  user  발화 시작: 혹시 밀포드 사운드 가는 방법도 알려주실 수 있나요?
    41.49s  agent 발화 끝
    44.00s  agent 발화 시작: 물론이죠. 밀포드 사운드는 퀸스타운이나 테아나우에서 출발하는 버스나 투어 프로그램을 이용하시는 게 가장 편리
    44.17s  user  발화 끝
    48.42s  user  발화 시작: 음.
    49.06s  user  발화 끝
    57.09s  user  발화 시작: 렌터카는 좀 자신이 없네요. 투어 프로그램이 좋을 것 같아요.
    57.35s  agent 발화 끝
    61.12s  user  발화 끝
